import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";

const CustomTooltip = ({ payload }) => 
    payload && payload.length ? (
        <div style={{ background: "white", padding: "10px", fontSize: "12px", fontWeight: "bold" }}>
            {`${payload[0].value} min`}
        </div>
    ) : null;

const AverageSessionsChart = ({ data }) => {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    const [left, setLeft] = useState("100%");

    return (
        <div style={{ position: "relative", width: "20%", height: 250, background: "#FF0000", borderRadius: 10, overflow: "hidden" }}
            onMouseMove={(e) => setLeft(`${(e.nativeEvent.offsetX / e.currentTarget.clientWidth) * 100}%`)}
            onMouseLeave={() => setLeft("100%")}
        >
            <div style={{ position: "absolute", top: 0, left, right: 0, height: "100%", background: "rgba(0,0,0,0.2)", transition: "left 0.2s ease-out" }} />
            
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis
                        dataKey="day"
                        tickFormatter={(day) => days[day - 1]}
                        tickLine={false}
                        axisLine={false}
                        tick={{ fill: "white" }}
                    />
                    <Tooltip cursor={false} content={<CustomTooltip />} />
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="white"
                        activeDot={{ r: 6 }}
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AverageSessionsChart;
