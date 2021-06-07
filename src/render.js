import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { UIProvider } from "./context/UIContext";
import {addMessage, addNewMessage, addNewPost, addPost} from './redux/state.js';

import { BrowserRouter } from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <UIProvider>
                <BrowserRouter>
                    <App state={state}
                         addPost={addPost}  addNewPost={addNewPost}  addMessage={addMessage}  addNewMessage={addNewMessage}/>
                </BrowserRouter>
            </UIProvider>
        </React.StrictMode>,
        document.getElementById("root"));
}

