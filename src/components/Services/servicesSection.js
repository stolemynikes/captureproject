import { React } from '../../imports/reactimports';

//Import Icons
import clock from '../../assets/images/clock.svg';
import diaphragm from '../../assets/images/diaphragm.svg';
import money from '../../assets/images/money.svg';
import teamwork from '../../assets/images/teamwork.svg';

//Import Images
import home2 from '../../assets/images/home2.png';

//Styled components
import styled from 'styled-components';
import {About, Description, Image} from '../../styles'



const ServicesSection = () => {
    return( 
        
        <Services>

            <Description>

                <h2>High <span>quality</span> services</h2>

                <Cards>

                    <Card>

                        <div className="icon">

                            <img src={clock} alt="icon" />
                            <h3>Efficient</h3>

                        </div>

                        <p>Lorem ipsum dolor sit amet.</p>

                    </Card>

                    <Card>

                    <div className="icon">

                        <img src={teamwork} alt="icon" />
                        <h3>Teamwork</h3>

                    </div>

                    <p>Lorem ipsum dolor sit amet.</p>

                    </Card>


                    <Card>

                        <div className="icon">

                            <img src={diaphragm} alt="icon" />
                            <h3>Diaphragm</h3>

                        </div>

                        <p>Lorem ipsum dolor sit amet.</p>

                    </Card>


                    <Card>

                        <div className="icon">

                            <img src={money} alt="icon"/>
                            <h3>Affordable</h3>

                        </div>

                    <p>Lorem ipsum dolor sit amet.</p>

                    </Card>

                </Cards>

            </Description>

            <Image>

                <img src={home2} alt="Home" />

            </Image>

        </Services>

    )
}

//Styled Components
const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Card = styled.div`
    flex-basis: 20rem;

    .icon {
        display: flex;
        align-items: center;

        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`

export default ServicesSection;