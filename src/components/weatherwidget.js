import React, { useState, useEffect } from "react";

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  // ✅ API key hardcoded — calls OpenWeatherMap directly
  const API_KEY = "141d5dd506f64fa5fb475ad319f291e3";

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError(null);

      // ✅ This calls OpenWeatherMap directly — NOT your backend!
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );

      if (!res.ok) {
        setError("City not found!");
        return;
      }

      const data = await res.json();
      setWeather(data);

    } catch (err) {
      setError("Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather("London");
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      fetchWeather(search.trim());
      setSearch("");
    }
  };

  const getIcon = (code) =>
    `https://openweathermap.org/img/wn/${code}@2x.png`;

  const getWeatherBg = (main) => {
    const bgs = {
      Clear:        "linear-gradient(135deg,#f6d365,#fda085)",
      Clouds:       "linear-gradient(135deg,#89f7fe,#66a6ff)",
      Rain:         "linear-gradient(135deg,#4facfe,#00f2fe)",
      Drizzle:      "linear-gradient(135deg,#43e97b,#38f9d7)",
      Thunderstorm: "linear-gradient(135deg,#a18cd1,#fbc2eb)",
      Snow:         "linear-gradient(135deg,#e0c3fc,#8ec5fc)",
      Mist:         "linear-gradient(135deg,#cfd9df,#e2ebf0)",
    };
    return bgs[main] || "linear-gradient(135deg,#4f8ef7,#a78bfa)";
  };

  return (
    <div style={s.wrapper}>

      {/* Search Bar */}
      <form onSubmit={handleSearch} style={s.searchForm}>
        <input
          type="text"
          placeholder="Search city..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={s.searchInput}
        />
        <button type="submit" style={s.searchBtn}>🔍</button>
      </form>

      {/* Weather Card */}
      <div style={{
        ...s.card,
        background: weather ? getWeatherBg(weather.weather[0].main) : "#4f8ef7",
      }}>

        {loading && (
          <div style={s.center}>
            <p style={s.loadingText}>⏳ Loading weather...</p>
          </div>
        )}

        {error && (
          <div style={s.center}>
            <p style={s.errorText}>❌ {error}</p>
          </div>
        )}

        {!loading && !error && weather && (
          <>
            <div style={s.location}>
              <span style={s.cityName}>
                {weather.name}, {weather.sys.country}
              </span>
              <span style={s.date}>
                {new Date().toLocaleDateString("en-US", {
                  weekday:"long", month:"long", day:"numeric"
                })}
              </span>
            </div>

            <div style={s.tempRow}>
              <img
                src={getIcon(weather.weather[0].icon)}
                alt={weather.weather[0].description}
                style={s.weatherIcon}
              />
              <div>
                <p style={s.temp}>{Math.round(weather.main.temp)}°C</p>
                <p style={s.desc}>{weather.weather[0].description}</p>
              </div>
            </div>

            <div style={s.details}>
              {[
                { label:"Feels Like", value:`${Math.round(weather.main.feels_like)}°C` },
                { label:"Humidity",   value:`${weather.main.humidity}%` },
                { label:"Wind",       value:`${weather.wind.speed} m/s` },
                { label:"Pressure",   value:`${weather.main.pressure} hPa` },
              ].map(item => (
                <div key={item.label} style={s.detailItem}>
                  <span style={s.detailLabel}>{item.label}</span>
                  <span style={s.detailValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const s = {
  wrapper: { display:"flex", flexDirection:"column", gap:"12px" },
  searchForm: { display:"flex", gap:"8px" },
  searchInput: {
    flex:1, padding:"10px 14px", borderRadius:"8px",
    border:"1px solid #2a2d4a", background:"#0d0f1f",
    color:"#e8eaf6", fontSize:"14px", outline:"none",
  },
  searchBtn: {
    padding:"10px 14px", borderRadius:"8px",
    border:"none", background:"#4f8ef7",
    cursor:"pointer", fontSize:"16px",
  },
  card: {
    borderRadius:"16px", padding:"24px",
    minHeight:"200px", display:"flex",
    flexDirection:"column", gap:"16px",
    boxShadow:"0 8px 24px rgba(0,0,0,0.2)",
  },
  center: { display:"flex", justifyContent:"center", alignItems:"center", flex:1 },
  loadingText: { color:"#fff", fontSize:"16px", fontWeight:"600", margin:0 },
  errorText: { color:"#fff", fontSize:"16px", fontWeight:"600", margin:0 },
  location: { display:"flex", flexDirection:"column", gap:"4px" },
  cityName: { color:"#fff", fontSize:"22px", fontWeight:"800" },
  date: { color:"rgba(255,255,255,0.8)", fontSize:"13px" },
  tempRow: { display:"flex", alignItems:"center", gap:"8px" },
  weatherIcon: { width:"80px", height:"80px", filter:"drop-shadow(0 4px 8px rgba(0,0,0,0.2))" },
  temp: { margin:0, color:"#fff", fontSize:"48px", fontWeight:"800", lineHeight:1 },
  desc: { margin:"4px 0 0 0", color:"rgba(255,255,255,0.9)", fontSize:"16px", textTransform:"capitalize" },
  details: { display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px" },
  detailItem: {
    background:"rgba(255,255,255,0.2)", borderRadius:"10px",
    padding:"10px 14px", display:"flex",
    flexDirection:"column", gap:"2px",
  },
  detailLabel: { color:"rgba(255,255,255,0.8)", fontSize:"11px", fontWeight:"600", textTransform:"uppercase" },
  detailValue: { color:"#fff", fontSize:"16px", fontWeight:"700" },
};