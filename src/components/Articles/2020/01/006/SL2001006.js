import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-sunspel-beams-45r-n-hoolywood-1.jpg';
import image2 from './symmetriclens-sunspel-beams-45r-n-hoolywood-2.jpg';
import image3 from './symmetriclens-sunspel-beams-45r-n-hoolywood-3.jpg';
import image4 from './symmetriclens-sunspel-beams-45r-n-hoolywood-4.jpg';
import image5 from './symmetriclens-sunspel-beams-45r-n-hoolywood-5.jpg';
import image6 from './symmetriclens-sunspel-beams-45r-n-hoolywood-6.jpg';
import image7 from './symmetriclens-sunspel-beams-45r-n-hoolywood-7.jpg';
import image8 from './symmetriclens-sunspel-beams-45r-n-hoolywood-8.jpg';
import image9 from './symmetriclens-sunspel-beams-45r-n-hoolywood-9.jpg';
import image10 from './symmetriclens-sunspel-beams-45r-n-hoolywood-10.jpg';


//change class name
class SL2001006 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Sunspel x BEAMS x 45R x N.HOOLYWOOD`, //main page title
            subtitle:`Celebrating a 60 year relationship with Japan`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10],
            article:(
                //main article
                <p>Celebrating it’s near 60 year connection with Japanese culture, <a href="/search?q=sunspel">Sunspel</a> has released a new capsule in collaboration with Japanese greats; <a href="/search?q=beams">BEAMS</a>, <a href="/search?q=45r">45R</a>, and <a href="/search?q=n.hoolywood">N.HOOLYWOOD</a>.

                <br/><br/>All three re-interpreting icons and classics from Sunspels 160 year history.
                
                <br/><br/>45R gifts some long-staple made in Japan cotton jerseys, whilst N.HOOLYWOOD and BEAMS make use of Sunspels Long Eaton UK factory
                
                <br/><br/>Pieces will be available in March from <a target="blank" href="https://www.sunspel.com/uk/mens.html">Sunspel’s website</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Sunspel x BEAMS x 45R x N.HOOLYWOOD</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-01-30").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2001006;