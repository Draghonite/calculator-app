import React from 'react';
import ThemeChooser from './theme-chooser.component';

const Header = (props) => {
    return (
        <header className="calculator-header">
            <div>calc</div>
            <span>THEME</span>
            <ThemeChooser />
        </header>
    );
};

export default Header;