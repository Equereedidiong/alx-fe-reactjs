import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import { BrowseRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'

function App () {
return (
<Router>
   <Routes>
    
       <Route path="/" element={<Home />} />
       <Route path="/About" element={<About />} />
       <Route path="/Services" element={<Services />} />
       <Route path="/Contact" element={<Contact />} />

    </Routes>
</Router>

)

}
// const router = createBrowserRouter ([
//     {
//         path: "/",
//         Component: "HomePage",
//     },

//     {
//         path: "/About",
//         Component: "About",
//     },

//     {
//         path: "/Services",
//         Component: "Services",
//     },

//     {
//         path: "/Contact",
//         Component: "Contact",
//     },

// ])

