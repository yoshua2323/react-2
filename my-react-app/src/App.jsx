import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import NotFoundView from './views/NotFoundView';
import LogoutView from './views/LogoutView';
import Layout from './components/Layout';
import store from './store';

const appOptions = [
  { title: "Home", to: "/" },
  { title: "Login", to: "/login" },
  { title: "Perfil", to: "/perfil" },
  { title: "Logout", to: "/logout" },
];

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout options={appOptions} />}>
            <Route index element={<HomeView />} />
            <Route path="login" element={<LoginView />} />
            <Route path="perfil" element={<div>Perfil</div>} />
            <Route path="logout" element={<LogoutView />} />
            <Route path="*" element={<NotFoundView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
