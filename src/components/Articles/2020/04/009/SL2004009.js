import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-asymmetric-hoodie-jersey-collection-0.jpg';
import image2 from './symmetriclens-asymmetric-hoodie-jersey-collection-1.jpg';
import image3 from './symmetriclens-asymmetric-hoodie-jersey-collection-2.jpg';
import image4 from './symmetriclens-asymmetric-hoodie-jersey-collection-3.jpg';
import image5 from './symmetriclens-asymmetric-hoodie-jersey-collection-4.jpg';
import image6 from './symmetriclens-asymmetric-hoodie-jersey-collection-5.jpg';
import image7 from './symmetriclens-asymmetric-hoodie-jersey-collection-6.jpg';
import image8 from './symmetriclens-asymmetric-hoodie-jersey-collection-7.jpg';
import image9 from './symmetriclens-asymmetric-hoodie-jersey-collection-8.jpg';
import image10 from './symmetriclens-asymmetric-hoodie-jersey-collection-9.jpg';
import image11 from './symmetriclens-asymmetric-hoodie-jersey-collection-10.jpg';
import image12 from './symmetriclens-asymmetric-hoodie-jersey-collection-11.jpg';

//change class name
class SL2004009 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`A-COLD-WALL* Asymmetric hoodie and jersey collection`, //main page title
            subtitle:`Hand-applied brush stroke bleach effect`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12],
            article:(
                //main article
                <p><a href="/search?q=a+cold+wall">A-COLD-WALL*</a>’s Spring Summer 2020 Jersey collection and asymmetric hoodie is now available. 
                <br/>It features 3 ‘Erosion’ pieces; 1 black long sleeve, and 2 short sleeve (1 in black, 1 in crimson red). They all feature a beautiful hand-applied brush stroke bleach effect, and are made with 210GSM cotton jersey.
                
                <br/><br/>The asymmetric hoodie has a curved cutaway detailing at the hem, giving it a very unique look retailing for £425

                <br/><br/>Available now from their <a href="https://a-cold-wall.com/collections/jersey/" target="blank">website</a></p>
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>A-COLD-WALL* Asymmetric hoodie and Jersey collection</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-04-21").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2004009;