import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListGroup } from 'react-bootstrap';
import  './menu.scss';
import {ADD_CART_ITEM} from '../../store/reducers/cartReducer'
import {createOrder} from '../../store/actions/cartActions'
import productReducer from '../../store/reducers/productReducer';

export class MenuDetail extends Component {
    handleAddToCart=e=>{
        const {addToCart,...product}=this.props;
        this.props.addToCart(product)
    }

    render() {
        const {imgPath,name,description,availability,price} = this.props;
        const priceNumber = typeof price =="string"? parseFloat(price):price;
        const availabilityBool = typeof availability =="string"? availability=="true":availability;
        return (
            <ListGroup.Item onClick={this.handleAddToCart} className="clickable" title="click to add into cart.">
                <div className="d-flex justify-content-between menuFish">
                    <div>
                        <h4>{name}</h4>
                        <p>{description}</p>
                        
                        <span>{`$ ${priceNumber.toFixed(2)}`}</span>
                    </div>
                    {!availabilityBool&&<div><span className="stamp isSoldOut">Sold out</span></div>}
                    <div >
                        <img src={imgPath} alt=""/>
                    </div>
                </div>
            </ListGroup.Item>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    addToCart:cartItem=>dispatch(createOrder(cartItem))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuDetail)
