import classNames from 'classnames';
import React from 'react';
import useThemeStore from '../../hooks/useTheme';


const ChipButtonGroup = ({ btns }) => {
    const theme = useThemeStore()
    return (
        <div className="inline-flex rounded-md shadow-sm" role="group">
            {
                btns?.map((btn, idx) => (
                    <button onClick={btn.onClick} key={idx} type="button" className={classNames(`px-4 py-2 text-sm font-medium text-gray-900 bg-white  border-gray-200  hover:bg-gray-100 hover:text-${theme.color}-700 focus:z-10 focus:ring-2 focus:ring-${theme.color}-700 focus:text-${theme.color}-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-${theme.color}-500 dark:focus:text-white`,
                        { "border border-gray-200 rounded-l-lg": idx === 0, "border border-gray-200 rounded-r-md": idx === btns.length - 1 }
                    )}>
                        {btn.title}
                    </button>
                ))
            }


        </div>
    );
};
export default ChipButtonGroup;