import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap';
import {REMOVE_CART_ITEM} from '../../store/reducers/cartReducer'
import {SHOW_CONFIRM} from '../../store/reducers/commonReducer';
import {removeOrder} from '../../store/actions/cartActions'

export class CartItem extends Component {
    handleRemoveCartItem = e=>{
        this.props.promptConfirm(removeOrder(this.props.id));
    }
    render() {
        const {id,quantity,name,price} = this.props;
        const priceNumber = typeof price == "string"? parseFloat(price):priceNumber;
        return (
            <ListGroup.Item onClick={this.handleRemoveCartItem} className="clickable" title="Click to remove">
                <div className="d-flex justify-content-between">
                    <div>{`${quantity}lbs ${name}`}</div>
                    <div>{`$ ${priceNumber.toFixed(2)}`}</div>
                </div>
            </ListGroup.Item>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    promptConfirm:event=>dispatch({type:SHOW_CONFIRM,payload:{event}})
})

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)
