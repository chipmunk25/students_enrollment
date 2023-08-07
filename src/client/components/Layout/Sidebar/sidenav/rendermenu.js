import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import ChipIcon from "../../../ChipIcon";
import classNames from "classnames";
import useThemeStore from "../../../../hooks/useTheme";

const splitAndLast = (string) => {
  const res = string.split("/");
  const path = res[res.length - 1];
  return path;
};

const RenderArrayMenu = (props) => {
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const match = splitAndLast(location.pathname);
  const { activeRoute } = props;
  const theme = useThemeStore((state) => state);
  useEffect(() => {
    const match = splitAndLast(location.pathname);

    const findSelected = (array) => {
      for (let i = 0; i < array.length; i++) {
        if (array[i].route && array[i].route === match) {
          setSelectedIndex(i);
          return true;
        }
        if (Array.isArray(array[i].subItems)) {
          if (findSelected(array[i].subItems)) {
            setOpenIndex(i);
            return true;
          }
        }
      }
      return false;
    };
    findSelected(props.array);
  }, [location.pathname, props.array]);

  const handleToggle = (index, subIndex) => {
    setOpenIndex(openIndex === index ? null : index);
    setSelectedIndex(subIndex !== null ? subIndex : null);
  };
  return (
    <ol
      className={classNames(
        `space-y-2 text-${theme.fontSize} text-${theme.color}-${theme.lighttext} dark:text-${theme.color}-${theme.darktext} `,
        {
          "py-2 pl-4 pr-2": props.sub,
        }
      )}
    >
      {props.array.map((menu, index) => {
        const isSelected =
          menu.route === activeRoute || selectedIndex === index;
        const hasArray = openIndex && menu.subItems ? true : false;
        const isOpen = openIndex === index;
        if (Array.isArray(menu.subItems)) {
          return (
            <li
              key={index}
              className={classNames("hover:text-neutral-100 dark:hover:text-white", {
                "bg-transparent text-blac dark:text-white": match === menu.key,
                "text-blac dark:text-white": isOpen,
              })}
            >
              <button
                className="flex items-center w-full gap-2 px-4 py-2 hover:bg-transparent"
                onClick={() => handleToggle(index)}
              >
                <span>{menu?.icon && ChipIcon(menu?.icon)}</span>
                <span
                  className={classNames(`text-${theme.fontSize}`, {
                    "pl-4": props.parentIndex + 1 && props.hasArray,
                    "pl-8": props.parentIndex + 1 && !props.hasArray,
                  })}
                >
                  {menu.item}
                </span>
              </button>
              {isOpen && (
                <RenderArrayMenu
                  array={menu.subItems}
                  onToggle={handleToggle}
                  selectedIndex={selectedIndex}
                  subIndex={index}
                  hasArray={hasArray}
                  parentIndex={openIndex}
                  sub={Array.isArray(menu.subItems)}
                  activeRoute={activeRoute}
                />
              )}
            </li>
          );
        } else {
          return (
            <li
              key={index}
              className={classNames(
                "py-2 hover:text-neutral-100 dark:hover:text-white",
                {
                  "bg-active dark:bg-darkactive w-full": isSelected,
                  "relative  group": props.sub,
                }
              )}
            >
              <div
                className={classNames("flex item-center w-full", {
                  "flex flex-col sm:flex-row items-start mb-0.5 group-last:before:hidden before:absolute before:left-0 sm:before:left-0 before:h-full before:px-px before:bg-slate-200 sm:before:ml-[0.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-gray-300 after:group-hover:bg-black after:border after:box-content after:border-gray-50 after:rounded-full sm:after:ml-[0.5rem] after:-translate-x-1/2 after:translate-y-1.5":
                    props.sub,
                  "after:bg-black": isSelected,
                })}
              >
                {match === menu.key && (
                  <span
                    className={` absolute left-0 w-0.5 h-6 overflow-hidden bg-${theme.color}-${theme.darkbg} dark:bg-${theme.color}-${theme.lighbg}`}
                  ></span>
                )}

                <Link
                  className={classNames(
                    "w-full flex items-center self-stretch justify-start gap-2 px-2 pl-4 cursor-pointer",
                    {
                      "font-semibold text-blac dark:text-white": isSelected,
                      "mt-0.5": props.sub,
                    }
                  )}
                  to={menu.route}
                  onClick={() => handleToggle(index, index)}
                >
                  {menu?.icon && (
                    <span>
                      {ChipIcon(
                        menu?.icon,
                        classNames(
                          `{ ${isSelected && `text-${theme.color}-900`} }`
                        )
                      )}
                    </span>
                  )}
                  <div
                    className={classNames("w-full relative", {
                      "pl-4": props.sub,
                      "pl-8": props.parentIndex + 1 && !props.hasArray,
                    })}
                  >
                    <span className={classNames({ "pt-2": props.sub })}>
                      {menu?.item}
                    </span>
                  </div>
                </Link>
              </div>
            </li>
          );
        }
      })}
    </ol>
  );
};

export default RenderArrayMenu;
