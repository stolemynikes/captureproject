import {React} from '../imports/reactimports';

//Import Page Components
import { AboutSection, ServicesSection, FaqSection } from '../imports/componentimports';

//Import Animations
import {motion} from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutUs = () => {
    return(

          <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>

            <AboutSection/>
            <ServicesSection/>
            <FaqSection/>

          </motion.div>

    )
}

export default AboutUs;