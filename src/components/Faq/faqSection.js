import { React, useState} from '../../imports/reactimports';

//Import components
import {Toggle, useScroll} from '../../imports/componentimports';

//Styled Components
import styled from 'styled-components';
import {About} from '../../styles';

//Framer Motion
import { AnimateSharedLayout } from 'framer-motion';
import { scrollReveal } from '../../animation';


const FaqSection = () => {

    const [element, controls] = useScroll();

    return(

        <Faq variants={scrollReveal} ref={element} initial='hidden' animate={controls}> 

            <h2>Any Questions? <span>FAQ</span></h2>

            <AnimateSharedLayout>

                <Toggle title='How do I start?'>

                    <div className="answer">       

                        <p>Lorem ipsum dolor sit amet.</p> 

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt alias saepe nostrum ratione eum error, sit vero aspernatur perferendis. Odio?</p>
                    
                    </div>

                </Toggle>

                <Toggle title='Daily schedule'>

                    <div className="answer">       

                        <p>Lorem ipsum dolor sit amet.</p> 

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt alias saepe nostrum ratione eum error, sit vero aspernatur perferendis. Odio?</p>

                    </div>

                </Toggle>

                <Toggle title='Different payment methods'>

                    <div className="answer">       

                        <p>Lorem ipsum dolor sit amet.</p> 

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt alias saepe nostrum ratione eum error, sit vero aspernatur perferendis. Odio?</p>
                    
                    </div>

                </Toggle>

                <Toggle title='What produc do you offer?'>

                    <div className="answer">       

                        <p>Lorem ipsum dolor sit amet.</p> 

                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt alias saepe nostrum ratione eum error, sit vero aspernatur perferendis. Odio?</p>
                    
                    </div>

                </Toggle>

            </AnimateSharedLayout>




        </Faq>

    )
}

//Styled Components
const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }

    .question {
        padding: 3rem 0rem;
        cursor: pointer;

    }

    .answer  {
        padding: 2rem 0rem;

        p {
           padding: 1rem 0rem;
        }
    }
`


export default FaqSection;