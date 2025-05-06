import ad1Background from "../assets/png/Ads 1.png";
import ad2Background from "../assets/png/Ads 2.png";
import firstCar from "../assets/png/image 7.png";
import secondCar from "../assets/png/image 8.png";

const Ads = () => {
  return (
    <div className="md:flex md:gap-5 xl:gap-10">
      <div
        className="text-primary-white bg-cover bg-center min-h-[232px] rounded w-full xl:min-h-[360px]"
        style={{ backgroundImage: `url(${ad1Background})` }}
      >
        <div className="p-5">
          <p className="font-semibold xl:text-3xl xl:w-72 leading-11">
            The Best Platform for Car Rental
          </p>
          <p className="text-xs font-medium my-3 leading-6 w-52 xl:text-base xl:w-72">
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <button className="bg-primary-500 py-2 px-8 rounded text-primary-white xl:px-5 xl:py-3 xl:mt-2">
            <span className="font-semibold text-xs xl:text-base">
              Rental Car
            </span>
          </button>
          <div className="mt-5 ml-10 xl:ml-28 xl:mt-0 ">
            <img src={firstCar} alt="car" className="" />
          </div>
        </div>
      </div>

      <div
        className="hidden md:block text-primary-white bg-cover bg-center min-h-[232px] rounded w-full xl:min-h-[360px]"
        style={{ backgroundImage: `url(${ad2Background})` }}
      >
        <div className="p-5">
          <p className="font-semibold xl:text-3xl xl:w-72 leading-11">
            Easy way to rent a car at a low price
          </p>
          <p className="text-xs font-medium my-3 leading-6 w-52 xl:text-base xl:w-72">
            Providing cheap car rental services and safe and comfortable
            facilities.
          </p>
          <button className="bg-information-500 py-2 px-8 rounded text-primary-white xl:px-5 xl:py-3 xl:mt-2">
            <span className="font-semibold text-xs xl:text-base">
              Rental Car
            </span>
          </button>
          <div className="mt-5 ml-10 xl:ml-28 xl:mt-0 ">
            <img src={secondCar} alt="car" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Ads;
