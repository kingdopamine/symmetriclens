import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-barbour-engineered-garment-ss20-1.jpg';
import image2 from './symmetriclens-barbour-engineered-garment-ss20-2.jpg';
import image3 from './symmetriclens-barbour-engineered-garment-ss20-3.jpg';
import image4 from './symmetriclens-barbour-engineered-garment-ss20-4.jpg';
import image5 from './symmetriclens-barbour-engineered-garment-ss20-5.jpg';
import image6 from './symmetriclens-barbour-engineered-garment-ss20-6.jpg';


//change class name
class SL2002002 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Barbour x Engineered Garments SS20 Capsule collection`, //main page title
            subtitle:`Spring/Summer 2020`, //subtitle
            images:[image1,image2,image3,image4,image5,image6],
            article:(
                //main article
                <p><a href="/search?q=barbour">Barbour</a> and <a href="/search?q=engineered+garments">Engineered Garments</a> have come together to create a small capsule collection for Spring Summer 2020.

                <br/><br/>All jackets are either in navy, camo-green, military green, or khaki. Featuring several Anoraks, Blazers, and Parkas, which have been processed to give the jackets a vintage patina and oxidised metal hardware.
                
                <br/><br/>Within the collection is the Warby jacket, retailing at £399, it is based on the classic Barbour Longshoreman smock. Made shorter than the original, it is produced with 6oz waxed cotton, and features raglan sleeves, and an adjustable hood.
                
                <br/><br/>Check out the full collection in detail or purchase a piece from the collection <a href="https://www.barbour.com/uk/mens/collaborations/engineered-garments" target="blank">through Barbours website</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Barbour x Engineered Garments SS20</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-02-04").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2002002;