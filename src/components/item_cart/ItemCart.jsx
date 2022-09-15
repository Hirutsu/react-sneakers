import classes from './ItemCart.module.scss'

function ItemCart(props) {
    return (
        <div className={classes.cart_buy}>
            <img className={classes.cart_buy_photo} width={70} height={70} src="itemf.jpg" alt="item1" />
            <div className={classes.cart_buy_text}>
                <p>Мужские кроссовки Nike Air Max 279</p>
                <b>12 999 руб.</b>
            </div>
            <button>X</button>
        </div>
    );
}

export default ItemCart;