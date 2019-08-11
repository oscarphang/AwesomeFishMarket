const initialState = {
    products:[
        {imgPath:"https://dummyimage.com/120x120/000/fff",name:"Baked Snow Crab",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",availability:true,price:55,id:1},
      {imgPath:"https://dummyimage.com/120x120/000/fff",name:"Lobster",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",availability:false,price:30,id:2},
      {imgPath:"https://dummyimage.com/120x120/000/fff",name:"Baked Snow Crab",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",availability:true,price:55,id:3},
      {imgPath:"https://dummyimage.com/120x120/000/fff",name:"Lobster",description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo",availability:true,price:30,id:4}]
}
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case REMOVE_PRODUCT://payload id
        const newProductsAfterRemoved = state.products.filter(elem=>elem.id!=payload.id);
        return { ...state, products:newProductsAfterRemoved }

    case ADD_PRODUCT://payload product obj
        const newAProductsAfterAdded = [...state.products,payload]
        return { ...state, products:newAProductsAfterAdded }

    case EDIT_PRODUCT://payload product obj
        var newProducts = state.products.map(elem => {
            if(elem.id == payload.id)
            {
                return {...payload}
            }
            return elem
        });

        return { ...state,products:newProducts}

    default:
        return state
    }
}
