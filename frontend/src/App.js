import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch,Redirect } from "react-router-dom";
// import SignupFormPage from './components/SignupFormPage';
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import { Modal } from "./context/Modal";
import { Home } from "./components/home/home";
import { Search } from "./components/Search/search";
import { SpotPage } from "./components/Spot-Page/spot-page";
import { UploadForm } from "./components/uploadSpot/upload";
import MapContainer from "./components/Maps";
import Footer from "./components/footer/footer";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/spot-page/:id">
            <SpotPage />
          </Route>
          <Route path="/upload">
            <UploadForm />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
