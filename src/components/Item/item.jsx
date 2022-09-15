import classes from './item.module.scss'

function Item(props) {
    return(
        <div className={classes.cart_item}>
            <img width={133} height={133} src="itemf.jpg" alt=""/>
            <p>{props.item.name}</p>
            <div className={classes.cart_info}>
                <div className={classes.cart_price}>
                    <span>Цена:</span>
                    {console.log(props.item.price)}
                    <b>{props.item.price} руб</b>
                </div>
                <button className={classes.cart_btn}>
                    <img width={32} height={32} src="plus.png" alt=""/>
                </button>
            </div>
        </div>
    );
}

export default Item;