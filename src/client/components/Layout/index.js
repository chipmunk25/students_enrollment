import Drawer from "../ChipDrawer";
import { IoMenuOutline } from "react-icons/io5";
import { Outlet, useNavigate } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import useThemeStore from "../../hooks/useTheme";
import useAuthStore from "../../hooks/auth";
import { useUserQuery } from "../../appQueryHooks/hooks/users/useQuery"
import SideNav from "./Sidebar/sidenav";
import isBg from "../../assets/svg/bg.svg"
const Layout = () => {
  const navigate = useNavigate()
  const [isRDrawerOpen, setIsRDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsRDrawerOpen(!isRDrawerOpen);
  const theme = useThemeStore((state) => state);
  const userId = useAuthStore(state => state.userId)
  const { data, isLoading } = useUserQuery(userId)
  useEffect(() => {
    if (!data && !isLoading) {
      setTimeout(() => {
        navigate('/signout')
      }, 0);
    }
  }, [data, isLoading])
  return (
    <div
      // style={{ backgroundImage: `url(${isBg})`, }}
      className={`w-full h-screen bg-sideb flex fixed  dark:bg-${theme.color}-${theme.darkbg}`}
    >
      <Sidebar title="Student Enrollment" />
      <Drawer isDrawerOpen={isRDrawerOpen} onClose={toggleDrawer} title="Student Enrollment">
        <SideNav />
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
