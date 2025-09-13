import "./Navbar.scss";

interface PropTypes {
    toggleTheme: () => void;
    isDark: boolean;
}

const Navbar = ({toggleTheme, isDark}: PropTypes) => {
  return (
    <nav>
        <div className="navbar container">
            <div className="nav-left">
                <h1>Social Media Dashboard</h1>
                <p>Total Followers 23,004</p>
            </div>
                <div className="theme-toggle" onClick={toggleTheme}>
                    <p>{isDark ? "Dark Mode" : "Light Mode"}</p>
                    <div className={`toggle ${isDark ? "dark" : "" }`}></div>
                </div>
        </div>
    </nav>
  )
}

export default Navbar