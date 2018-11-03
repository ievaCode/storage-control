import React from 'react';


const Items = (props) => {
    // const items = props.items.map((item, i) => {
    //     return (
    //         <tr>
    //             <td>{item.cat}</td>
    //             <td>{item.model}</td>
    //             <td>{item.price}€</td>
    //         </tr>
    //     )
    // });

    const articles = props.articles.map((article, i) => {
        return (
            <tr>
                <td>{props.activeCat}</td>
                <td>{article.model}</td>
                <td>{article.price}€</td>
                <td>{article.units}</td>
            </tr>
        )
    });


    return (
        <div className='contentItems'>
            <table>
                <tr>
                    <th className="ctgr">category</th>
                    <th className="mdl">model</th>
                    <th className="prc">price</th>
                    <th className="unt">units</th>
                </tr>
                {articles}
            </table>
        </div>
    )
};

export default Items;

//
// const categories = props.categories.map((cat, i) => {
//     return (
//         <div
//             className={cat === props.active ?
//                 "category active-cat" : "category"}
//             onClick={() => props.switchCat(cat)}
//             key={cat}>
//             <img src={images[i]} alt=""/>
//             <h3>{cat}</h3>
//         </div>
//     )
// });
// let items;
// if (props.items) {
//     items = props.items.map((item, i) => {
//         return (
//             <li onClick={() => props.addOrder(item)}
//                 key={i}>
//                 {item.name}
//                 <span>
//               {item.price}€
//             </span>
//             </li>
//         )
//     })
// }
//
// return (
//     <div className="menu">
//         <div className="categories">
//             {categories}
//         </div>
//         <ul className="menu-items">
//             {items}
//         </ul>
//         {props.items ? null : <div className="loader"/>}
//     </div>
// );
// };


//
// const Items = (props) => {
//     const renderItems = () => {
//         switch (props.activeCat) {
//             case (props.categories[0]):
//                 const items = props.items.filter(item => item.cat === props.activeCat)
//                     .map((item, i) => {
//                         return (
//                             <tr>
//                                 <td>{item.cat}</td>
//                                 <td>{item.model}</td>
//                                 <td>{item.price}€</td>
//                             </tr>
//                         )
//                     });
//                 return {items};
//
//             default:
//                 const articles = props.items.map((item, i) => {
//                     return (
//                         <tr>
//                             <td>{item.cat}</td>
//                             <td>{item.model}</td>
//                             <td>{item.price}€</td>
//                         </tr>
//                     )
//                 });
//                 return {articles}
//         }
//     };
//     return (
//         <div className='content'>
//             <table>
//                 <tr>
//                     <th>category</th>
//                     <th>model</th>
//                     <th>price</th>
//                 </tr>
//                 {renderItems ()}
//             </table>
//         </div>
//     )
// };
//
// export default Items;
