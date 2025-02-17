import KeyDataCard from "./KeyDataCard";
import calorieIcon from "../assets/calories-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import carbIcon from "../assets/carbs-icon.png";
import lipidIcon from "../assets/fat-icon.png";
import "../styles/keyData.css";

const KeyDataSection = ({ keyData }) => {
  return (
    <div className="key-data-section">
      <KeyDataCard icon={calorieIcon} value={keyData.calorieCount} unit="kCal" label="Calories" />
      <KeyDataCard icon={proteinIcon} value={keyData.proteinCount} unit="g" label="Protéines" />
      <KeyDataCard icon={carbIcon} value={keyData.carbohydrateCount} unit="g" label="Glucides" />
      <KeyDataCard icon={lipidIcon} value={keyData.lipidCount} unit="g" label="Lipides" />
    </div>
  );
};

export default KeyDataSection;