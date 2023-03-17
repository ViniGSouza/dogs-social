import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Home } from './Components/Home';
import { Login } from './Components/Login/Login';
import { User } from './Components/User/User';
import { UserStorage } from './UserContext';
import { ProtectedRoute } from './Components/Helper/ProtectedRoute';

export const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="login/*" element={<Login />}/>
            <Route
            path="conta/*"
            element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
              }
            />
          </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}
