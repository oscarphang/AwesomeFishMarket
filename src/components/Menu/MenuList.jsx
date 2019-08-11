import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap';
import MenuDetail from './MenuDetail.jsx';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux';

class MenuList extends Component {
    render() {
        const {products} =this.props;
        return (
            <ListGroup>
                {products&&products.map(elem=>(
                    <MenuDetail key={elem.id} {...elem}/>
                ))}
            </ListGroup>
        )
    }
}
const mapStateToProps = (state) => ({
    products:Object.keys(state.firestore.data).length==0?[]:state.firestore.ordered.products
})

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:"products"}
    ])
)(MenuList)


