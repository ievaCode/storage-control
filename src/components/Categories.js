import React from 'react';


const Categories = (props) => {
    const cats = props.categories.map((cat, i) => {
        return (
            <div className="cats" key={i}>
                <h3>{cat}</h3>
                <div className="btn" onClick={() => props.removeCat(i)}>remove</div>
            </div>
        )
    });

    return (
        <div className="contentCats">
            <h2>Remove existing categories</h2>
            <p>Note that removing category will remove all items within it.</p>
            {cats}
            <h2>Add new category</h2><br/>
            <input onChange={(e) => props.getNewCat(e.target.value)} value = {props.newCat} type="text" placeholder="category name"/>
            <div className="btn" onClick ={() => props.addNewCat()}>add</div>
        </div>
    )
};

export default Categories

