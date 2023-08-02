import SideNav from "./sidenav";
import useThemeStore from "../../../hooks/useTheme";
const Sidebar = () => {
  const theme = useThemeStore((state) => state);
  return (
    <aside
      className={`w-0 hidden text-${theme.color}-${theme.lighttext} sm:w-80 sm:block dark:text-${theme.color}-${theme.darktext}`}
    >
      <div className={`p-5 pt-12 border-b border-${theme.color}-300`}>
        <div className="pb-5">
          <span className="text-base font-semibold">ChipUI</span>
        </div>
        <div>
          <div className="text-sm font-normal ">
            <div className="py-2">
              <span>Change Password</span>
            </div>
            <div className="py-2">
              <span>Update Profile</span>
            </div>
            <div className="py-2">
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <SideNav />
      </div>
    </aside>
  );
};

export default Sidebar;
