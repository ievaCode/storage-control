import React from 'react';

const Sidebar = (props) => {
   // if (props.activeTab !== "Items")
    const categories = props.categories.map((cat, i) => {
        return (
            <div
                className={cat === props.activeCat ?
                    "category active" : "category"}
                onClick={() => props.switchCat(cat)}
                key={cat}>
                <h3>{cat}</h3>
            </div>
        )
    });
    return (
        <aside>
            <h2>Categories:</h2>
            {categories}
        </aside>
    );
};
export default Sidebar