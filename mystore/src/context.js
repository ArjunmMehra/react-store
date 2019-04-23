import React, { Component } from 'react'
import { storeProducts, detailProduct } from './data'

const ProductContext= React.createContext()


class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    }

    componentDidMount (){
        this.setProducts()
    }

    getItem = id => this.state.products.find(item => item.id === id)

    setProducts = () =>{
        let products = []
        storeProducts.forEach(item=>{
            const singleItem= {...item}
            products=[...products,singleItem]
        })
        this.setState(()=>{
            return {products: products}
        })
    } 
    
    handleDetails=(id) => {
        const filteredProduct = this.getItem(id)
        this.setState(()=>{
              return  { detailProduct: filteredProduct }
        })
    }
    addToCart = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total= price
        this.setState(()=> {
            return{
                products : tempProducts,
                cart: [...this.state.cart, product]
            }
        },()=>{
            this.addTotal()
        })
    }

    openModal= id =>{
        const product = this.getItem(id)
        this.setState(() => {
            return {
                modalProduct: product,
                modalOpen: true
            }
        })
    }

    closeModal= () => {
        this.setState(() => {
           return {
               modalOpen: false
            }
        })
    }

    increment = (id) =>{
       this.incrementDecrement('increment',id)
    }

    incrementDecrement(operationType, id){
        const cart= [...this.state.cart]
        const selectedProduct = cart.find((item)=> item.id === id)
        const productIndex = cart.indexOf(selectedProduct)
        const product = cart[productIndex]
        if(operationType === 'increment'){
            product.count = product.count + 1
        }
        else if (operationType === 'decrement') {
            if(product.count===0){
                this.removeItem(id)
                return
            }
            else{
                product.count = product.count - 1
            }   
        }
        product.total = product.count * product.price
        this.setState(()=>{
            return {
                cart : [...cart]
            }
        },() => {
            this.addTotal()
        }
    )
    }

    decrement = id =>{
        this.incrementDecrement('decrement',id)
    }

    clearCart = () =>{
        this.setState(()=>{
            return {
                cart: []
            }
        }, ()=>{
            this.setProducts()
            this.addTotal()
        })
    }

    removeItem = (id) =>{
        const tempCart=this.state.cart.filter((item)=>item.id!== id)
        this.setState(()=>{
            return {
                cart: tempCart
            }
        },()=>{
            this.setProducts()
            this.addTotal()
        })
    }

    addTotal = () =>{
        let subTotal= 0
        this.state.cart.map((item)=>(subTotal += item.total))
        const tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const cartTotal = subTotal + tax
        this.setState (()=>{
            return{
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: cartTotal
            }
        })
    }

    render () {
        return (
            <ProductContext.Provider value= 
            {{  ...this.state, 
                handleDetails:this.handleDetails,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                clearCart: this.clearCart,
                removeItem: this.removeItem
            }}>
                {this.props.children}
            </ProductContext.Provider>
        ) 
    }
}

const ProductConsumer= ProductContext.Consumer

export {ProductProvider, ProductConsumer}