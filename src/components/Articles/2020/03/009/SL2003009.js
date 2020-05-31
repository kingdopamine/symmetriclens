import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-raf-simons-fred-perry-ss20-1.jpg';
import image2 from './symmetriclens-raf-simons-fred-perry-ss20-2.jpg';
import image3 from './symmetriclens-raf-simons-fred-perry-ss20-3.jpeg';
import image4 from './symmetriclens-raf-simons-fred-perry-ss20-4.jpeg';
import image5 from './symmetriclens-raf-simons-fred-perry-ss20-5.jpeg';
import image6 from './symmetriclens-raf-simons-fred-perry-ss20-6.jpeg';
import image7 from './symmetriclens-raf-simons-fred-perry-ss20-7.jpeg';
import image8 from './symmetriclens-raf-simons-fred-perry-ss20-8.jpeg';
import image9 from './symmetriclens-raf-simons-fred-perry-ss20-9.jpeg';
import image10 from './symmetriclens-raf-simons-fred-perry-ss20-10.jpeg';
import image11 from './symmetriclens-raf-simons-fred-perry-ss20-11.jpeg';



//change class name
class SL2003009 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Raf Simons x Fred Perry SS20 collection`, //main page title
            subtitle:`Inspired by Gavin Watson`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11],
            article:(
                //main article
                <p>In an ongoing collaboration <a href="/search?q=raf+simons">Raf Simons'</a> SS20 <a href="/search?q=fred+perry">Fred Perry</a> capsule has been released.
                <br/>Adapting Fred Perry’s most familiar designs by infusing it with details from his own label, Raf Simons has also been significantly inspired by the candid and intimate 70’s and 80’s UK youth subculture photography of Gavin Watson for this collection. 
                
                <br/><br/>The collection includes a £275 heavy cotton twill workwear yoke print jacket (the print being one of Gavin Watson’s photos in purple and white, rather than the more traditional black and white photography), several polo shirt’s, t-shirts, knitwear jumpers, sweatshirts, and hoodies; most of these also include photo’s from Gavin’s archive
                
                <br/><br/> Check out the full collection on <a href="https://www.fredperry.com/men/raf-simons" target="blank">Fred Perry’s website</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Raf Simons x Fred Perry SS20</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-03-19").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2003009;