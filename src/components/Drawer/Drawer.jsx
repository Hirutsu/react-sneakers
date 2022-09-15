import classes from './Drawer.module.scss'
import ItemCart from '../item_cart/ItemCart';

function Drawer(props) {
    return (
        <div className={classes.drawer_overlay}>
            <div className={classes.drawer}>
                <div className={classes.drawer_header}>
                    <h2>Корзина</h2>
                    <button>X</button>
                </div>

                <div className={classes.items}>
                    <ItemCart />
                    <ItemCart />
                </div>

                <ul className={classes.res}>
                    <li className={classes.res_info}>
                        <span>Итого:</span>
                        <div className={classes.res_line}></div>
                        <b>21 499 руб.</b>
                    </li>
                    <li className={classes.res_info}>
                        <span>Налог 5%:</span>
                        <div  className={classes.res_line}></div>
                        <b>1074 руб.</b>
                    </li>
                </ul>
                <button className={classes.checkout}>Оформить заказ</button>
            </div>
        </div>
    );
}

export default Drawer;