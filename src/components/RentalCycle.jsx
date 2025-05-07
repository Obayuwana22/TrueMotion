import pickUp from "../assets/svg/Mark.svg";
import dropOff from "../assets/svg/Mark (1).svg";
import SwapBtn from "./SwapBtn";
// import arrowDown from "../assets/svg/arrow-down.svg";
import LocationCard from "./LocationCard";
// import Locations from "./pick up details/Locations";
// import Date from "./pick up details/Date";
// import Time from "./pick up details/Time";

const RentalCycle = () => {
  const pickUpDetails = [
    {
      label: "Locations",
      type: "select",
      options: [
        { label: "Canada", value: "canada" },
        { label: "USA", value: "usa" },
      ],
    },
    {
      label: "Date",
      type: "date",
    },
    {
      label: "Time",
      type: "time",
    },
  ];

  const dropOffDetails = [
    {
      label: "Locations",
      type: "select",
      options: [
        { label: "Canada", value: "canada" },
        { label: "USA", value: "usa" },
      ],
    },
    {
      label: "Date",
      type: "date",
    },
    {
      label: "Time",
      type: "time",
    },
  ];

  return (
    <div className="relative">
      <div className="lg:flex lg:gap-36">
        <LocationCard
          icon={pickUp}
          heading="Pick - Up"
          fields={pickUpDetails}
        />

        <div className="absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2">
          <SwapBtn />
        </div>

        <LocationCard
          icon={dropOff}
          heading="Drop - Off"
          fields={dropOffDetails}
        />
      </div>
    </div>
  );
};
export default RentalCycle;
