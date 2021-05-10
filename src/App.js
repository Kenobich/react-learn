import React from "react";
import { Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import FriendsList from "./components/Friends/FriendsList/FriendsList";
import FriendsListGrid from "./components/Friends/FriendsListGrid/FriedsListGrid";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/friends" component={FriendsList} />
          <Route path="/friendsGrid" component={FriendsListGrid} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
