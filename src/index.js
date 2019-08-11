import React from 'react'
import { render } from 'react-dom'

//components
import  '../index.scss';
import { Container,Row,Col } from 'react-bootstrap';
import MenuList from "./components/Menu/MenuList.jsx";
import Pane from './layouts/Pane.jsx';
import Cart from './components/Cart/Cart.jsx'
import Inventory from './components/Inventory/Inventory.jsx'
import ItemCreate from './components/Inventory/ItemCreate.jsx'
import ConfirmBox from './layouts/ConfirmBox.jsx';
import LoadingScreen from './layouts/LoadingScreen.jsx';
//state
import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {getFirestore,reduxFirestore,createFirestoreInstance} from 'redux-firestore';
import {getFirebase,ReactReduxFirebaseProvider} from 'react-redux-firebase';

import fbConfig from './firebase';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(fbConfig)
));

const rrfProps = {
  firebase:fbConfig,
   config: {},
   dispatch: store.dispatch,
   createFirestoreInstance // <- needed if using firestore
 }
const App = () => (
  <Container className={`h-100 py-5`}>
    <Row>
      <Pane>
        <div style={{height:250,backgroundColor:"gray",width:"100%"}} className="mb-2">
        <div className="jumbotron">
          <h1 className="display-4">Awesome Fish Market</h1>
          <p className="lead">Fresh Seafood Market</p>
        </div>
        </div>
        <MenuList />
      </Pane>
      <Pane header={"Your Order"}>
        <Cart />
      </Pane>
      <Pane header={"Inventory"}>
        <div style={{height:30,backgroundColor:"green",width:"100%"}} className="mb-2">auth</div>
        <Inventory />
        <ItemCreate/>
      </Pane>
    </Row>
    <ConfirmBox/>
    <LoadingScreen/>
  </Container>
)

render(<Provider store={store}><ReactReduxFirebaseProvider {...rrfProps}><App /></ReactReduxFirebaseProvider></Provider>, document.getElementById('REACT_ROOT'))