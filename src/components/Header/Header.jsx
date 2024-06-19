
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

        setTimeout(() => {
            document.querySelector('.thememode').classList.add('active')
            setTimeout(() => {
                document.querySelector('.thememode').classList.remove('active')
            }, 2000)
        })
    }

    return (
        <>
            <div className="header">
                <p className="thememode">{themeMode.charAt(0).toUpperCase() + themeMode.slice(1).toLowerCase()} Theme Enabled</p>
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
