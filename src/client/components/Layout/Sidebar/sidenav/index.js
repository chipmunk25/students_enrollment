import {
  IoAppsSharp,
  IoDiamondSharp,
  IoFileTrayStackedSharp,
  IoPeopleSharp,
  IoPricetagSharp,
  IoSettingsSharp,
  IoTicketSharp,
  IoVolumeHighSharp,
} from "react-icons/io5";
import { useEffect, useState } from "react";
// import { IMAGE_BASE_URL } from "@utils/constantUtil";
// import defaultLogo from "@assets/jpg/default-logo.jpg";
import RenderArrayMenu from "./rendermenu";
import { useLocation } from "react-router-dom";
const splitAndLast = (string) => {
  const res = string.split("/");
  const path = res[res.length - 1];
  return path;
};
const SideNav = () => {
  const location = useLocation();
  const match = splitAndLast(location.pathname);
  return (
    <div className="w-full h-full">
      <div className="py-2 mb-3">
        <div className="w-full">
          {/* <img
            className="object-cover  w-[200px]"
            src={
              userCompanyImage?.fileUrl
                ? IMAGE_BASE_URL + userCompanyImage?.fileUrl
                : defaultLogo
            }
            alt="company-logo"
          /> */}
        </div>
      </div>
      <div className="">
        <SidebarMenu array={sideNav} activeRoute={match} />
      </div>
    </div>
  );
};
const SidebarMenu = (props) => {
  const [activeRoute, setActiveRoute] = useState("");
  // update the active route whenever it changes
  useEffect(() => {
    setActiveRoute(props.activeRoute);
  }, [props.activeRoute]);
  return <RenderArrayMenu array={props.array} activeRoute={activeRoute} />;
};
const sideNav = [
  {
    key: "students",
    item: "Students",
    route: "",
    icon: IoPeopleSharp,
    subItems: [
      {
        key: "register",
        item: "Register",
        route: "register",
      },
      { key: "lists", item: "Student Lists", route: "students" },
    ],
  },
  {
    key: "dashboard",
    item: "Dashboard",
    route: "dashboard",
    icon: IoAppsSharp,
  },
  {
    key: "class",
    item: "Class",
    route: "",
    icon: IoDiamondSharp,
    subItems: [
      {
        key: "create",
        item: "New Class",
        route: "new-class",
        bgColor: "bg-blue-600",
        color: "text-blue-100",
      },
      {
        key: "lists",
        item: "Class Lists",
        route: "classes",
        bgColor: "bg-green-600",
        color: "text-green-100",
      },
    ],
  },
  {
    key: "course",
    item: "Courses",
    route: "",
    icon: IoFileTrayStackedSharp,
    subItems: [
      { key: "new-courses", item: "New Course", route: "new-course" },
      { key: "lists", item: "Courses", route: "courses" },
    ],
  },

];
export default SideNav;
