import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-paul-smith-red-ear-ss20-1.jpg';
import image2 from './symmetriclens-paul-smith-red-ear-ss20-2.jpg';
import image3 from './symmetriclens-paul-smith-red-ear-ss20-3.jpg';
import image4 from './symmetriclens-paul-smith-red-ear-ss20-4.jpg';
import image5 from './symmetriclens-paul-smith-red-ear-ss20-5.jpg';
import image6 from './symmetriclens-paul-smith-red-ear-ss20-6.jpg';
import image7 from './symmetriclens-paul-smith-red-ear-ss20-7.jpg';
import image8 from './symmetriclens-paul-smith-red-ear-ss20-8.jpg';
import image9 from './symmetriclens-paul-smith-red-ear-ss20-9.jpg';


//change class name
class SL2003006 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Paul Smith Red Ear SS20 collection release`, //main page title
            subtitle:`Japanese craftsmanship`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9],
            article:(
                //main article
                <p><a href="/search?q=paul+smith">Paul Smith</a>’s Red Ear label's SS2020 collection has been released. 
                <br/>Designed and made in Japan, the red ear label focuses on the craftsmanship the country is renowned for. 
                
                <br/><br/>The main colour theme through out the collection is khaki and indigo, with the most expensive item in the collection (at £450) being an Indigo Jacquard-Stripe Mac, the collection also includes shorts to match, an indigo denim jacket, a khaki fishtail parka, a khaki cropped coach jacket, khaki trousers, a striped khaki kimono field jacket with matching trousers, a cut-up panel indigo shirt, and many more amazing items along this theme
                
                <br/><br/>You can check them all out or purchase from Paul Smith’s <a href="https://www.paulsmith.com/uk/mens/ps-red-ear" target="blank">website</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Paul Smith Red Ear SS20</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-03-16").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2003006;