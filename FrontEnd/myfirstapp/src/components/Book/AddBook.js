import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createBook} from "../../actions/bookActions";


class AddBook extends Component {
    constructor(){
        super();
        this.state= {
        bookName: "",
        bookDescription: "",
        image: "",
     
    }; 
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
        }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        const newBook = {
            bookName: this.state.bookName,
            bookDescription: this.state.bookDescription,
            image: this.state.image 
        }

        this.props.createBook(newBook, this.props.history);
    }
    render() {
        return (
            <div className="Person">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Add Book Form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg " 
                                placeholder="Book Name" 
                                name="bookName"
                                value= {this.state.bookName}
                                onChange = {this.onChange}
                                />
                                
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" 
                                placeholder="Book Description"
                                name="bookDescription"
                                value= {this.state.bookDescription}
                                onChange = {this.onChange}
                                    />
                            </div>
                          
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" 
                                placeholder="Book Image"
                                name = "image"
                                value= {this.state.image}
                                onChange = {this.onChange}
                                />

                            </div>
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
AddBook.propTypes = {
    createProject: PropTypes.func.isRequired
  };
  
  export default connect(
    null,
    { createBook }
  )(AddBook);