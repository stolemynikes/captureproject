import {React} from '../imports/reactimports';

//styled components
import styled from 'styled-components';

//react routing
import { Link } from 'react-router-dom';

//Images Import
import athlete from '../assets/images/athlete-small.png'
import goodtimes from '../assets/images/goodtimes-small.png'
import theracer from '../assets/images/theracer-small.png'

const OurWork = () => {
    return(

            <Work>

                <Movie>

                    <h2>The Athlete</h2>
                    <div className="line"></div>

                    <Link to='/'>
                        <img src={athlete} alt="Athlete" />
                    </Link>

                </Movie>

                <Movie>

                    <h2>The Racer</h2>
                    <div className="line"></div>

                    <Link to='/'>
                        <img src={theracer} alt="The Racer" />
                    </Link>

                </Movie>

                <Movie>

                    <h2>Good Times</h2>
                    <div className="line"></div>

                    <Link to='/'>
                        <img src={goodtimes} alt="goodtimes"/>
                    </Link>

                </Movie>

            </Work>

    )
}

const Work =styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    h2 {
        padding: 1rem 0rem;
    }
`

const Movie = styled.div`
    padding-bottom: 10rem;

    .line {
        height: .5rem;
        background: #ccc;
        margin-bottom: 3rem;
    }
    
    img {
            
            width: 100%;
            height: 70vh;
            object-fit: cover;
        }
`

export default OurWork;