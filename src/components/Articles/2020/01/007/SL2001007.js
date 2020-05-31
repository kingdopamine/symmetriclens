import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-ymc-you-must-create-ss20-1.jpg';
import image2 from './symmetriclens-ymc-you-must-create-ss20-2.jpg';
import image3 from './symmetriclens-ymc-you-must-create-ss20-3.jpg';
import image4 from './symmetriclens-ymc-you-must-create-ss20-4.jpg';
import image5 from './symmetriclens-ymc-you-must-create-ss20-5.jpg';
import image6 from './symmetriclens-ymc-you-must-create-ss20-6.jpg';
import image7 from './symmetriclens-ymc-you-must-create-ss20-7.jpg';
import image8 from './symmetriclens-ymc-you-must-create-ss20-8.jpg';
import image9 from './symmetriclens-ymc-you-must-create-ss20-9.jpg';
import image10 from './symmetriclens-ymc-you-must-create-ss20-10.jpg';
import image11 from './symmetriclens-ymc-you-must-create-ss20-11.jpg';
import image12 from './symmetriclens-ymc-you-must-create-ss20-12.jpg';
import image13 from './symmetriclens-ymc-you-must-create-ss20-13.jpg';


//change class name
class SL2001007 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`YMC SS20 Lookbook`, //main page title
            subtitle:`Waxed cotton hunter parka`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13],
            article:(
                //main article
                <p><a href="/search?q=ymc">YMC</a> have released their Spring/Summer 2020 lookbook.

                <br/><br/>The collection features a lot of all over print  designs, and makes an extensive use of stripes and camouflage. 
                
                <br/><br/>A stand out piece is a Khaki-Green waxed cotton Hunter Parka, which retails at £350; one of the many classic silhouettes available in the collection 
                
                <br/><br/>See them in more detail on <a target="blank" href="https://www.youmustcreate.com/products/mens-new-arrivals/">YMC’s website</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>YMC SS20 Lookbook</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-01-30").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2001007;