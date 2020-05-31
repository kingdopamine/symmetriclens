import React from 'react';
import MetaTags from 'react-meta-tags';

import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-maharishi-teach-yeah-year-of-the-rat-1.jpg';
import image2 from './symmetriclens-maharishi-teach-yeah-year-of-the-rat-2.jpg';
import image3 from './symmetriclens-maharishi-teach-yeah-year-of-the-rat-3.jpg';
import image4 from './symmetriclens-maharishi-teach-yeah-year-of-the-rat-4.jpg';
import image5 from './symmetriclens-maharishi-teach-yeah-year-of-the-rat-5.jpg';
import image6 from './symmetriclens-maharishi-teach-yeah-year-of-the-rat-6.jpg';
import image7 from './symmetriclens-maharishi-teach-yeah-year-of-the-rat-7.jpg';
import image8 from './symmetriclens-maharishi-teach-yeah-year-of-the-rat-8.jpg';
import image9 from './symmetriclens-maharishi-teach-yeah-year-of-the-rat-9.jpg';
import image10 from './symmetriclens-maharishi-teach-yeah-year-of-the-rat-10.jpg';
import image11 from './symmetriclens-maharishi-teach-yeah-year-of-the-rat-11.jpg';
import image12 from './symmetriclens-maharishi-teach-yeah-year-of-the-rat-12.jpg';

//change class name
class SL2005007 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Maharishi and Teach come together to celebrate the Year of the Rat`, //main page title
            subtitle:`Inspired by Apocalypse Now`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12],
            article:(
                //main article
                <p><a href="/search?q=maharishi">Maharishi</a> and (graffiti artist) <a href="/search?q=teach">Teach</a> come together again. Celebrating the Year of the Rat, they have released some t-shirts as well as some sculptures, hand-painted art works, and signed screen prints.

                <br/><br/>Teach’s signature ‘YE’ has been transformed into a rat-illustration, inspired by Dennis Hopper’s (who amazingly was born in the year of the rat) character in the iconic 1979 film ‘Apocalypse Now’
                
                <br/><br/>The ’9181 Teach Yeah of the Rat’ t-shirt comes in both black and white, with Teach’s artwork covering the tees in red. The fabric FairTrade Organic cotton; a much more environmentally friendly alternative to the common non-organic cotton. 
                
                <br/><br/> Available for purchase from the <a href="https://www.maharishistore.com/products/9181-teach-yor-organic-t-shirt/White" target="blank">Maharishi web-store</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Maharishi x Teach, Year of the Rat collection</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-05-07").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2005007;