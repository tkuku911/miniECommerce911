import Logo from './Logo/Logo';
import CartButton from './CartButton/CartButton';

const Header = () => {
    return(
        <header className={'flex py-4 px-32 bg-white'}>
            <Logo />
            <CartButton />
        </header>
    )
}

export default Header;
