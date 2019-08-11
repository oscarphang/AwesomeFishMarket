import React, { Component } from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem.jsx';
import { ListGroup } from 'react-bootstrap';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux';
import "./cart.scss";

export class Cart extends Component {
    render() {
        const {cartItems} = this.props;
        return (
            <ListGroup>
                {cartItems&&cartItems.map(elem=>(
                    <CartItem 
                    key={elem.id} 
                    id={elem.id}
                    quantity={elem.quantity} 
                    name={elem.product.name} 
                    price={elem.product.price}/>
                ))}
                <ListGroup.Item className="total">
                    <div className="d-flex justify-content-between">
                        <div></div>
                        <div>{`$ ${(!cartItems?0:Object.values(cartItems).reduce((total, item) => (total + (item.quantity*item.product.price)),0)).toFixed(2)}`}</div>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        cartItems:Object.keys(state.firestore.data).length==0?[]:state.firestore.ordered.cartItems
    }
}

const mapDispatchToProps = {
    
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection:"cartItems"}
    ])
)(Cart)

