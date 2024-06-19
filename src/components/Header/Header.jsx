
import NavBar from '../Navbar/NavBar';
import { useContext } from 'react';
import { context } from '../Context/Context';

function Header() {

    const { themeMode, lightTheme, darkTheme } = useContext(context);

    const onChangeBtn = (e) => {
        const themeModeStatus = e.currentTarget.checked;

        if (themeModeStatus) {
            darkTheme();
            console.log("active")
        } else {
            lightTheme();
            console.log("lg active")
        }
    }

    return (
        <>
            <div className="header">

                <NavBar />
                <div className="header__right">
                    <div className="form-check form-switch">
                        <input onChange={onChangeBtn} checked={themeMode === "dark"} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    </div>
                    <a href="#" className="logo">
                        <img src="/logo.png" width="213"
                            height="65" loading='lazy' alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Header
