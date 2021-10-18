import axios from "axios";
import {GET_ERRORS, GET_BOOK} from "./types";


export const createBook = (newBook, history) => async dispatch => {

    try{

        await axios.post("http://localhost:8080/api/book/makeBook", newBook);
        history.push("/dashboard");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    }
    catch (err){
        dispatch ({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }

};

export const getBook = () => async dispatch => {

    try{
        const res = await axios.get("/api/getBook");
        dispatch({
            type: GET_ERRORS,
            payload: {}
        });
    }
    catch (err){
        dispatch ({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }

};