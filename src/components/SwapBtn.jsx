import swap from "../assets/svg/Swap.svg";

const SwapBtn = () => {
  return (
    <button className="bg-primary-500 py-5 px-5 rounded shadow-[0_0_10px_rgba(0,0,0,0.2)]">
      <img src={swap} alt="swap arrows" />
    </button>
  );
};
export default SwapBtn;
