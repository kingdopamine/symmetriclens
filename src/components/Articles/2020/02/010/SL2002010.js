import React from 'react';
import MetaTags from 'react-meta-tags';

import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-reebok-end-mercury-1.jpg';
import image2 from './symmetriclens-reebok-end-mercury-2.jpg';
import image3 from './symmetriclens-reebok-end-mercury-3.jpg';
import image4 from './symmetriclens-reebok-end-mercury-4.jpg';
import image5 from './symmetriclens-reebok-end-mercury-5.jpg';

//change class name
class SL2002010 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Reebok x END; Mercury Trainers`, //main page title
            subtitle:`Futuristic Silver`, //subtitle
            images:[image1,image2,image3,image4,image5],
            article:(
                //main article
                <p><a href="/search?q=reebok">Reebok</a> and <a href="/search?q=end">END</a>. reunite; this time for a new iteration on the DMX Trail Shadow, called ‘Mercury’.
                <br/>This limited edition, shimmering metallic and vibrantly coloured sneaker is constructed from a combination of rubberised mesh, TPU caging, and DMX SHEAR cushioning.
                
                <br/><br/>These futuristic silver x red, x neon green trainers are available from the <a target="blank" href="https://www.endclothing.com/gb/end-x-reebok-dmx-trail-shadow-mercury-fx0001.html">END. website</a> for £149</p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Reebok x END; Mercury Trainers</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-02-17").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2002010;