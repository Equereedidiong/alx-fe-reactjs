import {NavLink} from react-router-dom 



function Navbar () {

    return (
        <div style = {{ backgroundColor: 'grey', display: "flex", justifyContent: "center"}}>

            <NavLink to = "/"> Home </NavLink>  
            <NavLink to = "/About"> About Page </NavLink>  
            <NavLink to = "/Contact"> Contact </NavLink>  
            <NavLink to = "/Services"> Services </NavLink>  

        </div>
    )
}