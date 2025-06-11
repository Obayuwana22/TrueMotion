const Button = ({ text, className = "" }) => {
  return (
    <button
      className={`bg-primary-500 py-2 px-5 rounded text-primary-white ${className}`}
    >
      {text}
    </button>
  );
};
export default Button;
