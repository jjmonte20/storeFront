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
        order: '',
        search: ''
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
            }
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    loadOrder = () => {
        API.findOneOrder(this.state.user.orders[0]).then(res => {
            this.setState({ order: res.data });
            this.loadItems();
        })
    }

    loadProducts = () => {
        API.findAvailableItems().then(res => {
            this.setState({ products: res.data });
        })
    }

    loadItems = () => {
            console.log(this.state.order[0].items);
            this.setState({ items: this.state.order[0].items });
        }

    addToCart = product => {
        console.log(this.state.order[0]._id);
        API.createItem(this.state.order[0]._id, {
            name: product.name,
            price: product.price
        }).then(res => {
            this.loadOrder();
        })
    }
 
    render() {
        if (this.state.user) {
            let filteredProducts = this.state.products.filter(
                (product) => {
                    return product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
                }
            )
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
                                {this.state.items.length ? (
                                <div>
                                    {this.state.items.map(item => (
                                        <div className="card" key={item._id}>
                                        <strong className="productInfo">{item.name}</strong>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <h3>Something went wrong</h3>
                            )}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            <h1>Products on Sale</h1>
                            <form>
                                <input 
                                className="form-control"
                                type="search" 
                                name="search" 
                                value={this.state.search} 
                                placeholder="Search" 
                                aria-label="Search" 
                                onChange={this.handleInputChange}
                                />
                            </form>
                            {this.state.products.length ? (
                                <div>
                                    {filteredProducts.map(product => (
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