import axios from "axios";
import DistrictData from "../models/districtDataModel.js";

export const getDistrictData = async (req, res) => {
  const { state, district } = req.params;

  try {
    // 1️⃣ Try fetching from MongoDB (cache)
    const cachedData = await DistrictData.findOne({ state, district });
    if (cachedData) {
      console.log("📦 Serving from MongoDB cache");
      return res.json({ source: "cache", data: cachedData });
    }

    // 2️⃣ Fetch from external API if not in cache
    const apiKey =
      process.env.API_KEY ||
      "579b464db66ec23bdd00000115aed827ae74401e431e6286a8b870fe";

    const apiURL = `https://api.data.gov.in/resource/ee03643a-ee4c-48c2-ac30-9f2ff26ab722?api-key=${apiKey}&format=json&limit=100&filters[state_name]=${state}&filters[district_name]=${district}`;

    console.log("🌐 Fetching data from API:", apiURL);

    const response = await axios.get(apiURL);
    const records = response.data.records;

    if (!records || records.length === 0) {
      return res.status(404).json({ message: "No data found for this district." });
    }

    // ✅ Take the latest record (first one)
    const firstRecord = records[0];
    console.log("📊 Sample record:", firstRecord);

    // ✅ Extract key summary metrics for the dashboard
    const record = {
      state: firstRecord["state_name"] || state,
      district: firstRecord["district_name"] || district,
      month: firstRecord["month"] || "N/A",
      fin_year: firstRecord["fin_year"] || "N/A",
      totalEmployment: Number(firstRecord["Total_Individuals_Worked"]) || 0,
      totalWages: Number(firstRecord["Wages"]) || 0,
      worksCompleted: Number(firstRecord["Number_of_Completed_Works"]) || 0,
      avgDays:
        Number(
          firstRecord["Average_days_of_employment_provided_per_Household"]
        ) || 0,
      rawData: firstRecord, // full detailed info for frontend table
    };

    // 3️⃣ Save in MongoDB
    const newData = new DistrictData(record);
    await newData.save();

    console.log("✅ Saved fresh data to MongoDB");

    res.json({ source: "api", data: newData });
  } catch (error) {
    console.error("❌ Error in getDistrictData:", error.message);
    res.status(500).json({ error: "Failed to fetch district data" });
  }
};
