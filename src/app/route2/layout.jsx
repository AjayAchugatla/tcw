import React from "react";

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <h1>Route 1 Layout</h1>
            </header>
            <main>{children}</main>
        </div>
    );
};

export default Layout;