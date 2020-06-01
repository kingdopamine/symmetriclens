import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-a-cold-wall-ss20-outerwear-jackets-1.jpg';
import image2 from './symmetriclens-a-cold-wall-ss20-outerwear-jackets-2.jpg';
import image3 from './symmetriclens-a-cold-wall-ss20-outerwear-jackets-3.jpg';
import image4 from './symmetriclens-a-cold-wall-ss20-outerwear-jackets-4.jpg';
import image5 from './symmetriclens-a-cold-wall-ss20-outerwear-jackets-5.jpg';
import image6 from './symmetriclens-a-cold-wall-ss20-outerwear-jackets-6.jpg';
import image7 from './symmetriclens-a-cold-wall-ss20-outerwear-jackets-7.jpg';
import image8 from './symmetriclens-a-cold-wall-ss20-outerwear-jackets-8.jpg';
import image9 from './symmetriclens-a-cold-wall-ss20-outerwear-jackets-9.jpg';


//change class name
class SL2005009 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`A-COLD-WALL* SS20 Jacket collection`, //main page title
            subtitle:`Detachable Compass`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9],
            article:(
                //main article
                <p><a href="/search?q=a+cold+wall">A-COLD-WALL*</a> have dropped 3 new outerwear jackets for Spring Summer 2020.

                <br/><br/>The treated M65; a nylon navy coloured drawcord pocket field jacket. Selling for £390, it features two bellowing flap pockets for the chest, concealed zip fastening, and epaulets. 
                <br/>Alternatively, another similar jacket is available in a khaki-beige colour, featuring external chest pockets with no logo or graphic on the back.
                
                <br/><br/>Finally is the Compass Storm Jacket; a black nylon two layered water resistant hooded jacket. It features a removable compass on the left arm, concealed chest pockets hidden beneath storm flaps, and zip-hiding rain-deflecting front yoke.
                
                <br/><br/>Available now from <a target="blank" href="https://a-cold-wall.com/collections/outerwear">their web store</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>A-COLD-WALL* SS20 Jacket collection</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-05-27").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2005009;