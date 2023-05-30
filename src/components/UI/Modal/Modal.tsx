import {FC, JSXElementConstructor, ReactElement, useRef} from 'react';
import ReactDOM from 'react-dom';
import useClickOutside from '../../../hooks/common/use-click-outside';

export interface IBackdropProps {
    onClose: () => void;
};

export interface IModalOverlayProps {
    children: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
    onClose: () => void;
};

export interface IModalProps {
    onClose: () => void;
    children?: ReactElement;
};

const Backdrop: FC<IBackdropProps> = ({onClose}) => {
    return <div className='fixed top-0 left-0 w-full h-screen z-20 bg-slate-700 opacity-60' onClick={onClose}/>;
};

const ModalOverlay: FC<IModalOverlayProps> = ({children, onClose}) => {
    const modalContainerRef = useRef<HTMLDivElement>(null);
    useClickOutside(modalContainerRef, onClose);
    return (
        <div className='fixed top-1/4 left-1/3 w-2/5 min-h-80 z-30 p-5 rounded bg-white' ref={modalContainerRef}>
            <div className={'h-full'}>{children}</div>
        </div>
    );
};

const portalElement: Element | DocumentFragment = document.getElementById('overlays') as Element | DocumentFragment;

const Modal: FC<IModalProps> = ({onClose, children}) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
            {ReactDOM.createPortal(
                <ModalOverlay onClose={onClose}>{children}</ModalOverlay>,
                portalElement
            )}
        </>
    );
};

export default Modal;
