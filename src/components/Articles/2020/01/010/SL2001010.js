import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-end-converse-chuck-70-hi-jack-purcell-1.jpg';
import image2 from './symmetriclens-end-converse-chuck-70-hi-jack-purcell-2.jpg';
import image3 from './symmetriclens-end-converse-chuck-70-hi-jack-purcell-3.jpg';
import image4 from './symmetriclens-end-converse-chuck-70-hi-jack-purcell-4.jpg';
import image5 from './symmetriclens-end-converse-chuck-70-hi-jack-purcell-5.jpg';
import image6 from './symmetriclens-end-converse-chuck-70-hi-jack-purcell-6.jpg';
import image7 from './symmetriclens-end-converse-chuck-70-hi-jack-purcell-7.jpg';
import image8 from './symmetriclens-end-converse-chuck-70-hi-jack-purcell-8.jpg';
import image9 from './symmetriclens-end-converse-chuck-70-hi-jack-purcell-9.jpg';
import image10 from './symmetriclens-end-converse-chuck-70-hi-jack-purcell-10.jpg';


//change class name
class SL2001010 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`END. x Converse: Chuck 70 Hi, Jack Purcell`, //main page title
            subtitle:`Inspired their London flagship blueprint plans`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10],
            article:(
                //main article
                <p>Inspired by the blueprint’s for their Soho, London store which opened in 2018, <a href="/search?q=end">END.</a>’s latest collaboration with <a href="/search?q=converse">Converse</a> see’s a unique take on the Chuck 70 Hi, and Jack Purcell.

                <br/><br/>The design see’s a printed grid pattern with alternate stitching in order to mimc an architects floorplan.
                <br/>The underfoot of the outersole is a translucent green, revealing another grid pattern beneath, further emphasising the aesthetics of a blueprint
                
                <br/><br/>The Jack Purcell’s (£89) are made with the classic 12oz canvas in an off-white, whilst the Hi’s (£99) are made with black nubuck leather. <a target="blank" href="https://www.endclothing.com/gb/catalogsearch/results?q=END.%20X%20CONVERSE">Available online from END.</a> </p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>END. x Converse: Chuck 70 Hi, Jack Purcell</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-01-27").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2001010;