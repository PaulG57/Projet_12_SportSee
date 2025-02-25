import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import "../styles/performance.css";

const RadarGraph = ({ data }) => {
    return (
        <div className="radar-container">
            <ResponsiveContainer>
                <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
                    <PolarGrid stroke="white" strokeOpacity={0.7} radialLines={false} />
                    <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 12 }} tickSize={15} />
                    <Radar dataKey="value" stroke="red" fill="red" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

RadarGraph.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        kind: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
    })).isRequired,
};

export default RadarGraph;