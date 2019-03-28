import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
//import { ButtonContainer } from './Button'

export default class Product extends Component {

    render() {
        const { title, img, price, company, info, inCart } = this.props.product
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3">
                <div className="card">
                    <div className="img-container p-5">
                        <Link to="/details">
                            <img src={img} alt='Noimage' className="card-img-top" />
                        </Link>
                        <button className="cart-btn" disabled= {inCart ? true : false} onClick={console.log('sds')}>
                            {
                                inCart ? 
                                (<p className="text-capitalize mb0" disabled>{" "} in cart </p>):
                                (<i className="fas fa-cart-plus"/>)
                            }
                        </button>
                    </div>
                    {/* card footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue font-italic mb-0"><span className="mr-1">$</span>
                        {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

const ProductWrapper = styled.div`
     width: 100px; !important
     height: 100px; !important
`