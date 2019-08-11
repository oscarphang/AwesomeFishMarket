import React, { Component } from 'react'
import InventoryDetail from './InventoryDetail.jsx';
import { ListGroup } from 'react-bootstrap';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux';

export class Inventory extends Component {

    render() {

        const {products} =this.props;
        return (
            <ListGroup>
                {products&&products.map((elem)=>(
                    <InventoryDetail key={elem.id} {...elem}/>
                ))}
            </ListGroup>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // products:[]
        products:Object.keys(state.firestore.data).length==0?[]:state.firestore.ordered.products
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:"products"}
    ])

)(Inventory)


