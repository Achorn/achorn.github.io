import "./Selectable-underline-button.css";

function SelectableUnderline({ id, title, isSelected, handleClick }) {
  return (
    <p className="Selectable-underline" onClick={handleClick}>
      {title}
    </p>
  );
}
export default SelectableUnderline;
