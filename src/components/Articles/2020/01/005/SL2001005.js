import React from 'react';
import MetaTags from 'react-meta-tags';

import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-maharishi-year-of-the-rat-1.jpg';
import image2 from './symmetriclens-maharishi-year-of-the-rat-2.jpg';
import image3 from './symmetriclens-maharishi-year-of-the-rat-3.jpg';
import image4 from './symmetriclens-maharishi-year-of-the-rat-4.jpg';
import image5 from './symmetriclens-maharishi-year-of-the-rat-5.jpg';
import image6 from './symmetriclens-maharishi-year-of-the-rat-6.jpg';

//change class name
class SL2001005 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Maharishi: Year of the Rat collection`, //main page title
            subtitle:`A creature well-respected in the East for its skill and resourcefulness, as one of nature’s greatest survivors`, //subtitle
            images:[image1,image2,image3,image4,image5,image6],
            article:(
                //main article
                <p><a href="/search?q=maharishi">Maharishi</a> celebrates the Chinese new year of the rat with a new capsule collection.

                <br/><br/>Featuring a woodblock-inspired embroidered Stadium Jacket, Tour shirt, and Trackpants, the collection will be available this Friday from <a target="blank" href="https://www.maharishistore.com/products/8610-year-of-the-rat-tour-shirt/Maha%20Olive">Maharishi online</a> and in-store. 
                
                <br/><br/>The collection also include graphic t-shirts, and a Japanese Twill Cupro bandana</p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Maharishi: Year of the Rat</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-01-15").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2001005;