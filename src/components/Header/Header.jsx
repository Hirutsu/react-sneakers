import classes from './Header.module.scss'

function Header(props) {
    return(
        <header className={classes.header}>

            <div className={classes.header_left}>
                <h3>React Sneakers</h3>
                <p>Магазин лучших кроссовок</p>
            </div>

            <div className={classes.header_right}>
                <ul className={classes.header_right_info}>
                    <li className={classes.cart}>
                        <img alt="logo" width={18} height={18} src="cart.png"/>
                        <span> 0 руб.</span>
                    </li>
                    <li className={classes.cart}>
                        <img width={18} height={18} src="favourity.png"/>
                    </li>
                    <li className={classes.cart}>
                        <img width={18} height={18} src="profile.png"/>
                    </li>
                </ul>
            </div>

        </header>
    );
}

export default Header;