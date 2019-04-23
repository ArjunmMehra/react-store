import React, { Component } from 'react'
import styled from 'styled-components'
import { ProductConsumer } from '../context'
import { ButtonContainer } from './Button';
import { Link } from 'react-router-dom'


class Modal extends Component {
    render () {
        return (
            <ProductConsumer>
              {(value) => {
                const { modalOpen, closeModal } = value
                const { img, title, price } = value.modalProduct

                if(!modalOpen){
                    return null
                }
                else{
                    return (
                        <ModalContainer>
                            <div className="container">
                                <div className="row">
                                    <div id="modal" className="col-xs-12 col-sm-8 col-md-6 col-lg-4 text-center mx-auto text-capitalize p-5">
                                        <h5>Item added to Cart</h5>
                                        <img src={img} alt="NO IMG" className="img-fluid"></img>
                                        <h5 className="text-muted">{title}</h5>
                                        <h5>Price: $ {price}</h5>
                                            <Link to="/cart">
                                            <ButtonContainer onClick= { closeModal}>
                                                Go to cart
                                            </ButtonContainer>
                                            </Link>
                                            <Link to= "/">
                                            <ButtonContainer cart onClick= { closeModal}>
                                                continue shopping
                                            </ButtonContainer>
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </ModalContainer>
                    )
                }
              }}
            </ProductConsumer>
        )
    }
}

const ModalContainer= styled.div`
    position:fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0,0,0,0.3);
    box-shadow: 1px 1px 1px 1px grey;
    display: flex;
    align-items: center;
    justify-content: center;
    #modal{
        background: var(--mainWhite);
    }
`

export default Modal