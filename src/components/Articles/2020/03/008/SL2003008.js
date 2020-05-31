import React from 'react';
import MetaTags from 'react-meta-tags';
import InstagramEmbed from 'react-instagram-embed';

import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-reebok-eastlogue-dmx-trail-shadow-1.jpg';
import image2 from './symmetriclens-reebok-eastlogue-dmx-trail-shadow-2.jpg';
import image3 from './symmetriclens-reebok-eastlogue-dmx-trail-shadow-3.jpg';
import image4 from './symmetriclens-reebok-eastlogue-dmx-trail-shadow-4.jpg';
import image5 from './symmetriclens-reebok-eastlogue-dmx-trail-shadow-5.jpg';


//change class name
class SL2003008 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Reebok first collaboration with Eastlogue; the DMX Trail Shadow`, //main page title
            subtitle:`Inspired by the MA-1 bomber jacket`, //subtitle
            images:[image1,image2,image3,image4,image5],
            article:(
                //main article
                <p>This time it’s Korean label <a href="/search?q=eastlogue">Eastlogue</a>’s take on <a href="/search?q=reebok">Reebok</a>’s DMX Trail shadow, their first collaboration with the British brand. Inspired by the MA-1 bomber jacket, Eastlogue has opted for a more military based colour palette, with their use of khaki, black, and safety orange. 

                <br/><br/>The shoe also includes high-visibility 3M webbing, and is overlaid with a supportive TPU cage.
                
                <br/><br/>Available for £149 <a href="https://www.endclothing.com/gb/reebok-x-eastlogue-dmx-trail-shadow-fw3332.html" target="blank">online from END.</a><br/><br/>
                
                <div id="instagramembed"><InstagramEmbed url="https://www.instagram.com/p/B9qpDTLpUe4/"
                maxWidth={400}
                hideCaption={true}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}/></div></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Reebok x Eastlogue DMX Trail Shadow</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-03-14").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2003008;