import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-a-cold-wall-loungewear-1.jpg';
import image2 from './symmetriclens-a-cold-wall-loungewear-2.jpg';
import image3 from './symmetriclens-a-cold-wall-loungewear-3.jpg';
import image4 from './symmetriclens-a-cold-wall-loungewear-4.jpg';
import image5 from './symmetriclens-a-cold-wall-loungewear-5.jpg';
import image6 from './symmetriclens-a-cold-wall-loungewear-6.jpg';
import image7 from './symmetriclens-a-cold-wall-loungewear-7.jpg';
import image8 from './symmetriclens-a-cold-wall-loungewear-8.jpg';



//change class name
class SL2004002 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`A-COLD-WALL*’s new loungewear collection release`, //main page title
            subtitle:`Solarised Rust and Onyx Black`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8],
            article:(
                //main article
                <p><a href="/search?q=a+cold+wall">A-COLD-WALL*</a> is back with a new capsule of loungewear. <br/>
                All made from 100% cotton, the collection features 2 hoodies x pants sets; the first of which is in solarised rust caused by a vegetable-dye process, and the other in onyx black. <br/>
                All constructed for a relaxed cut, with the hoodies (featuring tonal front and rear logos) selling for £360 each, and the bottoms for £230, the collection is available to purchase from <a href="https://a-cold-wall.com/collections/jersey/" target="blank">their website</a> now <br/></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>A-COLD-WALL*’s new loungewear collection release</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-04-14").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2004002;