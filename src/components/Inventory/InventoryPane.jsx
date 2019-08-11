import React, { Component } from 'react'
import { connect } from 'react-redux'
import Inventory from './Inventory.jsx'
import ItemCreate from './ItemCreate.jsx'

export class InventoryPane extends Component {

    render() {
        return (
            <>
                {
                    this.props.showInventoryControl &&
                    <>
                        <Inventory/>
                        <ItemCreate/>
                    </>
                }
                
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    showInventoryControl:state.auth.isSignedIn
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(InventoryPane)
