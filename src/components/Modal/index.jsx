import React, { useEffect } from 'react';
import Portal from './Portal';
import { Overlay, Dialog } from './styles';

const Modal = ({ Children, open, onClose }) => {     
    if (!open) return null;
    
    function onOverlayclick(){
        onClose();        
    }
    function onDialogclick(e) {
        e.stopPropagation();
    }
    return (
        <Portal>
            <Overlay onclick={onOverlayclick}>
                <Dialog onclick={onDialogclick}>{Children}</Dialog>            
            </Overlay>
        </Portal>
    ); 
};   

export default Modal;