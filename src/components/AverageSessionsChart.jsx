import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useState } from "react";
import "../styles/averageSessions.css";

const CustomTooltip = ({ payload }) => 
    payload?.length ? <div className="tooltip-box">{`${payload[0].value} min`}</div> : null;

const AverageSessionsChart = ({ data }) => {
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    const [left, setLeft] = useState("100%");

    return (
        <div className="chart-container"
            onMouseMove={(e) => setLeft(`${(e.nativeEvent.offsetX / e.currentTarget.clientWidth) * 100}%`)}
            onMouseLeave={() => setLeft("100%")}
        >
            <div className="chart-title">Durée moyenne des sessions</div>
            <div className="chart-overlay" style={{ left, right: 0 }} />

            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <YAxis hide domain={['dataMin - 10', 'dataMax + 20']} />
                    <XAxis 
                        dataKey="day" 
                        tickFormatter={(day) => days[day - 1]} 
                        tick={{ fill: "rgba(255, 255, 255, 0.7)" }} 
                        tickLine={false} 
                        axisLine={false}
                        padding={{ left: 20, right: 20 }}
                    />
                    <Tooltip cursor={false} content={<CustomTooltip />} />
                    <Line 
                        type="monotone" 
                        dataKey="sessionLength" 
                        stroke="rgba(255, 255, 255, 0.7)" 
                        strokeWidth={2} 
                        dot={false} 
                        activeDot={{ r: 4, fill: "#FFFFFF", stroke: "white", strokeWidth: 3 }} 
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AverageSessionsChart;