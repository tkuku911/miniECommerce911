import { Link } from 'react-router-dom';

const Logo = () => {
    return(
        <div className={'flex-auto w-64'}>
            <Link to={'/'}>
                <h1 className={'text-2xl text-center text-white'}>Logo</h1>
            </Link>
        </div>
    )
}

export default Logo;
