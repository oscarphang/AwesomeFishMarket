import {ADD_PRODUCT} from '../reducers/productReducer'
import {SHOW_MSG} from '../reducers/commonReducer'

export const createProduct = (product) => {
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore =getFirestore();
        firestore.collection("products").add({
            ...product,
            createBy:1,
            createdAt:new Date()
        }).then(()=>{
            dispatch({type:ADD_PRODUCT,payload:product})
        }).catch(e=>{
            dispatch({type:SHOW_MSG,payload:"insert product failed."})
        })
        
    }
}

export const removeProduct = (id) => {
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore =getFirestore();
        firestore
        .collection("products")
        .doc(id)
        .delete().catch(function(error) {
            dispatch({type:SHOW_MSG,payload:"Failed to remove item."})
        });
    }
}

export const editProduct = (product) => {
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore =getFirestore();
        const productRef = firestore.collection('products').doc(product.id);
        productRef.update(product);
    }
}