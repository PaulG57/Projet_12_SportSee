import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const ActivityChart = ({ data }) => {
    return (
        <div className="activity-chart">
            <div className="bar-chart-title">
                <h2>Activité quotidienne</h2>
                <div>
                    <h2> ⚫ Poids (kg)</h2>
                    <h2> 🔴 Calories brûlées (kCal)</h2>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} barGap={10} barSize={10}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="day" tickFormatter={(day, index) => index + 1} />
                    <YAxis yAxisId="right" orientation="right" dataKey="kilogram" domain={['dataMin - 1', 'dataMax + 1']} />
                    <YAxis yAxisId="left" orientation="left" dataKey="calories" hide />
                    <Tooltip labelFormatter={() => ''} />
                    <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
                    <Bar yAxisId="left" dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ActivityChart;
