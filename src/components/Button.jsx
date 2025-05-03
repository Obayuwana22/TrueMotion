const Button = ({text}) => {
  return (
    <button className="bg-primary-500 py-2 px-8 rounded text-primary-white">
      <span className="font-semibold text-xs">{text}</span>
    </button>
  );
};
export default Button;
