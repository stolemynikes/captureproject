import {React} from '../../imports/reactimports';

//Import Images
import home1 from '../../assets/images/home1.png';

//Styled
import {About, Description, Image, Hide} from '../../styles'

const AboutSection = () => {
    return(

        <About>

            <Description>

                <div className="title">

                    <Hide>

                        <h2>We work to make</h2>

                    </Hide>

                    <Hide>

                        <h2>your <span>dreams</span> come</h2>

                    </Hide>

                    <Hide>

                        <h2>true.</h2>

                    </Hide>

                </div>

                <p>Contact us for any photography or videography ideas that you have. We have professionalswith amazing skills.</p>

                <button>Contact us</button>

            </Description>

            <Image>

                <img src={home1} alt="Guy with a camera" />

            </Image>
        
        </About>

    )
}

export default AboutSection;