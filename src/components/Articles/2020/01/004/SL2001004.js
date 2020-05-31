import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-maharishi-nike-air-max-720-1.jpg';
import image2 from './symmetriclens-maharishi-nike-air-max-720-2.jpg';
import image3 from './symmetriclens-maharishi-nike-air-max-720-3.jpg';
import image4 from './symmetriclens-maharishi-nike-air-max-720-4.jpg';
import image5 from './symmetriclens-maharishi-nike-air-max-720-5.jpg';
import image6 from './symmetriclens-maharishi-nike-air-max-720-6.jpg';
import image7 from './symmetriclens-maharishi-nike-air-max-720-7.jpg';
import image8 from './symmetriclens-maharishi-nike-air-max-720-8.jpg';
import image9 from './symmetriclens-maharishi-nike-air-max-720-9.jpg';
import image10 from './symmetriclens-maharishi-nike-air-max-720-10.jpg';
import image11 from './symmetriclens-maharishi-nike-air-max-720-11.jpg';


//change class name
class SL2001004 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Maharishi x Nike: Air Max 720`, //main page title
            subtitle:`Nike By You`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11],
            article:(
                //main article
                <p><a href="/search?q=maharishi">Maharishi</a> reunites with <a href="/search?q=nike">Nike</a> to bring you a new take on the Air Max 720. 
                <br/>The concept of this design is to celebrate the merger of technology and nature.
                
                <br/><br/>The trainers feature Maharishi’s distinct Leopard camouflage available in several colour schemes; Leopard in Woodland, Heat, Moss, Desert, and Noble Red.
                
                <br/><br/>Available through the Nike By You platform, there are many more available customisation choices to allow you to really exercise self-expression. Retailing for £180, you can purchase through <a target="blank" href="http://nikebyyou.nike.com/maharishibyyou">Nike’s website</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Maharishi x Nike: Air Max 720</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-01-28").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2001004;