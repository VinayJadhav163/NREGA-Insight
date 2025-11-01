import { useState } from "react";
import { API } from "../config";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function Dashboard() {
  const [state, setState] = useState("MAHARASHTRA");
  const [district, setDistrict] = useState("JALNA");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [detecting, setDetecting] = useState(false);

  // 🛰️ Auto-detect District & State (English only)
  const detectDistrict = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported in your browser.");
      return;
    }

    setDetecting(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&accept-language=en&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();

          // Extract district and state
          let detectedDistrict =
            data.address.district ||
            data.address.state_district ||
            data.address.county ||
            "";
          let detectedState = data.address.state || "";

          detectedDistrict = detectedDistrict
            .replace(/\bdistrict\b/i, "")
            .replace(/\bdist\b/i, "")
            .trim();

          if (!detectedDistrict) {
            alert("Couldn't detect district properly. Try again.");
            setDetecting(false);
            return;
          }

          setDistrict(detectedDistrict.toUpperCase());
          setState(detectedState.toUpperCase());

          alert(`✅ Detected: ${detectedDistrict}, ${detectedState}`);
        } catch (err) {
          console.error("Error detecting district:", err);
          alert("Could not detect district. Please try again.");
        } finally {
          setDetecting(false);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        alert("Unable to access your location. Please allow permission.");
        setDetecting(false);
      }
    );
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API.MGNREGA}/${state}/${district}`);

      setData(res.data.data);
    } catch (err) {
      alert("Failed to fetch data 😞");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-start p-6">
      {/* ✨ Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center z-50 backdrop-blur-sm animate-fadeIn">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
            <p className="text-white text-lg font-semibold animate-pulse">
              Fetching data from NREGA API...
            </p>
          </div>
        </div>
      )}

      {/* 🌈 Gradient Header Section */}
      <div className="w-full max-w-5xl text-center mb-10">
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-3xl shadow-lg px-8 py-10 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full blur-3xl"></div>

          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Empowering Rural India Through Data
          </h2>
          <p className="text-indigo-100 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            The <span className="font-semibold">MGNREGA Dashboard</span> brings
            transparency and insights into India’s largest employment guarantee
            program — visualize district-level work, wages, and performance
            trends in real-time.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <a
              href="/about"
              className="bg-white text-indigo-700 font-semibold px-6 py-2 rounded-xl shadow hover:bg-indigo-50 transition"
            >
              Learn More
            </a>
            <a
              href="/contact"
              className="bg-indigo-800 text-white font-semibold px-6 py-2 rounded-xl shadow hover:bg-indigo-900 transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* 🧭 Input Section */}
      <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col md:flex-row items-center gap-4 w-full max-w-3xl mb-10 border border-indigo-100">
        <input
          value={state}
          onChange={(e) => setState(e.target.value.toUpperCase())}
          placeholder="Enter State"
          className="flex-1 border border-gray-300 rounded-xl px-5 py-3 focus:ring-2 focus:ring-indigo-400 outline-none text-gray-700 font-medium"
        />
        <input
          value={district}
          onChange={(e) => setDistrict(e.target.value.toUpperCase())}
          placeholder="Enter District"
          className="flex-1 border border-gray-300 rounded-xl px-5 py-3 focus:ring-2 focus:ring-indigo-400 outline-none text-gray-700 font-medium"
        />

        <button
          onClick={detectDistrict}
          disabled={detecting}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold px-5 py-3 rounded-xl shadow hover:scale-105 transition-all duration-200 disabled:opacity-70"
        >
          {detecting ? "Detecting..." : "Detect My District"}
        </button>

        <button
          onClick={fetchData}
          disabled={loading}
          className="flex items-center justify-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Loading...</span>
            </>
          ) : (
            "Fetch Data"
          )}
        </button>
      </div>

      {/* 📊 Dashboard Section */}
      {data && (
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-5xl border border-indigo-100">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {data.district}, {data.state}
              </h2>
              <p className="text-sm text-gray-500">
                {data.month} ({data.fin_year})
              </p>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <Card title="Total Employment" color="blue" value={data.totalEmployment} />
            <Card title="Total Wages (₹)" color="green" value={data.totalWages} />
            <Card title="Works Completed" color="yellow" value={data.worksCompleted} />
            <Card title="Avg. Days" color="purple" value={data.avgDays} />
          </div>

          {/* Chart */}
          <div className="h-72 mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { name: "Employment", value: Number(data.totalEmployment) },
                  { name: "Wages", value: Number(data.totalWages) },
                  { name: "Works", value: Number(data.worksCompleted) },
                  { name: "Avg Days", value: Number(data.avgDays) },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#6366f1" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Expand Details */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-indigo-600 font-medium underline mb-3 hover:text-indigo-800 transition"
          >
            {expanded ? "Hide Details" : "Show All Details"}
          </button>

          {expanded && (
            <div className="overflow-x-auto border rounded-xl max-h-[400px] overflow-y-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-indigo-50 sticky top-0">
                  <tr>
                    <th className="text-left px-4 py-2 border-b w-1/2">Field</th>
                    <th className="text-left px-4 py-2 border-b">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(data.rawData || data).map(([key, value], i) => (
                    <tr key={i} className="border-b hover:bg-indigo-50">
                      <td className="px-4 py-2 font-medium text-gray-700">{key}</td>
                      <td className="px-4 py-2 text-gray-900">{String(value)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function Card({ title, value, color }) {
  const gradientMap = {
    blue: "from-blue-500 to-indigo-500",
    green: "from-green-400 to-emerald-500",
    yellow: "from-yellow-400 to-orange-500",
    purple: "from-purple-500 to-pink-500",
  };

  return (
    <div
      className={`p-4 rounded-xl shadow-md text-center text-white bg-gradient-to-r ${gradientMap[color]}`}
    >
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-xl font-bold mt-1">{value.toLocaleString("en-IN")}</p>
    </div>
  );
}
