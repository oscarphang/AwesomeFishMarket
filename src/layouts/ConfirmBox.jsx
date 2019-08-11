import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal,Button } from 'react-bootstrap';
import {HIDE_CONFIRM} from '../store/reducers/commonReducer';

export class ConfirmBox extends Component {
    handleClose=()=>{
        this.props.hideConfirm()
    }
    render() {
        const {show,doEvent,confirmedEvent} = this.props;
        return (
            <Modal show={show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Confirm delete?</Modal.Title>
                </Modal.Header>
                <Modal.Body>After delete, action cannot be undone.</Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={()=>doEvent(confirmedEvent)}>
                    Delete
                </Button>
                <Button variant="secondary" onClick={this.handleClose}>
                    Cancel
                </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

const mapStateToProps = (state) => ({
    show:state.common.showConfirm,
    confirmedEvent:state.common.confirmEvent
})

const mapDispatchToProps = (dispatch) => ({
    hideConfirm:()=>dispatch({type:HIDE_CONFIRM}),
    doEvent:event=>{
        if (event){
            dispatch(event);
            dispatch({type:HIDE_CONFIRM});
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmBox)
