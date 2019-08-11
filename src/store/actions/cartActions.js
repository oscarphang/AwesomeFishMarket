import {SHOW_MSG} from '../reducers/commonReducer'
import {ADD_CART_ITEM} from '../reducers/cartReducer'

export const removeOrder = (id) => {
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore =getFirestore();
        firestore
        .collection("cartItems")
        .doc(id)
        .delete().catch(function(error) {
            dispatch({type:SHOW_MSG,payload:"Failed to remove item."})
        });
    }
}

export const createOrder = (cartItem) => {
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore =getFirestore();

        firestore
            .collection("cartItems")
            .where("product.id", "==", cartItem.id)
            .get()
            .then(function(doc) {
                
                if (doc.docs.length==0){
                    firestore.collection("cartItems").add({
                        quantity:1,
                        product:cartItem,
                        createBy:1,
                        createdAt:new Date()
                    }).then(()=>{
                        dispatch({type:ADD_CART_ITEM,payload:cartItem})
                    }).catch(e=>{
                        dispatch({type:SHOW_MSG,payload:"insert item to cart failed."})
                    })
                }else{
                    const cartItemRef = firestore.collection('cartItems').doc(doc.docs[0].id);
                    const increment = firestore.FieldValue.increment(1);
                    cartItemRef.update({ quantity: increment });
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

        
    }
}