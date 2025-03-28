import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout.jsx';
import NotFound from './pages/NotFound.jsx';
import Home from './pages/Home.jsx';
import News from './pages/News.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import AddNews from './pages/AddNews.jsx';
import Banner from './pages/Banner.jsx';
import ReadMore from './pages/ReadMore.jsx';
import EditNews from './pages/EditNews.jsx';
import Dashboard from './pages/Dashboard.jsx';
import NewsStatistics from './pages/NewsStatistics.jsx';
import SubscriptionOverview from './pages/SubscriptionOverview.jsx';
import UserManagement from './pages/UserManagement.jsx';
import AuthProvider from './pages/Provider/AuthProvider.jsx';
import Login from './pages/LogIn.jsx';
import Register from './pages/Register.jsx';
import SeeUsers from './pages/SeeUsers.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/news'),
      },
      {
        path: '/news',
        element:<PrivateRoute><News></News></PrivateRoute>,
        loader: ()=> fetch('http://localhost:5000/news'),
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path:'/addnews',
        element: <PrivateRoute><AddNews></AddNews></PrivateRoute>
      },
      {
        path: '/bannar',
        element: <Banner></Banner>
      },
      {
        path: '/readmore/:id',
        element:<PrivateRoute><ReadMore></ReadMore></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`),
      },
      {
        path: '/edit/:id',
        element: <EditNews></EditNews>,
        loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`),
      },
      ,{
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path : '/newsStatistics',
        element: <NewsStatistics></NewsStatistics>
      },
      {
        path: '/subscription',
        element: <SubscriptionOverview></SubscriptionOverview>,

      },
      {
        path: '/usermanagement',
        element: <UserManagement></UserManagement>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/seeusers',
        element:<PrivateRoute> <SeeUsers></SeeUsers></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/newsUser')
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
  </StrictMode>,
)
