import React from 'react';
import MetaTags from 'react-meta-tags';

import ArticleTemplate from '../../../ArticleTemplate/ArticleTemplate'

//css file
import './SL010.css'

//images for the main image slider
import image1 from './multee-project-2016-spring-summer-lookbook-1.jpg';



class SL010 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`(multee)project Takes `, //title for the homepage gallery
            subtitle:`Entitled “The Blue Period Collection”`, //subtitle
            images:[image1],
            article:(
                //main article
                <p>(multee)project introduces The Blue Period Collection, filled with</p>
            
            )

        }
    }

   


    render(){//Meta tag title
        return (
            <div>
                <MetaTags>
                    <title>Picasso inspiried </title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle}`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-03").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL010;