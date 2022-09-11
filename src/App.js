import Header from "./components/Header/Header";
import classes from "./App.module.css"

function App() {
  return (
    <div className={classes.wrapper}>
      <Header/>
      <div className={classes.content}>
        <h1>Все кроссовки</h1>

        <div className="">
          <img width={133} height={133} src="itemf.jpg" alt=""/>
          <p></p>
          <div>
            <div>
              <span>Цена:</span>
              <b>12 990 руб</b>
            </div>
            <button>
              <img src="plus.png" alt=""/>
            </button>
          </div>
        </div>

        <div className="">
          <img width={133} height={133} src="itemf.jpg" alt=""/>
          <p></p>
          <div>
            <div>
              <span>Цена:</span>
              <b>12 990 руб</b>
            </div>
            <button>
              <img src="plus.png" alt=""/>
            </button>
          </div>
        </div>

        <div className="">
          <img width={133} height={133} src="itemf.jpg" alt=""/>
          <p></p>
          <div>
            <div>
              <span>Цена:</span>
              <b>12 990 руб</b>
            </div>
            <button>
              <img src="plus.png" alt=""/>
            </button>
          </div>
        </div>

        <div className="">
          <img width={133} height={133} src="itemf.jpg" alt=""/>
          <p></p>
          <div>
            <div>
              <span>Цена:</span>
              <b>12 990 руб</b>
            </div>
            <button>
              <img src="plus.png" alt=""/>
            </button>
          </div>
        </div>

        <div className="">
          <img width={133} height={133} src="itemf.jpg" alt=""/>
          <p></p>
          <div>
            <div>
              <span>Цена:</span>
              <b>12 990 руб</b>
            </div>
            <button>
              <img src="plus.png" alt=""/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
