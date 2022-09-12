import Header from "./components/Header/Header";
import classes from "./App.module.css"

function App() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.drawer_overlay}>
        <div className={classes.drawer}>
          <h2>Корзина</h2>

          <div className={classes.cart_buy}>
            <img className={classes.cart_buy_photo} width={70} height={70} src="itemf.jpg" alt="item1" />
            <div className={classes.cart_buy_text}>
              <p>Мужские кроссовки Nike Air Max 279</p>
              <b>12 999 руб.</b>
            </div>
            <button>X</button>
          </div>

          <div className={classes.cart_buy}>
            <img className={classes.cart_buy_photo} width={70} height={70} src="itemf.jpg" alt="item1" />
            <div className={classes.cart_buy_text}>
              <p>Мужские кроссовки Nike Air Max 279</p>
              <b>12 999 руб.</b>
            </div>
            <button>X</button>
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
        </div>
      </div>

      <Header/>
      <div className={classes.content}>
        <h1>Все кроссовки</h1>

        <div className={classes.catalog}>
          <div className={classes.cart_item}>
            <img width={133} height={133} src="itemf.jpg" alt=""/>
            <p>Мужские кроссовки Nike Blazer Mid Suede</p>
            <div className={classes.cart_info}>
              <div className={classes.cart_price}>
                <span>Цена:</span>
                <b>12 990 руб</b>
              </div>
              <button className={classes.cart_btn}>
                <img width={32} height={32} src="plus.png" alt=""/>
              </button>
            </div>
          </div>

          <div className={classes.cart_item}>
            <img width={133} height={133} src="itemf.jpg" alt=""/>
            <p>Мужские кроссовки Nike Blazer Mid Suede</p>
            <div className={classes.cart_info}>
              <div className={classes.cart_price}>
                <span>Цена:</span>
                <b>12 990 руб</b>
              </div>
              <button className={classes.cart_btn}>
                <img width={32} height={32} src="plus.png" alt=""/>
              </button>
            </div>
          </div>

          <div className={classes.cart_item}>
            <img width={133} height={133} src="itemf.jpg" alt=""/>
            <p>Мужские кроссовки Nike Blazer Mid Suede</p>
            <div className={classes.cart_info}>
              <div className={classes.cart_price}>
                <span>Цена:</span>
                <b>12 990 руб</b>
              </div>
              <button className={classes.cart_btn}>
                <img width={32} height={32} src="plus.png" alt=""/>
              </button>
            </div>
          </div>

          <div className={classes.cart_item}>
            <img width={133} height={133} src="itemf.jpg" alt=""/>
            <p>Мужские кроссовки Nike Blazer Mid Suede</p>
            <div className={classes.cart_info}>
              <div className={classes.cart_price}>
                <span>Цена:</span>
                <b>12 990 руб</b>
              </div>
              <button className={classes.cart_btn}>
                <img width={32} height={32} src="plus.png" alt=""/>
              </button>
            </div>
          </div>

          <div className={classes.cart_item}>
            <img width={133} height={133} src="itemf.jpg" alt=""/>
            <p>Мужские кроссовки Nike Blazer Mid Suede</p>
            <div className={classes.cart_info}>
              <div className={classes.cart_price}>
                <span>Цена:</span>
                <b>12 990 руб</b>
              </div>
              <button className={classes.cart_btn}>
                <img width={32} height={32} src="plus.png" alt=""/>
              </button>
            </div>
          </div>

          <div className={classes.cart_item}>
            <img width={133} height={133} src="itemf.jpg" alt=""/>
            <p>Мужские кроссовки Nike Blazer Mid Suede</p>
            <div className={classes.cart_info}>
              <div className={classes.cart_price}>
                <span>Цена:</span>
                <b>12 990 руб</b>
              </div>
              <button className={classes.cart_btn}>
                <img width={32} height={32} src="plus.png" alt=""/>
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default App;
