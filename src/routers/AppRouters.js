import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import NavBarLanding from "../components/landing/NavBarLanding";
import { auth } from "../firebase/FirebaseConfig";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { loginSync } from "../redux/actions/Actions";
import { getDataUser } from "../services/register";
import DashboarRouters from "./DashboarRouter";
import { PrivateRouter } from "./PrivateRouter";
import PublicRouter from "./PublicRouter";

const AppRouters = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.auth);

  const getUserDataLogged = async (user) => {
    const dataUser = await getDataUser(user.accessToken);
    const userRegister = dataUser.filter((item) => item.email === user?.email);
    const newDataUser = {
      accessToken: user.accessToken,
      displayName: user.displayName,
      ...userRegister[0],
    };
    dispatch(loginSync(newDataUser));
  };
  useEffect(() => {
    if (loading) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          getUserDataLogged(user).then(() => {
            setLoading(false);
          });
        }
      });
    }
  }, [dispatch, loading]);
  return (
    <div>
      <BrowserRouter>
        {user.isAuthenticated ? <></> : <NavBarLanding />}
        <Routes>
          <Route
            path="/"
            element={
              <PublicRouter>
                <LandingPage />
              </PublicRouter>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRouter>
                <Login />
              </PublicRouter>
            }
          />
          <Route
            path="/registro"
            element={
              <PublicRouter>
                <Register />
              </PublicRouter>
            }
          />
          <Route
            path="/*"
            element={
              <PrivateRouter>
                <DashboarRouters />
              </PrivateRouter>
            }
          />
        </Routes>
        {user.isAuthenticated ? <></> : <Footer />}
      </BrowserRouter>
    </div>
  );
};

export default AppRouters;
