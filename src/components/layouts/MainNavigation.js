import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import FavouritesContext from '../../store/favourites-context';
function MainNavigation() {
    const favouriteCtx = useContext(FavouritesContext);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                React Meetups
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>All Meetups</Link></li>
                    <li><Link to='/new-meet'>Add Meetups</Link></li>
                    <li><Link to='/favourite'>My Favourites
                        <span className={classes.badge}>{favouriteCtx.totalFavourites}</span>
                    </Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;