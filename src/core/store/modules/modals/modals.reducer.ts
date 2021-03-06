import { createReducer } from '@reduxjs/toolkit';
import { ModalsState } from '@types';
import { ModalsActions } from './modals.actions';

export const modalsInitialState: ModalsState = {
  activeModal: '',
  modalProps: {},
};

const { openModal, closeModal } = ModalsActions;

const modalsReducer = createReducer(modalsInitialState, (builder) => {
  builder.addCase(openModal, (state, { payload: { modalName, modalProps } }) => {
    state.activeModal = modalName;
    state.modalProps = modalProps || {};
    // TODO Move scroll lock into the actions or an effect watcher in react component
    document.body.style.overflowY = 'hidden';
  });
  builder.addCase(closeModal, (state) => {
    state.activeModal = '';
    state.modalProps = {};
    // TODO Move scroll lock into the actions or an effect watcher in react component
    document.body.style.overflowY = '';
  });
});

export default modalsReducer;
