import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-ambush-matchesfashion-ss20-1.jpg';
import image2 from './symmetriclens-ambush-matchesfashion-ss20-2.jpg';
import image3 from './symmetriclens-ambush-matchesfashion-ss20-3.jpg';
import image4 from './symmetriclens-ambush-matchesfashion-ss20-4.jpg';
import image5 from './symmetriclens-ambush-matchesfashion-ss20-5.jpg';
import image6 from './symmetriclens-ambush-matchesfashion-ss20-6.jpg';
import image7 from './symmetriclens-ambush-matchesfashion-ss20-7.jpg';
import image8 from './symmetriclens-ambush-matchesfashion-ss20-8.jpg';
import image9 from './symmetriclens-ambush-matchesfashion-ss20-9.jpg';
import image10 from './symmetriclens-ambush-matchesfashion-ss20-10.jpg';
import image11 from './symmetriclens-ambush-matchesfashion-ss20-11.jpg';
import image12 from './symmetriclens-ambush-matchesfashion-ss20-12.jpg';
import image13 from './symmetriclens-ambush-matchesfashion-ss20-13.jpg';


//change class name
class SL2001011 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`MATCHESFASHION x AMBUSH: exclusive capsule`, //main page title
            subtitle:`Bold gradient colours`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13],
            article:(
                //main article
                <p>Japanese jewellery-turned-streetwear label <a href="/search?q=ambush">Ambush</a> has come together with <a href="/search?q=matchesfashion">MATCHESFASHION</a> for a new capsule.

                <br/><br/>Making a very interesting use of gradient colours, this capsule is a lot less ornamented than AMBUSH’s SS20 collection.
                
                <br/><br/>A stand out piece is the oversized cotton-canvas jacket; in a vibrant orange, it come with a stowaway hood, zipped pockets, and a back rain flap with central opening. Available <a target="blank" href="https://www.matchesfashion.com/mens/designers/ambush">exclusively from MATCHESFASHION</a> for £1065</p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>MATCHESFASHION x AMBUSH</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-01-09").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2001011;