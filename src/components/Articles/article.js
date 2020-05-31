import React from 'react';
import MetaTags from 'react-meta-tags';
import InstagramEmbed from 'react-instagram-embed';

import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './multee-project-2016-spring-summer-lookbook-1.jpg';


//change class name
class SL010 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`(multee)project Takes`, //main page title
            subtitle:`Entitled “The Blue Period Collection”`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10],
            article:(
                //main article
                <p>(multee)project introduces The Blue Period Collection, filled with</p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Picasso</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-03").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL010;