import pickUp from "../assets/svg/Mark.svg";
import dropOff from "../assets/svg/Mark (1).svg";
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
    <div>
      <LocationCard icon={pickUp} heading="Pick - Up" fields={pickUpDetails} />
      <LocationCard icon={dropOff} heading="Drop - Off" fields={dropOffDetails} />
    </div>
  );
};
export default RentalCycle;

