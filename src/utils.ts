import categories from "./assets/icons/categories.svg";
import categoriesFilled from "./assets/icons/categories-filled.svg";
import chart from "./assets/icons/chart.svg";
import chartFilled from "./assets/icons/chart-filled.svg";
import game from "./assets/icons/game.svg";
import gameFilled from "./assets/icons/game-filled.svg";
import bag from "./assets/icons/bag.svg";
import bagFilled from "./assets/icons/bag-filled.svg";
import twoUser from "./assets/icons/2-user.svg";
import twoUserFilled from "./assets/icons/2-user-filled.svg";
import message from "./assets/icons/message.svg";
import messageFilled from "./assets/icons/message-filled.svg";
import discount from "./assets/icons/discount.svg";
import discountFilled from "./assets/icons/discount-filled.svg";
import image from "./assets/icons/image.svg";
import imageFilled from "./assets/icons/image-filled.svg";
import settings from "./assets/icons/settings.svg";
import settingsFilled from "./assets/icons/settings-filled.svg";

export const MENU_ITEMS = [
  {
    description: "categories",
    icon: categories,
    iconFilled: categoriesFilled,
  },
  {
    description: "chart",
    icon: chart,
    iconFilled: chartFilled,
  },
  {
    description: "app",
    icon: game,
    iconFilled: gameFilled,
    submenu: {
      title: "App Customization",
      items: [
        { title: "App builder", checked: true },
        { title: "App Customizer", checked: true },
        { title: "A/B Testing", checked: true },
      ],
    },
  },
  {
    description: "store",
    icon: bag,
    iconFilled: bagFilled,
    submenu: {
      title: "Store Management",
      items: [
        { title: "Content Management", checked: true },
        { title: "Product Management", checked: true },
        { title: "Product Referral", checked: true },
        { title: "Shops Management", checked: true },
      ],
    },
  },
  {
    description: "users",
    icon: twoUser,
    iconFilled: twoUserFilled,
    submenu: {
      title: "User Management",
      items: [
        { title: "Employee Management", checked: true },
        { title: "Customer Management", checked: true },
        { title: "Partner Management", checked: true },
      ],
    },
  },
  {
    description: "communication",
    icon: message,
    iconFilled: messageFilled,
    submenu: {
      title: "Communication",
      items: [
        { title: "Chat", checked: true },
        { title: "Notifications", checked: false },
      ],
    },
  },
  {
    description: "discount",
    icon: discount,
    iconFilled: discountFilled,
  },
  {
    description: "photos",
    icon: image,
    iconFilled: imageFilled,
  },
  {
    description: "settings",
    icon: settings,
    iconFilled: settingsFilled,
  },
];

export type SubMenu = {
  title: string;
  items: { title: string; checked: boolean }[];
};
