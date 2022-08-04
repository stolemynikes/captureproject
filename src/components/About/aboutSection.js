import {React} from '../../imports/reactimports';

//Import Images
import home1 from '../../assets/images/home1.png';

//Styled
import {About, Description, Image, Hide} from '../../styles'

//Framer Motion
import {motion} from 'framer-motion';

const AboutSection = () => {

    return(

        <About>

            <Description>

                <motion.div className="title" >

                    <Hide>

                        <motion.h2>
                            We work to make
                        </motion.h2>

                    </Hide>

                    <Hide>

                        <motion.h2>
                            your <span>dreams</span> come
                        </motion.h2>

                    </Hide>

                    <Hide>

                        <motion.h2>
                            true.
                        </motion.h2>

                    </Hide>

                </motion.div>

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