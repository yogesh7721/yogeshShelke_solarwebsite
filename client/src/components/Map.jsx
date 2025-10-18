import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
import { GrSolaris } from "react-icons/gr";


const Map = () => {
    useEffect(() => {
        const map = L.map("solar-map", {
            center: [20.5937, 78.9629],
            zoom: 5,
            scrollWheelZoom: true,
            tap: false,
            touchZoom: true,
        });

        // Base Layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
            maxZoom: 18,
        }).addTo(map);

        // Sample Solar Data
        const irradianceData = [
            { city: "Delhi", lat: 28.6139, lng: 77.209, value: 6 },
            { city: "Mumbai", lat: 19.076, lng: 72.8777, value: 7.5 },
            { city: "Chennai", lat: 13.0827, lng: 80.2707, value: 5.5 },
            { city: "Kolkata", lat: 22.5726, lng: 88.3639, value: 4.5 },
            { city: "Bangalore", lat: 12.9716, lng: 77.5946, value: 6.5 },
            { city: "Pune", lat: 18.5204, lng: 73.8567, value: 7 },
            { city: "Jaipur", lat: 26.9124, lng: 75.7873, value: 6 },
            { city: "Ahmedabad", lat: 23.0225, lng: 72.5714, value: 7.2 },
            { city: "Goa", lat: 15.2993, lng: 74.124, value: 5 },
            { city: "Nagpur", lat: 21.1458, lng: 79.0882, value: 6.8 },
        ];

        // Heatmap
        const maxValue = 8;
        const heatData = irradianceData.map(d => [d.lat, d.lng, d.value / maxValue]);
        L.heatLayer(heatData, {
            radius: 30,
            blur: 25,
            maxZoom: 18,
            minOpacity: 0.3,
            gradient: {
                0.2: "blue",
                0.5: "lime",
                0.7: "yellow",
                1.0: "red",
            },
        }).addTo(map);

        // City circle markers
        irradianceData.forEach(({ city, lat, lng, value }) => {
            const color =
                value >= 7 ? "red" :
                    value >= 6 ? "orange" :
                        value >= 5 ? "yellow" :
                            "lime";

            const circle = L.circle([lat, lng], {
                radius: value * 5000,
                color,
                fillColor: color,
                fillOpacity: 0.4,
                weight: 1,
            }).addTo(map);

            circle.bindPopup(`
                <div style="font-size:14px;">
                    <b>${city}</b><br>
                    ☀️ Solar Irradiance: <b>${value} kWh/m²/day</b>
                </div>
            `);

            circle.bindTooltip(`${value} kWh/m²/day`, {
                permanent: true,
                direction: "center",
                className: "font-bold text-white",
            });
        });

        // 🔸 User click event
        map.on("click", function (e) {
            const { lat, lng } = e.latlng;

            // Generate random irradiance (for demo)
            const randomValue = (Math.random() * (8 - 4) + 4).toFixed(2);

            // Remove previous marker
            if (map.clickMarker) {
                map.removeLayer(map.clickMarker);
            }

            // Add new marker
            const marker = L.marker([lat, lng]).addTo(map);
            map.clickMarker = marker;

            marker.bindPopup(`
                <div style="font-size:14px;">
                    📍 <b>Custom Location</b><br>
                    Latitude: ${lat.toFixed(3)}<br>
                    Longitude: ${lng.toFixed(3)}<br>
                    ☀️ Estimated Irradiance: <b>${randomValue} kWh/m²/day</b>
                </div>
            `).openPopup();
        });

        // Legend
        const legend = L.control({ position: "bottomright" });
        legend.onAdd = function () {
            const div = L.DomUtil.create(
                "div",
                "info legend bg-white p-3 rounded-xl shadow-lg text-sm border border-gray-300"
            );
            div.innerHTML = `
                <h4 class="font-semibold text-gray-800 mb-2">☀️ Irradiance Levels</h4>
                <div><span style="background:red;width:20px;height:10px;display:inline-block;margin-right:5px;"></span> 7–8 kWh/m² (High)</div>
                <div><span style="background:orange;width:20px;height:10px;display:inline-block;margin-right:5px;"></span> 6–7 kWh/m² (Moderate)</div>
                <div><span style="background:yellow;width:20px;height:10px;display:inline-block;margin-right:5px;"></span> 5–6 kWh/m² (Low)</div>
                <div><span style="background:lime;width:20px;height:10px;display:inline-block;margin-right:5px;"></span> <5 kWh/m² (Very Low)</div>
            `;
            return div;
        };
        legend.addTo(map);

        return () => map.remove();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center py-8 bg-gray-100 min-h-screen">
            <h1 className=" flex gap-5 text-4xl font-bold text-green-700 mb-3">
                <GrSolaris className="w-12 h-16 text-yellow-500" />
                <p className="mt-2"> Solar Irradiance Map</p>
            </h1>
            <p className="text-gray-600 text-center max-w-2xl mb-6">
                This map displays solar irradiance levels (kWh/m²/day) across major Indian cities.
                Red areas represent higher irradiance, while blue represents lower levels.
                Click anywhere on the map to view estimated kWh at that location.
            </p>

            <div
                id="solar-map"
                className="w-[90%] h-[70vh] rounded-2xl shadow-lg border border-gray-300"
            ></div>

            <p className="text-sm text-gray-500 mt-4">
                * Demo Data – For Visualization Purpose Only
            </p>
        </div>
    );
};

export default Map;
