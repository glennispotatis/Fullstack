import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="NotFound">
            <p>
                404: Page not found.
                <Link to="/">
                    Go Home
                </Link>
            </p>
        </div>
    );
}

export default NotFound;