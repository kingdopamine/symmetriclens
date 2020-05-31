import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-maharishi-ss20-1.jpg';
import image2 from './symmetriclens-maharishi-ss20-2.jpg';
import image3 from './symmetriclens-maharishi-ss20-3.jpg';
import image4 from './symmetriclens-maharishi-ss20-4.jpg';
import image5 from './symmetriclens-maharishi-ss20-5.jpg';
import image6 from './symmetriclens-maharishi-ss20-6.jpg';
import image7 from './symmetriclens-maharishi-ss20-7.jpg';
import image8 from './symmetriclens-maharishi-ss20-8.jpg';
import image9 from './symmetriclens-maharishi-ss20-9.jpg';
import image10 from './symmetriclens-maharishi-ss20-10.jpg';
import image11 from './symmetriclens-maharishi-ss20-11.jpg';
import image12 from './symmetriclens-maharishi-ss20-12.jpg';
import image13 from './symmetriclens-maharishi-ss20-13.jpg';


//change class name
class SL2002009 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Maharishi Spring Summer 2020`, //main page title
            subtitle:`2020 viewed from the 90’s`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13],
            article:(
                //main article
                <p>The theme behind <a href="/search?q=maharishi">Maharishi</a> Spring Summer 2020 is a reflection on how this year was perceived in the 90’s, a time around the birth of Maharishi

                <br/><br/>Utilising a colour palette inspired by (World War II reconnaissance and raiding unit) the Long Range Desert Group, Maharishi makes extensive use of Aurora Olive, and Pink Panther in this collection
                
                <br/><br/>Core to Maharishi’s principles is their use of sustainable fabrics and methods of production, which has been continued more specifically with natural vegetable-dying techniques across water-resistant mesh, Japanese eco-cupro twill sourced from cotton waste, and recycled nylon. Also featured is a lot of organic cotton and natural hemp fabrics, as well as custom weave handloom Ikat to emulate Strichtarn rain camouflage 
                
                <br/><br/>View the full collection on <a target="blank" href="https://www.maharishistore.com/collections/man/new-arrivals">Maharishi’s website</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Maharishi SS20 collection</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-02-17").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2002009;