import Catalog from '../Catalog/Catalog';
import classes from './Content.module.scss'

function Content() {
    return(
      <div className={classes.content}>
        <Catalog/>
      </div>
    );
}

export default Content;