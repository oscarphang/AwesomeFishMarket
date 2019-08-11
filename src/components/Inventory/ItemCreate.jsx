import React, { Component } from 'react'
import "./inventory.scss";
import { connect } from 'react-redux'
import {ADD_PRODUCT,EDIT_PRODUCT} from '../../store/reducers/productReducer'
import {createProduct} from '../../store/actions/productActions'

export class InventoryDetail extends Component {
    defaultState ={
        imgPath:"",
        name:"",
        description:"",
        availability:true,
        price:0
    };
    constructor(props) {
        // Required step: always call the parent class' constructor
        super(props);
    
        // Set the state directly. Use props if necessary.
        this.state = this.defaultState;
      }

    handleAdd = (e) => {
        this.props.addProduct(this.state);
        this.setState(this.defaultState);
    };
    onChange = event => {
        const {value,name} = event.target;
        this.setState({
          [name]: value
        });
    }
    render() {
        const {imgPath,name,description,availability,price} = this.state;
        return (
            <div className="fishEdit">
                <div className="d-flex">
                    <input type="text" name="name" value={name} onChange={this.onChange} />
                    <input type="number" name="price" value={price} onChange={this.onChange}/>
                    <select className="h-100" name="availability" value={availability} onChange={this.onChange}>
                        <option value={false}>Sold Out!</option>
                        <option value={true}>Fresh!</option>
                    </select>
                </div>
                <div >
                <textarea className="w-100" name="description" value={description} onChange={this.onChange}></textarea>
                </div>
                <div>
                <input className="w-100" name="imgPath" type="text" value={imgPath} onChange={this.onChange}/>
                </div>
                <div>
                <button className="w-100" onClick={this.handleAdd}>{"+ Add Fish"}</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
    addProduct:product=>dispatch(createProduct(product))
    // addProduct:product=>dispatch({type:ADD_PRODUCT,payload:product})
    
})

export default connect(mapStateToProps, mapDispatchToProps)(InventoryDetail)