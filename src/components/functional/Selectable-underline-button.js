import "./Selectable-underline-button.css";

function SelectableUnderline({ id, title, isSelected, handleClick }) {
  return (
    <div className="active-container">
      <p
        className={
          `Selectable-underline`
          //  ${isSelected ? "active" : null}`
        }
        onClick={handleClick}
      >
        {title}
      </p>
    </div>
  );
}
export default SelectableUnderline;
