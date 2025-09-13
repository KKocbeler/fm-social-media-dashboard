import { useState } from 'react';
import './App.scss'
import OverviewCards from './components/Main/OverviewCards';
import TotalCards from './components/Main/TotalCards';
import Navbar from './components/Navbar/Navbar';


function App() {
    const [isDark, setIsDark] = useState(false)
    const toggleTheme = () => {
       const root = document.documentElement;
       if(root.getAttribute("data-theme") === "dark") {
            root.setAttribute("data-theme", "light");
            setIsDark(false)
        } else {
            root.setAttribute("data-theme", "dark");
            setIsDark(true)
        }
    }

    return (
        <>
            <header>
                <Navbar  toggleTheme={toggleTheme} isDark={isDark} />
            </header>
            <main className='container'>
                <TotalCards />
                <OverviewCards />
            </main>
        </>
    )
}

export default App
