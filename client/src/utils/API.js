import axios from "axios";

export default {
  // Creates a user
  createUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  // For checking auth
  findMe: function(){
    return axios.get("/api/users/me");
  },
  // Deletes a user
  deleteUser: function(id){
    return axios.delete("/api/users/" + id);
  },
  // ============================
  // Creates an order
  createOrder: function(id){
    console.log("/api/orders/" + id);
    return axios.post("/api/orders/" + id);
  },
  // Finds all orders for one user
  findAllOrders: function(id, orderData){
    return axios.get("/api/orders/user/" + id, orderData);
  },
  // Finds all data for one order
  findOneOrder: function(id, orderData){
    return axios.get("/api/orders/" + id, orderData);
  },
  // Deletes an order
  deleteOrder: function(id){
    return axios.delete("/api/orders/" + id);
  },
  // ============================
  // Creates an item in the order
  createItem: function(id, itemData){
    return axios.post("/api/items/" + id, itemData);
  },
  // Deletes an item
  deleteItem: function(id){
    return axios.delete("/api/items/" + id);
  },
  // ============================
  // finds all of the available items
  findAvailableItems: function(available){
    return axios.get("/api/availableitems", available);
  },
  // adds an item to the available item database
  addNewAvailable: function(available){
    return axios.post("/api/availableitems", available);
  },
  // ============================
  // login data
  login: function(loginUser){
    return axios.post("/api/login", loginUser);
  },
  // logout
  logout: function(){
    return axios.get("/api/logout");
  }
};
