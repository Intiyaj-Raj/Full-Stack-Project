import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    TotalPrice: 0,
    TotalQuantity: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, actions) => {

            const find = state.cart.findIndex((value) => {
                return value._id === actions.payload._id
            })
            // console.log(find);

            if (find != -1) {
                state.cart[find] = ({ ...state.cart[find], quantity: state.cart[find].quantity + 1 })
            } else {
                state.cart.push({ ...actions.payload, quantity: 1 })
            }
        },
        deleteCartItem: (state, actions) => {
            state.cart = state.cart.filter((value) => {
                return value._id !== actions.payload._id
            })
        },
        IncrementQuantity: (state, actions) => {
            state.cart = state.cart.map((value) => {
                if (value._id === actions.payload._id) {
                    return { ...value, quantity: value.quantity + 1 }
                }
                return value
            })
        },
        DecrementQunatity: (state, actions) => {
            state.cart = state.cart.map((value) => {
                if (value._id === actions.payload._id) {
                    return { ...value, quantity: value.quantity > 1 ? value.quantity - 1 : 1 }
                }
                return value
            })
        },
        cartTotal: (state) => {
            const { totalPrice, totalQuantity } = state.cart.reduce((cartTotal, cartItems) => {
                const { productPrice, quantity } = cartItems
                const itemTotal = parseFloat(productPrice) * quantity
                cartTotal.totalPrice += itemTotal
                cartTotal.totalQuantity += quantity
                return cartTotal
            }, {
                totalPrice: 0,
                totalQuantity: 0
            })
            state.TotalPrice = totalPrice
            state.TotalQuantity = totalQuantity
        }
    },
})


export const { addToCart, deleteCartItem, IncrementQuantity, DecrementQunatity, cartTotal } = cartSlice.actions

export default cartSlice.reducer