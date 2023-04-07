import { Fragment } from 'react';
import Header from '../../Layout/Header/Header';

const Error = () => {
    return(
        <Fragment>
            <Header />
            <h1 className={'text-center mt-5'}>404 Not Found</h1>
        </Fragment>
    )
}

export default Error;
