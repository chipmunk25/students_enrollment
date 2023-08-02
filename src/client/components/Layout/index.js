import Drawer from "../ChipDrawer";
import { IoMenuOutline } from "react-icons/io5";
import { Outlet } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars";
import Sidebar from "./Sidebar";
import { useState } from "react";
import useThemeStore from "../../hooks/useTheme";

const Layout = () => {
  const [isRDrawerOpen, setIsRDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsRDrawerOpen(!isRDrawerOpen);
  const theme = useThemeStore((state) => state);
  return (
    <div
      className={`w-full h-screen flex fixed bg-${theme.color}-${theme.lightbg} dark:bg-${theme.color}-${theme.darkbg}`}
    >
      <Sidebar />
      <Drawer isDrawerOpen={isRDrawerOpen} onClose={toggleDrawer}>
        <div>This is it</div>
      </Drawer>
      <div className="w-full p-5 mt-2 overflow-hidden bg-white rounded-tl-lg shadow-2xl">
        <div className="flex">
          <div className="block cursor-pointer sm:hidden">
            <IoMenuOutline onClick={toggleDrawer} />
          </div>
        </div>
        <Scrollbars className="w-full h-full">
          <Outlet />
        </Scrollbars>
      </div>
    </div>
  );
};

export default Layout;
