import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-a-cold-wall-retrosuperfuture-sunglasses-1.jpg';
import image2 from './symmetriclens-a-cold-wall-retrosuperfuture-sunglasses-2.jpg';
import image3 from './symmetriclens-a-cold-wall-retrosuperfuture-sunglasses-3.jpg';
import image4 from './symmetriclens-a-cold-wall-retrosuperfuture-sunglasses-4.jpg';
import image5 from './symmetriclens-a-cold-wall-retrosuperfuture-sunglasses-5.jpg';


//change class name
class SL2003001 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`A-COLD-WALL* x RETROSUPERFUTURE Sunglasses collaboration`, //main page title
            subtitle:`Marble and pebble matte Italian acetate`, //subtitle
            images:[image1,image2,image3,image4,image5],
            article:(
                //main article
                <p><a href="/search?q=a+cold+wall">A-COLD-WALL*</a> has collaborated with <a href="/search?q=retrosuperfuture">RETROSUPERFUTURE</a> to bring you this new sunglasses.

                <br/><br/>At £260, these geometric frames come in two materials; pebble matte Italian acetate, and, marble matte Italian acetate.
                
                <br/><br/>With blue 100% UV protection lenses, these sunnies come in a recycled leather case and can be purchased from the A-COLD-WALL* <a href="https://a-cold-wall.com/collections/a-cold-wall-retrosuperfuture" target="blank">web-store</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>A-COLD-WALL* x RETROSUPERFUTURE Sunglasses</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-03-20").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2003001;