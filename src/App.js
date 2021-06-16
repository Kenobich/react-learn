import React from "react";
import { Route } from "react-router";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import FriendsList from "./components/Friends/FriendsList/FriendsList";
import FriendsListGrid from "./components/Friends/FriendsListGrid/FriedsListGrid";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
            <Route  exact path="/profile" render={()=> <Profile postDate={props.state.profilePage.postData}
                                                                newPost={props.state.profilePage.newPostText}
                                                                dispatch={props.dispatch}/>} />
          <Route  path="/dialogs" render={()=> <Dialogs  messagesData={props.state.dialogsPage.messagesData}
                                                         newMessage={props.state.dialogsPage.newMessageText}
                                                         dispatch={props.dispatch}
                                                         dialogsData={props.state.dialogsPage.dialogsData}/>} />

          <Route path="/friends" component={FriendsList} />
          <Route path="/friendsGrid" component={FriendsListGrid} />
        </div>
      </div>

  );
};

export default App;
