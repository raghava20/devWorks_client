import React, { useEffect } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { loadUser } from "./redux/auth/auth.actions";
import setAuthToken from "./auth/setAuthToken";
import store from "./redux/store"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import DashboardPage from './pages/DashboardPage/DashboardPage';
import CreateProfilePage from './pages/CreateProfilePage/CreateProfilePage';
import EditProfilePage from './pages/EditProfilePage/EditProfilePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import PostsPage from './pages/PostsPage/PostsPage';
import CreatePostPage from './pages/CreatePostPage/CreatePostPage';
import PostPage from './pages/PostPage/PostPage';
import FeedPage from './pages/FeedPage/FeedPage';
import LandingPage from './pages/LandingPage/LandingPage';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import ProfilesPage from './pages/ProfilesPage/ProfilesPage';
import PrivateRoute from "./components/private-route/PrivateRoute"
import Alert from "./components/alert/Alert"

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    < >
      <Provider store={store}>
        <BrowserRouter>
          <Alert />
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="signup" element={<Signup />}></Route>
            <Route path="forgot-password" element={<ForgotPassword />}></Route>
            <Route path="reset-password/:id" element={<ResetPassword />}></Route>

            <PrivateRoute path="dashboard" element={<DashboardPage />} />
            <PrivateRoute path="profiles" element={<ProfilesPage />} />
            <PrivateRoute path="profile" >
              <PrivateRoute path="create" element={<CreateProfilePage />} />
              <PrivateRoute path="edit" element={<EditProfilePage />} />
              <PrivateRoute path=":id" element={<ProfilePage />} />
            </PrivateRoute>
            <PrivateRoute path="posts" element={<PostsPage />} />
            <PrivateRoute path="posts">
              <PrivateRoute path="create" element={<CreatePostPage />} />
              <PrivateRoute path=":id" element={<PostPage />} />
            </PrivateRoute>
            <PrivateRoute path="feeds" element={<FeedPage />} />
            <PrivateRoute path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
