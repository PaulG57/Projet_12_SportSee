import "../styles/keyData.css";

const KeyDataCard = ({ icon, value, unit, label }) => {
  return (
    <div className="key-data-card">
      <img src={icon} alt={label} className="key-data-icon" />
      <div>
        <p className="key-data-value">{value}{unit}</p>
        <p className="key-data-label">{label}</p>
      </div>
    </div>
  );
};

export default KeyDataCard;