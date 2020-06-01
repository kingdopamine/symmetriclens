import React from 'react';

import './Contact.css';

import logo from '../../symmetriclens-logo copy.jpg'

class Contact extends React.Component {
    

    render(){
        return (

            <div>
                <a href="mailto:office@symmetriclens.com"><h2 id="clicktoemail">Click to email...</h2></a>
                <a href="mailto:office@symmetriclens.com"><img src={logo} id="contactemaillogo" alt="symmetriclens logo"/></a>
                
            </div>

        )
    }


}

export default Contact;