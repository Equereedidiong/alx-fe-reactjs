import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import { createBrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'


const router = createBrowserRouter ([
    {
        path: "/",
        Component: "HomePage",
    },

    {
        path: "/About",
        Component: "About",
    },

    {
        path: "/Services",
        Component: "Services",
    },

    {
        path: "/Contact",
        Component: "Contact",
    },

])

