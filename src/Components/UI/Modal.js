import React from 'react'
import classes from './Modal.module.css'
import { Fragment } from 'react'

const Backdrop = props => {
    <div className={classes.backdrop}/>
}

const ModalOverlay = props => {
    <div className={classes['modal-overlay']}>
       <div className={classes.modal}>{props.children}</div>
    </div>
}

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop/>
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  )
}

export default Modal
