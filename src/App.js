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
import ProfilesPage from './pages/ProfilesPage/ProfilesPage';
import Alert from "./components/alert/Alert"
import ContentNotFound from './pages/PageNotFound/ContentNotFound';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {

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

            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="profiles" element={<ProfilesPage />} />

            <Route path="profile" >
              <Route path="create" element={<CreateProfilePage />} />
              <Route path="edit" element={<EditProfilePage />} />
              <Route path=":id" element={<ProfilePage />} />
              <Route path="404" element={<ContentNotFound />} />
            </Route>

            <Route path="posts" element={<PostsPage />} />

            <Route path="posts">
              <Route path="create" element={<CreatePostPage />} />
              <Route path=":id" element={<PostPage />} />
              <Route path="404" element={<ContentNotFound />} />
            </Route>

            <Route path="feeds" element={<FeedPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
