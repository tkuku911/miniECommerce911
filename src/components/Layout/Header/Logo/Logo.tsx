import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => {
    return(
        <div className="logo">
            <Link to={'/'}>
                <h1>Iphone</h1>
            </Link>
        </div>
    )
}

export default Logo;
