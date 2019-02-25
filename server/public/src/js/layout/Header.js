import React from 'react';
import SiteNav from './SiteNav';

const Header = () => (
    <header className="site-header">
        <div id="header-logo" className="site-logo">
            IOT
        </div>
        <SiteNav/>
    </header>
)

export default Header