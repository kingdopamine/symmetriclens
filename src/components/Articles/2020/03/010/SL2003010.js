import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-craig-green-adidas-graddfa-akh-kamanda-1.jpg';
import image2 from './symmetriclens-craig-green-adidas-graddfa-akh-kamanda-2.jpg';
import image3 from './symmetriclens-craig-green-adidas-graddfa-akh-kamanda-3.jpg';
import image4 from './symmetriclens-craig-green-adidas-graddfa-akh-kamanda-4.jpg';
import image5 from './symmetriclens-craig-green-adidas-graddfa-akh-kamanda-5.jpg';
import image6 from './symmetriclens-craig-green-adidas-graddfa-akh-kamanda-6.jpg';
import image7 from './symmetriclens-craig-green-adidas-graddfa-akh-kamanda-7.jpg';
import image8 from './symmetriclens-craig-green-adidas-graddfa-akh-kamanda-8.jpg';
import image9 from './symmetriclens-craig-green-adidas-graddfa-akh-kamanda-9.jpg';


//change class name
class SL2003010 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Craig Green x Adidas Graddfa AKH SS20`, //main page title
            subtitle:`Based on the Kamanda silhouette`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9],
            article:(
                //main article
                <p>First seen at <a href="/search?q=craig+green">Craig Green</a>’s SS20 Runway show, the Graddfa AKH is the third time Craig Green has reinterpreted the <a href="/search?q=adidas">Adidas</a> Originals Kamanda. 

                <br/><br/>Extending the classic sole to cover the uppers, the shoe will be available in three different colour-schemes; ‘Core White’, ‘Carbon’, and ‘Collegiate Burgundy’
                
                <br/><br/><a href="https://thesolesupplier.co.uk/release-dates/?q=craig%20green" target="blank">Available from Sole</a> for £230</p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Craig Green x Adidas; Graddfa AKH</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-03-02").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2003010;