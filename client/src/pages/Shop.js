import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import API from "../utils/API";
import { set } from "mongoose";

class Shop extends Component {
    state = {
        products: [],
        items: [],
        user: '',
        order: ''
    }

    componentDidMount() {
        this.checkAuth();
    }

    checkAuth = () => {
        API.findMe().then(res => {
            if(res.data.email){
                this.setState({ user: res.data });
                this.loadOrder();
                this.loadProducts();
                this.loadItems();
            }
        })
    }

    loadOrder = () => {
        API.findOneOrder(this.state.user.orders[0]).then(res => {
            this.setState({ order: res.data });
        })
    }

    loadProducts = () => {
        API.findAvailableItems().then(res => {
            this.setState({ products: res.data });
        })
    }

    loadItems = () => {
        API.findOneOrder(this.state.user.orders).then(res =>{
            console.log(res);
            this.setState({ items: res.data.items });
        })
    }

    addToCart = product => {
        console.log(product.name);
        API.createItem(this.state.order._id, {
            name: product.name,
            price: product.price
        }).then(res => {
            this.loadItems();
        })
    }
 
    render() {
        if (this.state.user) {
            return (
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <div>
                                <h1>Shop</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <div>
                                <h1>Your items</h1>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            {this.state.products.length ? (
                                <div>
                                    {this.state.products.map(product => (
                                        <div className="card" key={product._id}>
                                        <strong className="productInfo">{product.name}: {product.price}$</strong>
                                        <button type="button" onClick={() => this.addToCart(product)}>Add to cart</button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <h3>Something went wrong</h3>
                            )}
                        </Col>
                    </Row>
                </Container>
            )
        } else {
            return (
                <h1>Must be logged in to use the shop</h1>
            )
        }
    }

}

export default Shop;