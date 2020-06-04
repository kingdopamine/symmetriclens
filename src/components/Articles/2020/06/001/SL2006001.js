import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-nigel-cabourn-tretorn-ss20-1.jpg';
import image2 from './symmetriclens-nigel-cabourn-tretorn-ss20-2.jpg';
import image3 from './symmetriclens-nigel-cabourn-tretorn-ss20-3.jpg';
import image4 from './symmetriclens-nigel-cabourn-tretorn-ss20-4.jpg';
import image5 from './symmetriclens-nigel-cabourn-tretorn-ss20-5.jpg';
import image6 from './symmetriclens-nigel-cabourn-tretorn-ss20-6.jpg';
import image7 from './symmetriclens-nigel-cabourn-tretorn-ss20-7.jpg';


//change class name
class SL2006001 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Nigel Cabourn x Tretorn Spring Summer 2020 capsule`, //main page title
            subtitle:`100% Organic Ventile`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7],
            article:(
                //main article
                <p><a href="/search?q=nigel+cabourn">Nigel Cabourn</a> has come together with (1891 founded Swedish brand) <a href="/search?q=tretorn">Tretorn</a> to bring you a capsule for SS20.

                <br/><br/>The collection features a 70’s retro style Sarek jacket made from 100% organic Ventile giving the jacket a light, comfortable, and airy feel whilst also remaining highly water repellent. Available for £432 approx.
                
                <br/><br/>Also included in the capsule are a pair of Sarek Sneakers; although inspired by two iconic 60’s Tretorn sneaker designs, the Sarek Sneakers are more chunkier, and have exclusive trims. Handmade from Ventile with a vulcanised outsole, the left shoe has a red inner sole, whilst the right shoe’s is green
                
                <br/><br/>Finally is the Sarek Ruck Sack, inspired by 70’s vintage hiking rucksacks. With zipped bottom compartment and multiple clever pockets, also made from organic Ventile, this rucksack is ideal for urban commuting and short hiking. 
                
                <br/><br/>Available <a target="blank" href="https://eu.tretorn.com/women/collaborations/nigel-cabourn">online now from Tretorn</a> </p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Nigel Cabourn x Tretorn SS20</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-06-04").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2006001;