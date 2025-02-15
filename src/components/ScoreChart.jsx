import { RadialBarChart, RadialBar } from "recharts";
import "../styles/scoreChart.css";

const ScoreChart = ({ score }) => (
  <div className="score-container">
    <h3 className="score-title">Score</h3>
    <RadialBarChart 
      width={200} height={200} 
      cx="50%" cy="50%" 
      innerRadius="80%" outerRadius="100%" 
      startAngle={90} endAngle={90 + (score * 3.6)}
      barSize={10} data={[{ value: score }]}
    >
      <RadialBar dataKey="value" fill="red" clockWise cornerIsExternal cornerRadius={10} />
    </RadialBarChart>
    <div className="score-text">
      <p className="score-value">{score}%</p>
      <p className="score-subtext">de votre objectif</p>
    </div>
  </div>
);

export default ScoreChart;
