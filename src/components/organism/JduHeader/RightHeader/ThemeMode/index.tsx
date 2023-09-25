import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SunIcon, MoonIcon } from "asset/svgs";

import { darkMode, lightMode } from "store/common";
import { RootState } from "store";

const ThemeMode = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);

    useEffect(() => {
        isDarkMode? dispatch(darkMode()) : dispatch(lightMode());
    }, []);

    const changeTheme = (e: any) => {
        isDarkMode? dispatch(lightMode()) : dispatch(darkMode());
    };

    return (
        <div className='theme-mode-container' onClick={changeTheme}>
            <div className='setting-hover'>{isDarkMode ? <MoonIcon /> : <SunIcon />}</div>
        </div>
    )
}

export default ThemeMode;
