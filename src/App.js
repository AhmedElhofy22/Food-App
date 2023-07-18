import React , { Fragment } from 'react';
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './App.css';
import Cart from './Components/Cart/Cart';
import Drinks from './Components/Drinks/Drinks';
import Home from './Components/Layout/Home';
import Login from './Components/Login/Login';
import Meals from './Components/Meals/Meals';
import Welcome from './Components/Welcome/Welcome';
import CartContextProvider from './Store/CartContext';
import SignUp from './Components/Login/Signup';

const router = createBrowserRouter([
  {path: '/', element: <Welcome/> },
  {path:'/login', element:<Login/>},
  {path:'/register',element:<SignUp/>},
  {path:'*', element:<h1>Page Not Found</h1>},
  {
    path:'/home',
    element:<Home/>,
    children:[
        
        {path:'/home/meals', element:<Meals/>},
        {path:'/home/drinks', element:<Drinks/>}
      ]
    
  },
  {path:'/cart', element:<Cart/>},
])


const App = () => {
  return(
    <CartContextProvider>
      <RouterProvider router={router}/>
    </CartContextProvider>
    
 )
}
 export default App;