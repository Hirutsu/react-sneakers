import Header from "./components/Header/Header";
import classes from "./App.module.scss";
import Content from "./components/Content/Content";
import Drawer from "./components/Drawer/Drawer";

function App() {
  return (
    <div className={classes.wrapper}>
      <Drawer/>
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
