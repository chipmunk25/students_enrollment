import {
  IoAppsSharp,
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
    key: "profile",
    item: "User Profile",
    route: "",
    icon: IoTicketSharp,
    subItems: [
      {
        key: "user-profile",
        item: "Profile",
        route: "profile",
      },
      { key: "chg-pwd", item: "Change Password", route: "chg-pwd" },
      { key: "account", item: "Account Details", route: "account" },
      { key: "subscription", item: "Subscription Plans", route: "pricing" },
      // { key: 'setup-wizard', item: 'Setup Wizard', route: 'setup-wizard' },
      { key: "logout", item: "Logout", route: "logout" },
    ],
  },
  {
    key: "dashboard",
    item: "Dashboard",
    route: "dashboard",
    icon: IoAppsSharp,
  },
  {
    key: "alerts",
    item: "Alerts",
    route: "",
    icon: IoVolumeHighSharp,
    subItems: [
      {
        key: "past-due",
        item: "Assets Past Due",
        route: "reports/alerts/checkoutbypastdue",
        bgColor: "bg-blue-600",
        color: "text-blue-100",
      },
      {
        key: "contracts-due",
        item: "Contracts Expiring",
        route: "reports/alerts/contractsexpiring",
        bgColor: "bg-green-600",
        color: "text-green-100",
      },
      {
        key: "funds-expire",
        item: "Funds Expiring",
        route: "reports/alerts/fundsexpiring",
        bgColor: "bg-gray-600",
        color: "text-gray-100",
      },
      {
        key: "insurance-expire",
        item: "Insurances Expiring",
        route: "reports/alerts/insurancesexpiring",
        bgColor: "bg-fuchsia-600",
        color: "text-fuchsia-100",
      },
      {
        key: "lease-expire",
        item: "Leases Expiring",
        route: "reports/alerts/leasesexpiring",
        bgColor: "bg-orange-600",
        color: "text-orange-100",
      },
      {
        key: "maintenance-due",
        item: "Maintenance Due",
        route: "reports/alerts/maintenancesdue",
        bgColor: "bg-violet-600",
        color: "text-violet-100",
      },
      {
        key: "maintenance-overdue",
        item: "Maintenance Overdue",
        route: "reports/alerts/maintenancesoverdue",
        bgColor: "bg-teal-600",
        color: "text-teal-100",
      },
      {
        key: "warranty-expire",
        item: "Warranties Expiring",
        route: "reports/alerts/warrantiesexpiring",
        bgColor: "bg-red-600",
        color: "text-red-100",
      },
    ],
  },

  {
    key: "tools",
    item: "Tools",
    route: "",
    icon: IoSettingsSharp,
    subItems: [
      { key: "import", item: "Import", route: "import" },
      { key: "export", item: "Export", route: "export" },
    ],
  },
  {
    key: "advanced",
    item: "Advanced",
    route: "",
    icon: IoPricetagSharp,
    subItems: [
      { key: "contracts", item: "Contracts/Licenses", route: "contracts" },
      { key: "persons", item: "Persons/Employees", route: "persons" },
      { key: "customers", item: "Customers", route: "customers" },
      { key: "funding", item: "Funding", route: "funds" },
      { key: "insurance", item: "Insurance", route: "insurances" },
      { key: "users", item: "Users", route: "users" },
      { key: "roles", item: "Security Groups", route: "groupmanager" },
    ],
  },
];

export default SideNav;
