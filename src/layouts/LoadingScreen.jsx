import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Spinner } from 'react-bootstrap';
import './layouts.scss';

export class LoadingScreen extends Component {

    render() {
        const {isLoading} = this.props;
        if (!isLoading){
            return <div></div>
        }
        return (
            <div className="overlay">
                <div className="overlay__inner">
                    <div className="overlay__content"><span className="spinner"></span></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading:state.common.isLoading
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen)
