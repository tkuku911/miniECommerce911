import {FC, Fragment, JSXElementConstructor, ReactElement} from 'react';
import ReactDOM from 'react-dom';

export interface IBackdropProps {
    onClose: () => void;
};

export interface IModalOverlayProps {
    children: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
};

export interface IModalProps {
    onClose: () => void;
    children?: ReactElement;
};

const Backdrop: FC<IBackdropProps> = ({onClose}) => {
    return <div className='fixed top-0 left-0 w-full h-screen z-20 bg-slate-700 opacity-60' onClick={onClose}/>;
};

const ModalOverlay: FC<IModalOverlayProps> = ({children}) => {
    return (
        <div className='fixed top-1/4 left-1/3 w-2/5 min-h-80 z-30 p-5 rounded bg-white'>
            <div className={'h-full'}>{children}</div>
        </div>
    );
};

const portalElement: Element | DocumentFragment = document.getElementById('overlays') as Element | DocumentFragment;

const Modal: FC<IModalProps> = ({onClose, children}) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay>{children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    );
};

export default Modal;
