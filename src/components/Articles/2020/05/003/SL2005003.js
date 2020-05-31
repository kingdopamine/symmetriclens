import React from 'react';
import MetaTags from 'react-meta-tags';

import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-reebok-classics-victoria-beckham-11.jpg';
import image2 from './symmetriclens-reebok-classics-victoria-beckham-1.jpg';
import image3 from './symmetriclens-reebok-classics-victoria-beckham-2.jpg';
import image4 from './symmetriclens-reebok-classics-victoria-beckham-3.jpg';
import image5 from './symmetriclens-reebok-classics-victoria-beckham-4.jpg';
import image6 from './symmetriclens-reebok-classics-victoria-beckham-5.jpg';
import image7 from './symmetriclens-reebok-classics-victoria-beckham-6.jpg';
import image8 from './symmetriclens-reebok-classics-victoria-beckham-7.jpg';
import image9 from './symmetriclens-reebok-classics-victoria-beckham-8.jpg';
import image10 from './symmetriclens-reebok-classics-victoria-beckham-9.jpg';
import image11 from './symmetriclens-reebok-classics-victoria-beckham-10.jpg';



//change class name
class SL2005003 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`A new Reebok Classic inspired release in collaboration with Victoria Beckham`, //main page title
            subtitle:`Premium leather uppers`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11],
            article:(
                //main article
                <p><a href="/search?q=victoria+beckham">Victoria Beckham</a> x <a href="/search?q=reebok">Reebok</a> have released a new sneaker today called the ‘Dual Court Mid II’.<br/>
                Inspired by Reebok’s retro ‘80s/90’s basketball silhouettes, this mid-cut style, with premium tumbled leather uppers are
                available in five different colour schemes (White, Blue x Acid Blue, Silver Metallic x White, Black x White, and VB Beige Stone), and retail for £199.<br/>
                Available for purchase from the <a href="https://www.reebok.co.uk/vb-dual-court-mid-ii-shoes/FW3077.html" target="blank">Reebok web-store</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Reebok x Victoria Beckham retro-inspired sneaker</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-05-05").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2005003;