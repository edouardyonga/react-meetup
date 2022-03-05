import { useContext } from "react";

import { Link } from "react-router-dom";
import classes from "./Navigation.module.css";
import FavoritesContext, { FavoritesContextProvider } from "../../store/favorites-context";

const Navigation = () => {
  const favoritesCtx = useContext(FavoritesContext)
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
            <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
