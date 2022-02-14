import React from "react";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
    return (
        <div className={'app'}>
            <Header />
            <Routes>
                <Route exact path={'/'} element={<HomePage/>}/>
                <Route path="/shop" element={<ShopPage/>}/>
                <Route path="/signin" element={<SignInAndSignUp/>}/>
            </Routes>
        </div>
    );
}


export default App;
