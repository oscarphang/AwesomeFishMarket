import React, { Component } from 'react'
import "./inventory.scss";
import { connect } from 'react-redux'
import {REMOVE_PRODUCT,EDIT_PRODUCT} from '../../store/reducers/productReducer'
import {SHOW_CONFIRM} from '../../store/reducers/commonReducer';
import {removeProduct,editProduct} from '../../store/actions/productActions'

export class InventoryDetail extends Component {
    handleRemove = (e) => {
        this.props.promptConfirm(removeProduct(this.props.id));
    };
    onChange = e => {

        const productWithfunc = {...this.props};
        const {editProduct,promptConfirm,...product} = productWithfunc;
        product[e.target.name]=e.target.value;
        this.props.editProduct(product)
    }
    render() {
        const {imgPath,name,description,availability,price} = this.props;
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
                <button className="w-100" onClick={this.handleRemove}>Remove Fish</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    promptConfirm:event=>dispatch({type:SHOW_CONFIRM,payload:{event}}),
    editProduct:product=>dispatch(editProduct(product))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(InventoryDetail)