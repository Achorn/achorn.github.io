import "./Topic.css";
import design from "../../../assets/design.jpg";
import { FiChevronRight } from "react-icons/fi";
import { NavLink as Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function Topic({ image, title, description, Icon }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
    observer.observe(titleRef.current);
    observer.observe(descriptionRef.current);
    observer.observe(buttonRef.current);
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
      <div className="Topic-words-container">
        <h2 ref={titleRef} className="Topic-title hidden">
          {title.toUpperCase()}
        </h2>

        <div ref={descriptionRef} className="Description-container hidden">
          <h3 className="Topic-description">{description}</h3>
        </div>
        <Link to={`/${title}`}>
          <div ref={buttonRef} className="Learn-more-container hidden">
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
