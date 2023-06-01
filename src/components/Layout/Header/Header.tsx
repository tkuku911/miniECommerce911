import Logo from './Logo/Logo';
import CartButton from './CartButton/CartButton';
import './Header.scss';

const Header = () => {
    return(
        <header>
            <Logo />
            <CartButton />
        </header>
    )
}

export default Header;
