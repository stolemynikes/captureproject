import {React} from '../../imports/reactimports'

//Routing
import {Link} from 'react-router-dom';

//Styled Components
import styled from 'styled-components'

const Nav = () => {
    return(
        
        <Navbar>

           <h1>

                <Link id='logo' to='/'>Capture</Link>

           </h1>

                <ul>

                    <li>

                        <Link to='/'>About Us</Link>

                    </li>

                    <li>

                        <Link to='/work'>Our Work</Link>

                    </li>

                    <li>

                        <Link to='/contact'>Contact Us</Link>

                    </li>

                </ul>  

        </Navbar>

    )
}

const Navbar = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;

    a {
        color: white;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;
    }

    #logo {
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }

    li {
        padding-left: 10rem;
        position: relative;
    }
`

export default Nav;