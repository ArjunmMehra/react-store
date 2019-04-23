import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import {Link} from 'react-router-dom'
import { ButtonContainer } from './Button';

export default class Details extends Component {
    render () {
        return (
            <ProductConsumer>
               {value=>{
                   const {id, title, img, price, company, info, inCart} = value.detailProduct
                   return (
                       <div className="container my-5">
                           {/* {Title start} */}
                           <div className="row">
                               <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                   <h1>{title}</h1>
                               </div>
                           </div>
                           {/* {Title End} */}
                           {/* {Product Info} */}
                           <div className="row">  
                           {/* {Product Image} */}
                               <div className="col-10 col-md-6 mx-auto my-3">
                                   <img src={img} alt="No Img" className="img-fluid"/>
                               </div>
                            {/* {Product Image End} */}
                            {/* {Product text} */}
                               <div className="col-10 col-md-6 mx-auto my-3 text-capitalize">
                                <h2>Model: {title}</h2>
                                <h4 className="text-title text-muted mt-3 mb-2">
                                    Made by: <span className="text-capitalize">
                                    {company}
                                    </span>
                                </h4>
                                <h4 className="mt-3 mb-2 text-blue">
                                    <strong>Price: <span>$</span>
                                    {price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize mt-3 mb-0 font-weight-bold">
                                    Some info about the product:
                                </p>
                                <p className="text-muted lead">
                                    {info}
                                </p>
                                    {/* {Product text end} */}
                                  {/* {Navigation Links} */}
                                  <div className="row">
                                  <Link to= "/">
                                        <ButtonContainer>
                                            Back to products
                                        </ButtonContainer>
                                    </Link>
                                        <ButtonContainer cart disabled={inCart?true:false}
                                        onClick={()=>{
                                                value.addToCart(id)
                                                value.openModal(id)
                                            }
                                        }
                                        >
                                            {inCart? "In Cart": "Add To Cart"}
                                        </ButtonContainer>
                                </div>
                                </div>
                           </div>
                       </div>
                   )
                }
                }
            </ProductConsumer>
        ) 
    }
}