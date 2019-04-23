import React from 'react'

const CartItem = ({item, value}) =>{
    const {id, img, title, price, total, count} = item
    const { increment, decrement, removeItem} = value
    return(
        <div className="row my-3 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img src= {img} style={{width:"5rem", height:"5rem"}}  alt="No IMG" className="img-fluid"/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span>
                   <strong className="d-lg-none"> product title : </strong> { title }
                </span>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span>
                <strong className="d-lg-none">  price:  </strong> ${ price }
                </span>
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div>
                    <div className="d-flex justify-content-center">
                        <span className="btn btn-black mx-1" 
                            onClick={()=>increment(id)}>
                             +
                        </span>
                        <span  className="btn btn-black mx-1">{count}</span>
                        <span  className="btn btn-black mx-1" 
                            onClick={()=>decrement(id)}>
                            -
                        </span> 
                    </div>
                </div> 
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=>{ removeItem(id)}}>
                    <i  className="fa fa-trash"></i>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                 <strong >
                    item total : ${ total }
                </strong>
            </div>
        </div>
    )
}

export default CartItem