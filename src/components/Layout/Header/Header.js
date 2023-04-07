import Logo from './Logo/Logo';
import CartButton from './CartButton/CartButton';

const Header = () => {
    return(
        <header className={'flex py-4 px-8 bg-violet-500'}>
            <Logo />
            <CartButton />
        </header>
    )
}

export default Header;
