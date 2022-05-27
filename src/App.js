import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Blogs from './Components/Shared/Blogs';
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar';
import ContactUs from './Components/Shared/ContactUs';
import Profile from './Components/Dashboard/Profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Register from './Components/Login/Register';
import RequireAuth from './Components/Login/RequireAuth';
import Purchase from './Components/Purchase/Purchase';
import Dashboard from './Components/Dashboard/Dashboard';
import Orders from './Components/Dashboard/Orders';
import Review from './Components/Dashboard/Review';
import Portfolio from './Components/Shared/Portfolio';
import NotFound from './Components/Shared/NotFound';
import AllUsers from './Components/Dashboard/AllUsers';
import RequireAdmin from './Components/Login/RequireAdmin';
import AddTool from './Components/Dashboard/AddTool';
import ManageAllOrders from './Components/Dashboard/ManageAllOrders';
import ManageTool from './Components/Dashboard/ManageTool';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/tools/:id' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<Orders></Orders>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="users" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
          <Route path="addTool" element={<RequireAdmin><AddTool></AddTool></RequireAdmin>}></Route>
          <Route path="manageAllOrders" element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
          <Route path="manageTools" element={<RequireAdmin><ManageTool></ManageTool></RequireAdmin>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
