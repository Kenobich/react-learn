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
          <Route  path="/dialogs" render={()=> <Dialogs  newMessage={props.state.newMessageText}
                                                         addMessage={props.addMessage}
                                                         addNewMessage={props.addNewMessage}

                                                         messagesData={props.state.messagesData}
                                                         dialogsData={props.state.dialogsData}/>} />
          <Route  exact path="/profile" render={()=> <Profile postDate={props.state.postData}

                                                              newPost={props.state.newPostText}
                                                              addNewPost={props.addNewPost}
                                                              addPost={props.addPost}/>} />
          <Route path="/friends" component={FriendsList} />
          <Route path="/friendsGrid" component={FriendsListGrid} />
        </div>
      </div>

  );
};

export default App;
