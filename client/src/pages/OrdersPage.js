import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

class Orders extends Component {
    state = {
        orders: [],
        user: ''
    }

    componentDidMount() {
        this.checkAuth();
    }

    checkAuth = () => {
        API.findMe().then(res => {
                if(res.data.email){
                this.setState({ user: res.data });
                this.loadOrders();
                }
            })
    }

    loadOrders = () => {
        API.findAllOrders(this.state.user._id).then(res => {
            this.setState({ orderHolder: res.data });
            if (res.data.orders !== null){
                this.setState({ orders: res.data.orders });
            }
        })
    }

    handleAddOrder = () => {
        API.createOrder(this.state.user._id)
        .then(res => {
            this.loadOrders();
        })
    }

    render(){
        if (this.state.user){
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <div>
                            <h1>Your Orders</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        <h2>Orders</h2>
                        {this.state.orders.length ? (
                            <div>
                                {this.state.orders.map(order => (
                                    <div className="card" key={order._id}>
                                        <Link to={"/shop/" + order._id}><h1>{order._id}</h1></Link>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <button type="button" onClick={this.handleAddOrder}>Add an order</button>
                        )}
                    </Col>
                </Row>
            </Container>
        )}
        else {
            return (
                <h1>Must be logged in to see your orders</h1>
            )
        }
    }
}

export default Orders;