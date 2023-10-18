import "./Topic.css";
import design from "../../../assets/design.jpg";
import { FiChevronRight } from "react-icons/fi";
import { NavLink as Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Topic({ image, title, description, Icon }) {
  const descriptionRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
    observer.observe(descriptionRef.current);
  }, []);
  return (
    <div className="Topic-container">
      <div className="Topic-image-container">
        <img
          src={image != null ? image : design}
          className="Hero-image"
          alt="logo"
          loading="lazy"
        />
      </div>
      <div ref={descriptionRef} className="Topic-words-container hidden">
        <h2 className="Topic-title ">{title.toUpperCase()}</h2>

        <div className="Description-container ">
          <h3 className="Topic-description ">{description}</h3>
        </div>
        <Link to={`/${title}`}>
          <div className="Learn-more-container ">
            <FiChevronRight
              color="#1f2425"
              size={40}
              className="Topic-arrow"
              style={{ opacity: 0 }}
            />
            {Icon}
            <FiChevronRight
              color="var(--primary_color)"
              size={40}
              className="Topic-arrow"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
