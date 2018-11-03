import React from 'react';

const AddItems = (props) => {
    return (
        <div className='contentAdd'>
            <form onSubmit={props.addItem}>
                <select name='category'>{props.categories.map(x => <option>{x}</option>)}</select>
                <input name='model' type="text" placeholder='model'/>
                <input name='price' type="number" placeholder='price'/>
                <input name='units' type="number" placeholder='units'/>
                <button>Add Item</button>
            </form>
        </div>
    )
};

export default AddItems




