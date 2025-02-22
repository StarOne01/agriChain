import React, { useState, useEffect } from "react";

const API_KEY = "579b464db66ec23bdd00000165120c09b2624e4c5aab70fb19f4ae50";
// const BASE_URL = "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070";

const BASE_URL = "http://localhost:3000/market-data";
const tamilNaduDistricts = [
  "Ariyalur", "Chengalpattu", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakuruchi", "Kancheepuram", "Karur", "Krishnagiri",
  "Madurai", "Nagapattinam", "Nagercoil (Kannyiakumari)", "Namakkal", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", 
  "Sivaganga", "Tenkasi", "Thanjavur", "The Nilgiris", "Theni", "Thiruchirappalli", "Thirunelveli", "Thirupathur", "Thirupur", 
  "Thiruvannamalai", "Thiruvarur", "Thiruvellore", "Tuticorin", "Vellore", "Villupuram", "Virudhunagar"
];

const MarketFilter = () => {
  const [filters, setFilters] = useState({
    state: "Tamil Nadu",
    district: "",
    market: "",
    commodity: "",
    variety: "",
    grade: "",
  });
  const [data, setData] = useState(null);
  const [date, setDate] = useState(null);
  const [loading, setLoading] = useState(false);
const [filterOptions, setFilterOptions] = useState({
    state: ["Tamil Nadu"],
    district: tamilNaduDistricts,
    market: [],
    commodity: [],
    variety: [],
    grade: [],
  });

  const fetchFilterOptions = async (updatedFilters) => {
    let queryParams = new URLSearchParams({
      "api-key": API_KEY,
      format: "json",
    });
  
    // Only apply district filter for getting relevant markets
    if (updatedFilters.district) {
      queryParams.append("filters[district]", updatedFilters.district);
    } else {
      queryParams.append("filters[state]", updatedFilters.state);
    }
  
    try {
      const response = await fetch(`${BASE_URL}?${queryParams.toString()}`);
      const result = await response.json();
    
      const records = result.records || [];
      setDate(result.updated_date)
      setFilterOptions((prev) => ({
        ...prev,
        market: [...new Set(records.map((item) => item.Market))],
        commodity: [...new Set(records.map((item) => item.Commodity))],
        variety: [...new Set(records.map((item) => item.Variety))],
        grade: [...new Set(records.map((item) => item.Grade))],
      }));
    } catch (error) {
      console.error("Error fetching filter options:", error);
    }
  };
  
  // Ensure market options update only when state or district changes
  useEffect(() => {
    fetchFilterOptions({ state: filters.state, district: filters.district });
  }, [filters.state, filters.district]);
  

  const fetchData = async () => {
    setLoading(true);
    let queryParams = new URLSearchParams({
      "api-key": API_KEY,
      format: "json",
    });

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        queryParams.append(`filters[${key}]`, value);
      }
    });

    try {
      const response = await fetch(`${BASE_URL}?${queryParams.toString()}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 font-inter ">
      <h1 className="text-2xl font-bold mb-4">Local Market Data</h1>
      
      <div className="grid cursor-pointer grid-cols-2 gap-4 mb-4">
        {Object.keys(filters).map((key) => (
          <select
          className="cursor-pointer"
            key={key}
            value={filters[key]}
            onChange={(e) => setFilters({ ...filters, [key]: e.target.value })}
          >
            <option className=" cursor-pointer" value="">Select {key}</option>
            {filterOptions[key]?.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        ))}
      </div>
      <button className="bg-primary py-2 px-3 rounded-md" onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Fetch Data"}
      </button>

        <p className="mt-4">Data last updated on: {
            date ? new Date(date).toLocaleString() : "22-02-2025 08:00PM"
            }</p>
      <div className="mt-6">
      {data ? (
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="border px-4  py-2">State</th>
                <th className="border px-4  py-2">District</th>
                <th className="border px-4  py-2">Market</th>
                <th className="border px-4  py-2">Commodity</th>
                <th className="border px-4  py-2">Variety</th>
                <th className="border px-4  py-2">Grade</th>
                <th className="border px-4  py-2">Min Price</th>
                <th className="border px-4  py-2">Max Price</th>
                <th className="border px-4  py-2">Price Per Kg</th>
              </tr>
            </thead>
            <tbody>
              {data.records.map((item, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{item.State}</td>
                  <td className="border px-4 py-2">{item.District}</td>
                  <td className="border px-4 py-2">{item.Market}</td>
                  <td className="border px-4 py-2">{item.Commodity}</td>
                  <td className="border px-4 py-2">{item.Variety}</td>
                  <td className="border px-4 py-2">{item.Grade}</td>
                  <td className="border px-4 py-2">{item.Min_x0020_Price}</td>
                  <td className="border px-4 py-2">{item.Max_x0020_Price}</td>
                  <td className="border px-4 py-2">{item.Modal_x0020_Price/100}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default MarketFilter;
