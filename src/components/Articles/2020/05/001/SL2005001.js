import React from 'react';
import MetaTags from 'react-meta-tags';

import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-supreme-barbour-1.jpg';
import image2 from './symmetriclens-supreme-barbour-2.jpg';
import image3 from './symmetriclens-supreme-barbour-3.jpg';
import image4 from './symmetriclens-supreme-barbour-4.jpg';
import image5 from './symmetriclens-supreme-barbour-5.jpg';
import image6 from './symmetriclens-supreme-barbour-6.jpg';
import image7 from './symmetriclens-supreme-barbour-7.jpg';
import image8 from './symmetriclens-supreme-barbour-8.jpg';
import image9 from './symmetriclens-supreme-barbour-9.jpg';
import image10 from './symmetriclens-supreme-barbour-10.jpg';
import image11 from './symmetriclens-supreme-barbour-11.jpg';
import image12 from './symmetriclens-supreme-barbour-12.jpg';
import image13 from './symmetriclens-supreme-barbour-13.jpg';
import image14 from './symmetriclens-supreme-barbour-14.jpg';
import image15 from './symmetriclens-supreme-barbour-15.jpg';
import image16 from './symmetriclens-supreme-barbour-16.jpg';
import image17 from './symmetriclens-supreme-barbour-17.jpg';
import image18 from './symmetriclens-supreme-barbour-18.jpg';


//change class name
class SL2005001 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Barbour x Supreme Spring 2020 capsule collection`, //main page title
            subtitle:`Featuring barbour's iconic waxed cotton jackets`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16,image17,image18],
            article:(
                //main article
                <p><a href="/search?q=barbour">Barbour</a> and <a href="/search?q=supreme">Supreme</a> have come together for a new capsule collection. With Barbour being well known for their iconic waxed cotton jackets, it is no surprise that this collection will feature three of them. Each being in a different colour scheme (black, bright orange, and leopard), as seen modelled by Blondey McCoy, the collection will also feature waist bags, crusher hats, and camp caps in the same colour scheme to perfectly compliment each jacket.

                <br/><br/>This Spring 2020 collection will only be available to be purchased online through <a href="https://www.supremenewyork.com/shop" target="blank">Supreme’s web-store</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Supreme x Barbour Spring 2020 collection </title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-05-04").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2005001;