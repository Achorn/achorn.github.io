import "./Topic.css";
import design from "../../assets/design.jpg";
import { ReactComponent as Acorn } from "../../assets/acorn.svg";
import { FiChevronRight } from "react-icons/fi";
import UnderConstruction from "../../components/display/under-construction/Under-construction";
export default function Topic({ title, description, icon }) {
  return (
    <div className="Topic-container">
      <div className="Topic-image-container">
        <img src={design} className="Hero-image" alt="logo" />
      </div>
      <div className="Topic-words-container">
        <h2 className="Topic-title">{title}</h2>
        <div className="Uc-container">
          <div className="Topic-uc">
            <UnderConstruction description="Description" />
          </div>

          <div className="Description-container">
            <h3 className="Topic-description">{description}</h3>
          </div>
        </div>
        <div className="Learn-more-container">
          <Acorn className="Topic-icon" />

          <FiChevronRight color="#1f2425" size={40} className="Topic-arrow" />
        </div>
      </div>
    </div>
  );
}
