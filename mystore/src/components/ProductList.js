import React, { Component, Fragment } from 'react'
import Product from './Product'
import Title from './Title'
import { ProductConsumer } from '../context'

export default class ProductList extends Component {
    render() {
        return (
            <Fragment>
                <div className="py-3" />
                <div className="container">
                    <Title name={"My"} title="Store" />
                    <div className="row">
                        <ProductConsumer>
                            {value => {
                                return value.products.map(product => {
                                    return <Product key={product.id} product={product} />
                                })
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </Fragment>
        )
    }
}