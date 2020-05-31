import React from 'react';

import ArticleTemplate from '../../../ArticleTemplate/ArticleTemplate'

import './SL003.css'

import image1 from './https___hypebeast.com_image_2016_10_adam-lister-x-a-bathing-ape-1.jpg';
import image2 from './https___hypebeast.com_image_2016_10_adam-lister-x-a-bathing-ape-2.jpg';
import image3 from './https___hypebeast.com_image_2016_10_adam-lister-x-a-bathing-ape-3.jpg';
import image4 from './https___hypebeast.com_image_2016_10_adam-lister-x-a-bathing-ape-4.jpg';
import image5 from './https___hypebeast.com_image_2016_10_adam-lister-x-a-bathing-ape-5.jpg';
import image6 from './https___hypebeast.com_image_2016_10_adam-lister-x-a-bathing-ape-6.jpg';
import image7 from './https___hypebeast.com_image_2016_10_adam-lister-x-a-bathing-ape-7.jpg';
import image8 from './https___hypebeast.com_image_2016_10_adam-lister-x-a-bathing-ape-8.jpg';


class SL003 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`BAPE Enlists Artist Adam Lister for an Exclusive Collection`,
            images:[image1,image2,image3,image4,image5,image6,image7,image8],
            article:(
    
                <p>New York-based artist Adam Lister is widely-known for reimagining famous artworks and pop culture characters with his watercolor paintings. Lister’s modulated approach to his artwork imbues futuristic vibes — mimicking 8-bit color graphics normally found in retro/classic video games. Not long ago, A Bathing Ape recruited the artist for an exclusive collaboration that features T-shirts and miniature paintings inspired by iconic BAPE designs. The offering sees a set of four tees alongside Lister’s original artwork that heavily culls influences from the Cubist movement.<br/>

                “My paintings are pixelated deconstructions of subjects that hold a collective familiarity. Similar to geometric hallucinations, my ideas are broken down and reassembled to present an alternate perception of an image. These pictures exist at the intersection of cubism and 8-bit video games. Each painting treads a fine line between abstraction and representation. My work is heavily influenced by mathematics, minimalism, and pop culture,” said Lister regarding the collaboration.<br/>
                
                Look for the Adam Lister x A Bathing Ape collection to release this October 8 at Bape.com and select stores.</p>
            
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

export default SL003;