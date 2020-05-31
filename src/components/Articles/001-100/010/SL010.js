import React from 'react';
import MetaTags from 'react-meta-tags';

import ArticleTemplate from '../../../ArticleTemplate/ArticleTemplate'

import './SL010.css'

import image1 from './multee-project-2016-spring-summer-lookbook-1.jpg';
import image2 from './multee-project-2016-spring-summer-lookbook-2.jpg';
import image3 from './multee-project-2016-spring-summer-lookbook-3.jpg';
import image4 from './multee-project-2016-spring-summer-lookbook-4.jpg';
import image5 from './multee-project-2016-spring-summer-lookbook-5.jpg';
import image6 from './multee-project-2016-spring-summer-lookbook-6.jpg';
import image7 from './multee-project-2016-spring-summer-lookbook-7.jpg';
import image8 from './multee-project-2016-spring-summer-lookbook-8.jpg';
import image9 from './multee-project-2016-spring-summer-lookbook-9.jpg';
import image10 from './multee-project-2016-spring-summer-lookbook-10.jpg';


class SL010 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`(multee)project Takes From Picasso for Its Latest Collection`,
            subtitle:`Entitled “The Blue Period Collection”`,
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10],
            article:(
    
                <p>(multee)project introduces The Blue Period Collection, filled with both new and classic (multee)project garments. Inspired by Pablo Picasso’s “Blue Period” of work, the new collection is tonal and features blue tones. Classic silhouettes are updated with technical features, such as invisible YKK zippers hiding strategic pockets, premium tri-blends and water resistant fabrics, and more. The lookbook was shot in partnership with Los Angeles-based creative agency The Neue School, who captured the contemplative and reflective moods of the line, while referencing some of Picasso’s most iconic Blue Period pieces. Head over to its site to learn more.</p>
            
            )

        }
    }

   


    render(){
        return (
            <div>
                <MetaTags>
                    <title>Picasso inspiried (multee)project collection</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle}`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-03").toDateString()}/>
            </div>
        )
    }
}

export default SL010;