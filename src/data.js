import { nanoid } from "nanoid";
import carOne from "./assets/png/image 7.png";
import carTwo from "./assets/png/image 8.png";
import gasPumpIcon from "./assets/svg/gas-station.svg";
import gearTypeIcon from "./assets/svg/Car-gear-type.svg";
import usersIcon from "./assets/svg/profile-2user.svg";
import carPreviewOne from "./assets/png/car-preview-1.png";
import carPreviewTwo from "./assets/png/car-preview-2.png";
import ad1Background from "./assets/png/Ads 1.png";
import ad2Background from "./assets/png/Ads 2.png";

// Cars

export const cars = [
  {
    id: "all-new-rush",
    carBrand: "All New Rush",
    carType: "SUV",
    carImage: carOne,
    carPreviewImages: {
      carPreviewOne,
      carPreviewTwo,
    },
    specs: {
      fuel: { icon: gasPumpIcon, value: "90L" },
      transmission: { icon: gearTypeIcon, value: "Manual" },
      users: { icon: usersIcon, value: "2 People" },
    },
    description:
      'NISMO has become the embodiment of Nissan\'s outstanding performance, inspired by the most unforgiving proving ground, the "race track". ',
    price: 99,
    slashedPrice: 100,
    backDrop: ad1Background,
    adsHeader: "The Best Platform for Car Rental",
    adsDescription: "Ease of doing a car rental safely and reliably. Of course at a low price."
  },
  {
    id: "all-new",
    carBrand: "All New",
    carType: "SUV",
    carImage: carTwo,
    carPreviewImages: {
      carPreviewOne,
      carPreviewTwo,
    },
    specs: {
      fuel: { icon: gasPumpIcon, value: "90L" },
      transmission: { icon: gearTypeIcon, value: "Manual" },
      users: { icon: usersIcon, value: "2 People" },
    },
    description:
      'NISMO has become the embodiment of Nissan\'s outstanding performance, inspired by the most unforgiving proving ground, the "race track". ',
    price: 99,
    slashedPrice: 100,
    backDrop: ad2Background,
    adsHeader: "Easy way to rent a car at a low price",
    adsDescription: "Providing cheap car rental services and safe and comfortable facilities."
  },
];

// Car Features Data for Filter

export const carFeatures = [
  {
    id: nanoid(),
    title: "Type",
    list: [
      { id: nanoid(), label: "Sport", quantity: 10 },
      { id: nanoid(), label: "SUV", quantity: 12 },
      { id: nanoid(), label: "MPV", quantity: 16 },
      { id: nanoid(), label: "Sedan", quantity: 20 },
      { id: nanoid(), label: "Coupe", quantity: 14 },
      { id: nanoid(), label: "Hatchback", quantity: 14 },
    ],
  },
  {
    id: nanoid(),
    title: "Capacity",
    list: [
      { id: nanoid(), label: "2 Person", quantity: 10 },
      { id: nanoid(), label: "4 Person", quantity: 14 },
      { id: nanoid(), label: "6 Person", quantity: 12 },
      { id: nanoid(), label: "8 or More", quantity: 16 },
    ],
  },
];

// Footer Data

export const footer = [
  {
    id: nanoid(),
    title: "about",
    list: [
      { id: nanoid(), text: "how it works" },
      { id: nanoid(), text: "featured" },
      { id: nanoid(), text: "partnership" },
      { id: nanoid(), text: "business relation" },
    ],
  },
  {
    id: nanoid(),
    title: "socials",
    list: [
      { id: nanoid(), text: "discord" },
      { id: nanoid(), text: "instagram" },
      { id: nanoid(), text: "twitter" },
      { id: nanoid(), text: "facebook" },
    ],
  },
  {
    id: nanoid(),
    title: "community",
    list: [
      { id: nanoid(), text: "events" },
      { id: nanoid(), text: "blog" },
      { id: nanoid(), text: "podcast" },
      { id: nanoid(), text: "invite a friend" },
    ],
  },
];
