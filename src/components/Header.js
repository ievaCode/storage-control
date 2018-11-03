import React from 'react';

const Header = ({tabs, activeTab, switchTab}) => {
    const navigation = tabs.map((tab) => {
        return (
            <li
                onClick={()=>switchTab(tab)}
                className={activeTab===tab? "active":null}
                key={tab}>
                {tab}
            </li>
        )
    });
    return (
        <header >
                <h1>STORAGE</h1>
                <ul>
                    {navigation}
                </ul>
        </header>
    );
};

export default Header