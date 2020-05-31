import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-alexander-mcqueen-fw20-fall-winter-2020-1.jpg';
import image2 from './symmetriclens-alexander-mcqueen-fw20-fall-winter-2020-2.jpg';
import image3 from './symmetriclens-alexander-mcqueen-fw20-fall-winter-2020-3.jpg';
import image4 from './symmetriclens-alexander-mcqueen-fw20-fall-winter-2020-4.jpg';
import image5 from './symmetriclens-alexander-mcqueen-fw20-fall-winter-2020-5.jpg';
import image6 from './symmetriclens-alexander-mcqueen-fw20-fall-winter-2020-6.jpg';
import image7 from './symmetriclens-alexander-mcqueen-fw20-fall-winter-2020-7.jpg';
import image8 from './symmetriclens-alexander-mcqueen-fw20-fall-winter-2020-8.jpg';
import image9 from './symmetriclens-alexander-mcqueen-fw20-fall-winter-2020-9.jpg';
import image10 from './symmetriclens-alexander-mcqueen-fw20-fall-winter-2020-10.jpg';
import image11 from './symmetriclens-alexander-mcqueen-fw20-fall-winter-2020-11.jpg';
import image12 from './symmetriclens-alexander-mcqueen-fw20-fall-winter-2020-12.jpg';
import image13 from './symmetriclens-alexander-mcqueen-fw20-fall-winter-2020-13.jpg';


//change class name
class SL2001002 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Alexander McQueen FW20 Lookbook`, //main page title
            subtitle:`Inspired by Henry Moore`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13],
            article:(
                //main article
                <p>The Fall Winter 2020 <a href="/search?q=alexander+mcqueen">Alexander McQueen</a> lookbook presents the collection again after its debut at Milan Fashion Week.

                <br/><br/>This collection takes inspiration from many places; Northern British terrain, Henry Moore, Modernism, and Art Nouveau to name but a few.
                
                <br/><br/>This is a very diverse cast of ensembles, with very plain to very highly decorated and colourful suits, from wool and mohair argyle flag knit jumpers, to leather motorcycling trousers and flying jackets
                
                <br/><br/>Available within the next few month from <a target="blank" href="https://www.alexandermcqueen.com/">Alexander McQueen’s website</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Alexander McQueen FW20 Lookbook</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-01-13").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2001002;