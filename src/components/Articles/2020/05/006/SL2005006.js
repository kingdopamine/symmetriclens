import React from 'react';
import MetaTags from 'react-meta-tags';

import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-reebok-kohei-okita-eightyone-1.jpg';
import image2 from './symmetriclens-reebok-kohei-okita-eightyone-2.jpg';
import image3 from './symmetriclens-reebok-kohei-okita-eightyone-3.jpg';
import image4 from './symmetriclens-reebok-kohei-okita-eightyone-4.jpg';
import image5 from './symmetriclens-reebok-kohei-okita-eightyone-5.jpg';
import image6 from './symmetriclens-reebok-kohei-okita-eightyone-6.jpg';
import image7 from './symmetriclens-reebok-kohei-okita-eightyone-7.jpg';
import image8 from './symmetriclens-reebok-kohei-okita-eightyone-8.jpg';
import image9 from './symmetriclens-reebok-kohei-okita-eightyone-9.jpg';
import image10 from './symmetriclens-reebok-kohei-okita-eightyone-10.jpg';
import image11 from './symmetriclens-reebok-kohei-okita-eightyone-11.jpg';
import image12 from './symmetriclens-reebok-kohei-okita-eightyone-12.jpg';
import image13 from './symmetriclens-reebok-kohei-okita-eightyone-13.jpg';



//change class name
class SL2005006 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Reebok x Kohei Okita, second drop for the "Reebok eightyone" collection`, //main page title
            subtitle:`Distintcly urban aesthetic`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13],
            article:(
                //main article
                <p>The second instalment in the ‘Reebok eightyone’ collection between Vainl Archive’s Kohei Okita and Reebok has now launched.

                <br/><br/>Featuring two colour schemes for the iconic Instapump Fury silhouette, and a full range of unisex clothing
                
                <br/><br/>The sneaker colourways consist mainly of beige, brown, grey, navy, and black; constructed with materials and textures that give them a distinctly urban aesthetic. 
                
                <br/><br/>Available to purchase from <a href="https://www.reebok.co.uk/search?q=eightyone">Reebok’s website</a> from the 8th of May</p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Reebok x Kohei Okita, 'Reebok eightone' drop 2</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-05-05").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2005006;