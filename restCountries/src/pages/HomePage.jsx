import React from 'react'
import FilterContainer from "../components/FilterContainer"
import Cards from "../components/Cards"
import { useTheme } from '../context/ThemeContext'

const HomePage = () => {
    // Theme
    const { theme } = useTheme();

    return (
        <div className={`${theme.mainBackground} ${theme.textColor} font-sans min-h-screen`}>
            <FilterContainer />
            <Cards />
        </div>
    );
}

export default HomePage
