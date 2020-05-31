import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-maharishi-spring-summer-2020-lookbook-1.jpg';
import image2 from './symmetriclens-maharishi-spring-summer-2020-lookbook-2.jpg';
import image3 from './symmetriclens-maharishi-spring-summer-2020-lookbook-3.jpg';
import image4 from './symmetriclens-maharishi-spring-summer-2020-lookbook-4.jpg';
import image5 from './symmetriclens-maharishi-spring-summer-2020-lookbook-5.jpg';
import image6 from './symmetriclens-maharishi-spring-summer-2020-lookbook-6.jpg';
import image7 from './symmetriclens-maharishi-spring-summer-2020-lookbook-7.jpg';
import image8 from './symmetriclens-maharishi-spring-summer-2020-lookbook-8.jpg';
import image9 from './symmetriclens-maharishi-spring-summer-2020-lookbook-9.jpg';

//change class name
class SL010 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Maharishi Spring Summer 2020 lookbook release`, //main page title
            subtitle:`Shot in Miami`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9],
            article:(
                //main article
                <p><a href="/search?q=maharishi">Maharishi</a> have released their lookbook for Spring Summer 2020. Shot by Alastair Strong in Miami (Florida, USA), the book features clothes ideal for summer weather.

                <br/><br/>All pieces made from lightweight breathable fabrics; we get to see many of the ikat cotton pieces from this season’s collection, which is produced with a custom weave as to emulate Strichtarn rain camouflage, formed of resist-dyed or tie-dyed cotton yarn which have been handloom woven together. We also have vegetable dyed Japanese cupro (a silk-like material), a water resistant cotton blend, hemp, and organic cotton.
                
                <br/><br/>This look book also features the DPM:Neo Rain jacket, inspired by U.S. Desert Battle Dress Uniform choc chip camo’, and well as East German rain camo’s
                
                <br/><br/>Be sure to checkout the entire collection in detail <a href="https://www.maharishistore.com/collections/man" target="blank">here</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Maharishi Summer 2020 lookbook</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-04-09").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL010;