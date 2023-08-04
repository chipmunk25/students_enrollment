import {
  IoAppsSharp,
  IoDiamondSharp,
  IoFileTrayStackedSharp,
  IoLogOutSharp,
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
    route: "students",
    icon: IoPeopleSharp,
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
    route: "classes",
    icon: IoDiamondSharp,
  },
  {
    key: "course",
    item: "Courses",
    route: "courses",
    icon: IoFileTrayStackedSharp,
  }, {
    key: "logout",
    item: "Logout",
    route: "signout",
    icon: IoLogOutSharp,
  },

];
export default SideNav;
