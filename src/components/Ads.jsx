import ad1Background from "../assets/png/Ads 1.png";
import firstCar from "../assets/png/image 7.png";
import Button from "./Button";

const Ads = () => {
  return (
    <div>
      <div
        className="relative text-primary-white bg-cover bg-center w-full h-[232px] rounded"
        style={{ backgroundImage: `url(${ad1Background})` }}
      >
        <div className="absolute p-5">
          <p className="font-semibold">The Best Platform for Car Rental</p>
          <p className="text-xs font-medium my-3 leading-5">
            Ease of doing a car rental safely and <br /> reliably. Of course at
            a low price.
          </p>
          <Button text="Rental Car" />
          <div className="w-[196px] mt-5 ml-10">
            <img src={firstCar} alt="car" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ads;
