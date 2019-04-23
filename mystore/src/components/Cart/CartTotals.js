import React from 'react'
import { Link } from 'react-router-dom'

const CartTotals = ({value}) =>{
    const { cartSubTotal , cartTax, cartTotal , clearCart} = value
    return(
        <div className="container">
            <div className="row">
                <div className="col-10 col-lg-2 col-sm-8 mt-2 ml-sm-5 ml-md-auto text-right text-capitalize">
                    <Link to="/">
                         <button type="button" className="btn btn-outline-danger text-uppercase mb-3 px-4"
                         onClick= {()=>clearCart()}
                         >
                            clear cart</button>
                    </Link>
                    <h5 className="textTitle">
                        <span>Subtotal : </span>
                        <strong>$ {cartSubTotal}</strong>
                    </h5>
                    <h5 className="textTitle">
                        <span>Tax :</span>
                        <strong>$ {cartTax}</strong>
                    </h5>
                    <h5 className="textTitle">
                        <span>Total :</span>
                        <strong>$ {cartTotal}</strong>
                    </h5>    
                </div> 
            </div>
        </div>
    )
}

export default CartTotals