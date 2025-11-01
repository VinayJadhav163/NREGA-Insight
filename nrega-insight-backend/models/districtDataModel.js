import mongoose from "mongoose";

const districtDataSchema = new mongoose.Schema(
  {
    // 🏛️ Basic identifiers
    state: {
      type: String,
      required: true,
      index: true,
    },
    district: {
      type: String,
      required: true,
      index: true,
    },
    month: {
      type: String,
      default: "N/A",
    },
    fin_year: {
      type: String,
      default: "2024-2025",
    },

    // 📊 Core summary metrics (for charts/cards)
    totalEmployment: {
      type: Number,
      default: 0,
    },
    totalWages: {
      type: Number,
      default: 0,
    },
    worksCompleted: {
      type: Number,
      default: 0,
    },
    avgDays: {
      type: Number,
      default: 0,
    },

    // 🧾 Extended key metrics (for detailed insights)
    Approved_Labour_Budget: { type: Number, default: 0 },
    Average_Wage_rate_per_day_per_person: { type: Number, default: 0 },
    Differently_abled_persons_worked: { type: Number, default: 0 },
    Material_and_skilled_Wages: { type: Number, default: 0 },
    Number_of_GPs_with_NIL_exp: { type: Number, default: 0 },
    Number_of_Ongoing_Works: { type: Number, default: 0 },
    Persondays_of_Central_Liability_so_far: { type: Number, default: 0 },
    SC_persondays: { type: Number, default: 0 },
    SC_workers_against_active_workers: { type: Number, default: 0 },
    ST_persondays: { type: Number, default: 0 },
    ST_workers_against_active_workers: { type: Number, default: 0 },
    Total_Adm_Expenditure: { type: Number, default: 0 },
    Total_Exp: { type: Number, default: 0 },
    Total_Households_Worked: { type: Number, default: 0 },
    Total_Individuals_Worked: { type: Number, default: 0 },
    Total_No_of_Active_Job_Cards: { type: Number, default: 0 },
    Total_No_of_Active_Workers: { type: Number, default: 0 },
    Total_No_of_HHs_completed_100_Days_of_Wage_Employment: { type: Number, default: 0 },
    Total_No_of_JobCards_issued: { type: Number, default: 0 },
    Total_No_of_Workers: { type: Number, default: 0 },
    Total_No_of_Works_Takenup: { type: Number, default: 0 },
    Women_Persondays: { type: Number, default: 0 },
    percent_of_Category_B_Works: { type: Number, default: 0 },
    percent_of_Expenditure_on_Agriculture_Allied_Works: { type: Number, default: 0 },
    percent_of_NRM_Expenditure: { type: Number, default: 0 },
    percentage_payments_gererated_within_15_days: { type: Number, default: 0 },
    Remarks: { type: String, default: "NA" },

    // 🧩 Store full API payload (for debugging or frontend table)
    rawData: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },

    // 🕒 Cache expiry (auto-delete after 7 days)
    createdAt: {
      type: Date,
      default: Date.now,
      expires: 86400 * 7,
    },
  },
  { strict: false } // allows unknown/new fields from API automatically
);

export default mongoose.model("DistrictData", districtDataSchema);
