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
