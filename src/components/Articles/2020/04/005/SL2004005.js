import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-reebok-mountain-research-dmx-trail-shadow-1.jpg';
import image2 from './symmetriclens-reebok-mountain-research-dmx-trail-shadow-2.jpg';
import image3 from './symmetriclens-reebok-mountain-research-dmx-trail-shadow-3.jpg';
import image4 from './symmetriclens-reebok-mountain-research-dmx-trail-shadow-4.jpg';
import image5 from './symmetriclens-reebok-mountain-research-dmx-trail-shadow-5.jpg';
import image6 from './symmetriclens-reebok-mountain-research-dmx-trail-shadow-6.jpg';
import image7 from './symmetriclens-reebok-mountain-research-dmx-trail-shadow-7.jpg';
import image8 from './symmetriclens-reebok-mountain-research-dmx-trail-shadow-8.jpg';



//change class name
class SL2004005 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Reebok x Mountain Research, together again`, //main page title
            subtitle:`Anarchy in the mountains`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8],
            article:(
                //main article
                <p><a href="/search?q=reebok">Reebok</a> and <a href="/search?q=mountain+research">Mountain Research Japan</a> are back together once again. Mountain research have utilised the DMX Trail Shadow silhouette as their canvas this time around. 
                <br/>In a wild khaki x white colour scheme, the uppers made of suede, and thick rubber soles, this shoe has a distinct hiking-shoe aesthetic about it, clearly a direct intention of Mountain Research designer Setsumasa Kobayashi, who has exercises a “anarchy in the mountains” philosophy and also stated that “This collaboration is a true marriage of Reebok’s technology and heritage with traditional Japanese elements, realized through a backcountry lens”.
                
                <br/><br/>These shoes retail for £149, and can be purchased from <a href="https://www.endclothing.com/gb/reebok-x-mountain-research-dmx-trail-shadow-fw3335.html" target="blank">End Clothing</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Reebok x Mountain Shadow, DMX Trail Shadow</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-04-10").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2004005;