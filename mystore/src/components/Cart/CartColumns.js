import React from 'react'

const CartColumns = () =>{
    return (
        <div className="container-fluid my-5 d-none d-lg-block">    
            <div className="row">
                <div className="col-xs-10 mx-auto col-lg-2 text-center">
                    <p className= "text-uppercase">Products</p>
                </div>
                <div className="col-xs-10 mx-auto col-lg-2 text-center">
                    <p className= "text-uppercase">Name of product</p>
                </div>
                <div className="col-xs-10 mx-auto col-lg-2 text-center">
                     <p className= "text-uppercase">price</p>
                </div>
                <div className="col-xs-10 mx-auto col-lg-2 text-center">
                    <p className= "text-uppercase">quantity</p>
                </div>
                <div className="col-xs-10 mx-auto col-lg-2 text-center">
                    <p className= "text-uppercase">remove</p>
                </div>
                <div className="col-xs-10 mx-auto col-lg-2 text-center">
                     <p className= "text-uppercase">total</p>
                </div>
            </div>   
        </div>
    )
}

export default CartColumns
