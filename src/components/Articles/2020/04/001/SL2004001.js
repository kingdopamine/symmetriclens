import React from 'react';
import MetaTags from 'react-meta-tags';
import InstagramEmbed from 'react-instagram-embed';

import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-burberry-reburberry-1.jpg';
import image2 from './symmetriclens-burberry-reburberry-2.jpg';
import image3 from './symmetriclens-burberry-reburberry-3.jpg';
import image4 from './symmetriclens-burberry-reburberry-4.jpg';
import image5 from './symmetriclens-burberry-reburberry-5.jpg';
import image6 from './symmetriclens-burberry-reburberry-6.jpg';
import image7 from './symmetriclens-burberry-reburberry-7.jpg';


//change class name
class SL2004001 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Burberry launches a collection of sustainably produced products called "ReBurberry"`, //main page title
            subtitle:`Nylon from recycled fishing nets`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7],
            article:(
                //main article
                <p>For Spring/Summer 2020 <a href="/search?q=burberry">Burberry</a> has launched ReBurberry; a collection that focuses on products produced with sustainable materials.<br/> <br/> 

                This collection includes pieces made from nylon recycled from fishing nets, industrial plastic, bio-based acetate, fabric scraps, and items made using factories that utilise renewable energy.<br/> <br/> 
                
                There are 26 pieces in total (which includes both menswear and womenswear, as well as accessories), which are all labeled with the details of the sustainable ways in which the specific item was produced.<br/> <br/> 
                
                Available to get now from the <a href="https://uk.burberry.com/the-reburberry-edit/" target="blank">Burberry Webstore</a><br/><br/>
                
                <div id="instagramembed"><InstagramEmbed url="https://www.instagram.com/p/B_SbHR0F38H/?utm_source=ig_web_copy_link"
                maxWidth={400}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {}}
                onAfterRender={() => {}}
                onFailure={() => {}}/></div>
                </p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Burberry launches sustainably produced collection under "ReBurberry" </title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-04-22").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2004001;