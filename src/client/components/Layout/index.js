import Drawer from "../ChipDrawer";
import { IoMenuOutline } from "react-icons/io5";
import { Outlet, useNavigate } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import useThemeStore from "../../hooks/useTheme";
import useAuthStore from "../../hooks/auth";

import { useUserQuery } from "../../appQueryHooks/hooks/users/useQuery"
const Layout = () => {
  const navigate = useNavigate()
  const [isRDrawerOpen, setIsRDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsRDrawerOpen(!isRDrawerOpen);
  const theme = useThemeStore((state) => state);
  const userId = useAuthStore(state => state.userId)
  const { data, isLoading } = useUserQuery(userId)
  console.log(data, userId)
  useEffect(() => {
    if (!data && !isLoading) {
      setTimeout(() => {
        navigate('/signout')
      }, 0);
    }
  }, [data, isLoading])
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
