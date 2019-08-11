import React, { Component } from 'react'
import InventoryDetail from './InventoryDetail.jsx';
import { ListGroup } from 'react-bootstrap';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux';
import {SHOW_LOADING} from '../../store/reducers/commonReducer'
export class Inventory extends Component {
    componentDidMount() {
        this.props.dispatch({type:SHOW_LOADING,payload:true});
        this.props.firestore.collection("products").onSnapshot({ includeMetadataChanges: true }, 
            snapshot => {
                this.props.dispatch({type:SHOW_LOADING,payload:false});
          })
  
      }
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

const mapDispatchToProps = (dispatch) => ({
    showLoading: toggle=>dispatch({type:SHOW_LOADING,payload:toggle})
})

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection:"products"}
    ])

)(Inventory)


