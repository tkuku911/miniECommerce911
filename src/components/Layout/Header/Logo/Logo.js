import { Link } from 'react-router-dom';

const Logo = () => {
    return(
        <div className={'flex-auto w-64'}>
            <Link to={'/'}>
                <h1 className={'text-2xl text-center text-black'}>Iphone</h1>
            </Link>
        </div>
    )
}

export default Logo;
