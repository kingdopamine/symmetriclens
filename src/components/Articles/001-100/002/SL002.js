import React from 'react';

import ArticleTemplate from '../../../ArticleTemplate/ArticleTemplate'

import './SL002.css'

import image1 from './https___hypebeast.com_image_2018_10_aape-by-a-bathing-ape-steven-harrington-capsule-collection-1.jpg';
import image2 from './https___hypebeast.com_image_2018_10_aape-by-a-bathing-ape-steven-harrington-capsule-collection-2.jpg';
import image3 from './https___hypebeast.com_image_2018_10_aape-by-a-bathing-ape-steven-harrington-capsule-collection-3.jpg';
import image4 from './https___hypebeast.com_image_2018_10_aape-by-a-bathing-ape-steven-harrington-capsule-collection-4.jpg';


class SL002 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`AAPE By A Bathing Ape & Steven Harrington Unveil Special Capsule`,
            images:[image1,image2,image3,image4],
            article:(
    
                <p>Steven Harrington just unveiled his latest partnership with AAPE By A Bathing Ape. The celebrated visual artist’s collaborative range with the streetwear mainstay encompasses a special edition vinyl figure, graphic T-shirts, and a screen-printed poster. The collectible sculpture, limited to only 300 pieces, features Harrington’s signature palm tree character with the ubiquitous APE character clinging onto it. As for the apparel portion, the duo presents co-branded tees in tonal white with vivid tones.<br/>

                The full collection will be available stateside at the AAPE shop at the end of November. An online release for the sculptures will follow at Steven Harrington’s website. Pricing details have yet to be confirmed. Elsewhere in art, Visionaire celebrates its 68th issue with protest posters by Pusha T, Vivienne Westwood, and more.</p>
            
            )

        }
    }


    render(){
        return (
            <div>
                <ArticleTemplate title={this.state.title} article={this.state.article} images={this.state.images}/>
            </div>
        )
    }
}

export default SL002;