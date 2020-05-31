import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-a-cold-wall-ss20-trainers-1.jpg';
import image2 from './symmetriclens-a-cold-wall-ss20-trainers-2.jpg';
import image3 from './symmetriclens-a-cold-wall-ss20-trainers-3.jpg';
import image4 from './symmetriclens-a-cold-wall-ss20-trainers-4.jpg';


//change class name
class SL2002013 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`A-COLD-WALL* SS20 Trainers`, //main page title
            subtitle:`Named after the french architect Charles-Édouard Jeanneret`, //subtitle
            images:[image1,image2,image3,image4],
            article:(
                //main article
                <p><a href="/search?q=a+cold+wall">A-COLD-WALL*</a> have a new sneaker design for SS20

                <br/><br/>This leather and suede panel contrasting hi top sneaker features an adjustable velcro strap, a laser-etched logo on the back of the midsole, and cushioned heel.
                
                <br/><br/>Called the Corbusier Hi (named after the french architect Charles-Édouard Jeanneret), the colour scheme is much more shades of grey than vibrant colours, with its white leather, grey suede, very low saturation blue & cyan leather panels, and black interior
                
                <br/><br/>Selling for £330 from the <a target="blank" href="https://a-cold-wall.com/collections/footwear/products/acwuf004whl-gry">A-COLD-WALL* website</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>A-COLD-WALL* SS20 Trainers</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-02-25").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2002013;