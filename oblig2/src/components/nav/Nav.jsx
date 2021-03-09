import { Link } from "react-router-dom";
import './Nav.css';

function Nav(props) {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                {props.isAuth && <li>
                    <Link to="/user">User home</Link>
                </li>}
                {props.isAuth && <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>}
                {!props.isAuth && <li>
                    <Link to="/login">Login</Link>
                </li>}
                {props.isAuth && <li>
                    <Link to="/login" onClick={props.handleLogOut}>Logout</Link>
                </li>}
            </ul>
        </nav>
    );
}


export default Nav;