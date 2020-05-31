import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-adidas-craig-green-polta-akh-ii-1.jpg';
import image2 from './symmetriclens-adidas-craig-green-polta-akh-ii-2.jpg';
import image3 from './symmetriclens-adidas-craig-green-polta-akh-ii-3.jpg';
import image4 from './symmetriclens-adidas-craig-green-polta-akh-ii-4.jpg';
import image5 from './symmetriclens-adidas-craig-green-polta-akh-ii-5.jpg';
import image6 from './symmetriclens-adidas-craig-green-polta-akh-ii-6.jpg';
import image7 from './symmetriclens-adidas-craig-green-polta-akh-ii-7.jpg';
import image8 from './symmetriclens-adidas-craig-green-polta-akh-ii-8.jpg';
import image9 from './symmetriclens-adidas-craig-green-polta-akh-ii-9.jpg';
import image10 from './symmetriclens-adidas-craig-green-polta-akh-ii-10.jpg';
import image11 from './symmetriclens-adidas-craig-green-polta-akh-ii-11.jpg';
import image12 from './symmetriclens-adidas-craig-green-polta-akh-ii-12.jpg';
import image13 from './symmetriclens-adidas-craig-green-polta-akh-ii-13.jpg';
import image14 from './symmetriclens-adidas-craig-green-polta-akh-ii-14.jpg';
import image15 from './symmetriclens-adidas-craig-green-polta-akh-ii-15.jpg';
import image16 from './symmetriclens-adidas-craig-green-polta-akh-ii-16.jpg';


//change class name
class SL2002006 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Craig Green x Adidas; Polta Akh II`, //main page title
            subtitle:`Exclusive to Dover Street Market`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16],
            article:(
                //main article
                <p>Exclusive to dover street market is <a href="/search?q=craig+green">Craig Green</a>’s second iteration on the <a href="/search?q=adidas">Adidas</a> Kamanda, called the Polta Akh II.

                <br/><br/>Sculpting a translucent synthetic upper with the usual Kamanda outsole, this shoe is rich in texture
                
                <br/><br/>Available in six colour schemes (Scarlet, Brown, Yellow, Green, Blue, and White) they can be purchased for £250 from the <a href="https://shop.doverstreetmarket.com/dsml-ss20-sale/adidas" target="blank">DSM web site</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Craig Green x Adidas Polta Akh II</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-02-24").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2002006;