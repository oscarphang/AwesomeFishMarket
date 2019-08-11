const initialState = {
    cartItems:[
        {product:{imgPath:"https://dummyimage.com/120x120/000/fff",name:"Baked Snow Crab",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",availability:true,price:55,id:1},quantity:2,id:1},
      {product:{imgPath:"https://dummyimage.com/120x120/000/fff",name:"Lobster",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",availability:false,price:30,id:2},quantity:5,id:2}]
}
export const ADD_CART_ITEM = 'ADD_CART_ITEM'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case REMOVE_CART_ITEM://payload id
            const newCart = state.cartItems.filter(elem=>elem.id!=payload.id);
            return { ...state,cartItems:newCart}
        case ADD_CART_ITEM://payload product obj
                const cartItem = state.cartItems.find(elem=>elem.product.id==payload.id);
                if (!cartItem){
                    //add
                    const newCart = [...state.cartItems,{quantity:1,id:1,product:payload}];
                    return { ...state, cartItems:newCart }
                }else{
                    //update quantity
                    cartItem.quantity++;
                    return { ...state, cartItems:[...state.cartItems]}
                }
                
    default:
        return state
    }
}
