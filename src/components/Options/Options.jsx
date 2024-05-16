import css from "./Options.module.css";

const Options = ({ children, handleClick }) => {
  return (
    <button className={css.option} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Options;
