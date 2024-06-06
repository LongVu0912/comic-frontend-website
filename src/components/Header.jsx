import { useEffect, useState } from 'react';

const Header = () => {
    const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset"];

    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || "light");

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }, [currentTheme]);

    const changeTheme = (theme) => {
        setCurrentTheme(theme);
        localStorage.setItem('theme', theme);
    }

    return (
        <div className="navbar bg-base-300 w-full mb-8">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl" href="/">Comic Reader</a>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn mr-4 btn-neutral rounded-lg">Theme</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[600px] grid grid-cols-5 gap-8">
                        {themes.map((theme, index) => (
                            <li key={index}><a onClick={() => changeTheme(theme)}>{theme.charAt(0).toUpperCase() + theme.slice(1)}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="font-bold mr-4">
                    <div className="text-lg">Welcome</div>
                    <div className="text-sm opacity-50">GUEST</div>
                </div>
            </div>
        </div>
    )
}

export default Header;