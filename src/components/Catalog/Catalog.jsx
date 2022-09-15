import Item from "../Item/item";
import classes from "./Catalog.module.scss";

const arrItem = [
    {name: 'Мужские кроссовки Nike Blazer Mid Suede', price: 12990, imgurl: 'itemf.jpg'},
    {name: 'Мужские кроссовки Nike Blazer Mid Suede', price: 12990, imgurl: 'itemf.jpg'},
    {name: 'Мужские кроссовки Nike Blazer Mid Suede', price: 12990, imgurl: 'itemf.jpg'},
    {name: 'Мужские кроссовки Nike Blazer Mid Suede', price: 12990, imgurl: 'itemf.jpg'},
    {name: 'Мужские кроссовки Nike Blazer Mid Suede', price: 12990, imgurl: 'itemf.jpg'},
    {name: 'Мужские кроссовки Nike Blazer Mid Suede', price: 12990, imgurl: 'itemf.jpg'},   
    {name: 'Мужские кроссовки Nike Blazer Mid Suede', price: 12990, imgurl: 'itemf.jpg'} 
  ];

function Catalog(orops) {
    return(
        <div className={classes.catalog}>
            <div className={classes.catalog_header}>
                <h1>Все кроссовки</h1>
                <input type="Text" placeholder='Поиск'/>
            </div>

            <div className={classes.catalog_items}>
                {arrItem.map((item) => (
                    <Item item={item}/>
                ))}
            </div>
        </div>
    );

}

export default Catalog;