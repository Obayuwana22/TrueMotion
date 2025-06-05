import { nanoid } from "nanoid";

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
  