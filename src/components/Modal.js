import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide
} from '@mui/material';

const Transition = forwardRef((props, ref) => (
    <Slide direction="up" ref={ref} {...props} />
));

const propTypes = {
    open: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
    button: PropTypes.array,
    onCloseModal: PropTypes.func,
    onSubmit: PropTypes.func
};

const Modal = ({ open, title, content, onCloseModal, onSubmit }) => (
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onCloseModal}
    >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            {content}
        </DialogContent>
        <DialogActions>
            <Button onClick={onCloseModal}>Cancel</Button>
            <Button onClick={onSubmit} color='error'>Remove</Button>
        </DialogActions>
    </Dialog>
);

Modal.propTypes = propTypes;

export default Modal;
