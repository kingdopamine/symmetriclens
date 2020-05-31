import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-maharishi-andy-warhol-foundation-tate-modern-1.jpg';
import image2 from './symmetriclens-maharishi-andy-warhol-foundation-tate-modern-2.jpg';
import image3 from './symmetriclens-maharishi-andy-warhol-foundation-tate-modern-3.jpg';
import image4 from './symmetriclens-maharishi-andy-warhol-foundation-tate-modern-4.jpg';
import image5 from './symmetriclens-maharishi-andy-warhol-foundation-tate-modern-5.jpg';
import image6 from './symmetriclens-maharishi-andy-warhol-foundation-tate-modern-6.jpg';
import image7 from './symmetriclens-maharishi-andy-warhol-foundation-tate-modern-7.jpg';
import image8 from './symmetriclens-maharishi-andy-warhol-foundation-tate-modern-8.jpg';
import image9 from './symmetriclens-maharishi-andy-warhol-foundation-tate-modern-9.jpg';
import image10 from './symmetriclens-maharishi-andy-warhol-foundation-tate-modern-10.jpg';
import image11 from './symmetriclens-maharishi-andy-warhol-foundation-tate-modern-11.jpg';
import image12 from './symmetriclens-maharishi-andy-warhol-foundation-tate-modern-12.jpg';
import image13 from './symmetriclens-maharishi-andy-warhol-foundation-tate-modern-13.jpg';
import image14 from './symmetriclens-maharishi-andy-warhol-foundation-tate-modern-14.jpg';

//change class name
class SL2003004 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Maharishi x Andy Warhol Foundation x Tate Modern`, //main page title
            subtitle:`Focusing on Warhols 1976 Skull series`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14],
            article:(
                //main article
                <p><a href="/search?q=maharishi">Maharishi</a>, <a href="/search?q=tate+modern">Tate Modern</a>, and <a href="/search?q=andy+warhol">The Andy Warhol Foundation</a> have come together to create a capsule collection of garments in celebration of the Andy Warhol exhibit taking place at the Tate Modern this summer.

                <br/><br/>The collection focuses on Andy Warhols 1976 series on skulls, featuring a stadium jacket intricately embroidered with this iconic artwork, as well as screen printed Original Snopants, with each each leg (front and back) depicting a different art work from the series
                
                <br/><br/>The Stadium jacket is made from organic cotton twill, selling for £375, and the Snopants made from Italian Poplin, selling for £285
                
                <br/><br/> They can be purched from Maharishi's <a href="https://www.maharishistore.com/products/8681-andy-warhol-tate-jacket/Black" target="blank">website</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Maharishi x Andy Warhol Foundation x Tate Modern</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-03-18").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2003004;