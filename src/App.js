import Header from "./components/Header/Header";
import classes from "./App.module.css"

function App() {
  return (
    <div className={classes.wrapper}>
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
