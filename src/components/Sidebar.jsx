import icon1 from "../assets/icon_1.png";
import icon2 from "../assets/icon_2.png";
import icon3 from "../assets/icon_3.png";
import icon4 from "../assets/icon_4.png";

function Sidebar() {
    return (
      <aside className="sidebar">
        <ul>
          <li><img src={icon1} alt="Yoga" /></li>
          <li><img src={icon2} alt="Natation" /></li>
          <li><img src={icon3} alt="Vélo" /></li>
          <li><img src={icon4} alt="Musculation" /></li>
        </ul>
        <p>Copyright SportSee 2025</p>
      </aside>
    );
}

export default Sidebar;