import {FC, JSXElementConstructor, ReactElement, useRef} from 'react';
import ReactDOM from 'react-dom';
import useClickOutside from '../../../hooks/common/use-click-outside';
import './Modal.scss';

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
    return <div className="backdrop" onClick={onClose}/>;
};

const ModalOverlay: FC<IModalOverlayProps> = ({children, onClose}) => {
    const modalContainerRef = useRef<HTMLDivElement>(null);
    useClickOutside(modalContainerRef, onClose);
    return (
        <div className="modal-overlay" ref={modalContainerRef}>
            <div className="modal-overlay-content">{children}</div>
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
