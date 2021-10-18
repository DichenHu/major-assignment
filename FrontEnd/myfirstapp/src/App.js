import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddPerson from "./components/Persons/AddPerson";
import { Provider } from "react-redux";
import store from "./store";

import Landing from "./components/Layout/Landing";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";
import SoldBook from "./components/Book/SoldBook";
import { SideBar } from "./components/Layout/Sidebar";
import BookDetail from "./components/Book/BookDetail";
import PaymentPage from './components/Payment/PaymentPage'
import Paypage from "./components/paypal/Paypage";
import Aprove from"./components/Admin/Aprove";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <Header />

                        <div className="container">
                            <div class="row">

                                <div className="col-12">
                                    {
                                        //Public Routes
                                    }

                                    <Route exact path="/" component={Landing} />
                                    <Route
                                        exact
                                        path="/register"
                                        component={Register}
                                    />
                                    <Route
                                        exact
                                        path="/login"
                                        component={Login}
                                    />

                                    {
                                        //Private Routes
                                    }
                                    <Route
                                        exact
                                        path="/dashboard"
                                        component={Dashboard}
                                    />
                                    <Route
                                        exact
                                        path="/addPerson"
                                        component={AddPerson}
                                    />
                                    <Route
                                        exact
                                        path="/account/soldbook"
                                        component={SoldBook}
                                    />
                                    <Route exact path="/book/:id" component={BookDetail}/>
                                    <Route exact path="/paypal" component={Paypage}/>

                                    <Route exact path="/payment/:method" component={PaymentPage}/>
                                    <Route exact path="/Admin" component={Aprove}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}
export default App;
