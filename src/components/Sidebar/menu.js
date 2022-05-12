import { BiLogOut } from "react-icons/bi";
import { AiFillDashboard, AiFillFileAdd } from "react-icons/ai";
import { FaList } from "react-icons/fa";

export const menu = [
  {
    title: "Dashboard",
    icon: AiFillDashboard,
    path: "/",
  },
  {
    title: "List Events",
    icon: FaList,
    path: "/list",
  },
  {
    title: "Add Event",
    icon: AiFillFileAdd,
    path: "/create",
  },
  {
    title: "Logout",
    icon: BiLogOut,
    path: "/logout",
  },
];
