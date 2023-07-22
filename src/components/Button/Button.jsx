import styles from "./Button.module.scss";

function Button({
  variant = "btn",
  ariaLabel,
  title,
  type = "button",
  onClick,
  component,
  disabled,
}) {
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      className={styles[variant]}
      onClick={onClick}
      disabled={disabled}
    >
      {component} {title}
    </button>
  );
}

export default Button;
