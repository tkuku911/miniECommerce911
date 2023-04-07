import { Fragment } from 'react';
import ReactDOM from 'react-dom';

const Backdrop = (props) => {
    return <div className='fixed top-0 left-0 w-full h-screen z-20 bg-slate-700 opacity-60' onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
    return (
        <div className='fixed top-1/4 left-1/3 w-2/5 min-h-80 z-30 p-5 rounded bg-white'>
            <div className={'h-full'}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;
