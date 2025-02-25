import KeyDataCard from "./KeyDataCard";
import calorieIcon from "../assets/calories-icon.png";
import proteinIcon from "../assets/protein-icon.png";
import carbIcon from "../assets/carbs-icon.png";
import lipidIcon from "../assets/fat-icon.png";
import PropTypes from "prop-types";
import "../styles/keyData.css";

const KeyDataSection = ({ keyData }) => {
  const keyDataArray = [
    { icon: calorieIcon, value: keyData.calorieCount, unit: "kCal", label: "Calories" },
    { icon: proteinIcon, value: keyData.proteinCount, unit: "g", label: "Protéines" },
    { icon: carbIcon, value: keyData.carbohydrateCount, unit: "g", label: "Glucides" },
    { icon: lipidIcon, value: keyData.lipidCount, unit: "g", label: "Lipides" }
  ];
  
  return (
    <div className="key-data-section">
      {keyDataArray.map((item, index) => (
        <KeyDataCard key={index} icon={item.icon} value={item.value} unit={item.unit} label={item.label} />
      ))}
    </div>
  );
};

KeyDataSection.propTypes = {
  keyData: PropTypes.object.isRequired,
};

export default KeyDataSection;