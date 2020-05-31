import React from 'react';

import ArticleTemplate from '../../../ArticleTemplate/ArticleTemplate'

import './SL009.css'

import image1 from './https___hypebeast.com_image_2013_10_keith-haring-a-bathing-ape-collection-01.jpg';
import image2 from './https___hypebeast.com_image_2013_10_keith-haring-a-bathing-ape-collection-02.jpg';
import image3 from './https___hypebeast.com_image_2013_10_keith-haring-a-bathing-ape-collection-03.jpg';
import image4 from './https___hypebeast.com_image_2013_10_keith-haring-a-bathing-ape-collection-04.jpg';
import image5 from './https___hypebeast.com_image_2013_10_keith-haring-a-bathing-ape-collection-05.jpg';
import image6 from './https___hypebeast.com_image_2013_10_keith-haring-a-bathing-ape-collection-06.jpg';
import image7 from './https___hypebeast.com_image_2013_10_keith-haring-a-bathing-ape-collection-07.jpg';
import image8 from './https___hypebeast.com_image_2013_10_keith-haring-a-bathing-ape-collection-08.jpg';
import image9 from './https___hypebeast.com_image_2013_10_keith-haring-a-bathing-ape-collection-09.jpg';
import image10 from './https___hypebeast.com_image_2013_10_keith-haring-a-bathing-ape-collection-10.jpg';
import image11 from './https___hypebeast.com_image_2013_10_keith-haring-a-bathing-ape-collection-11.jpg';


class SL009 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Keith Haring x A Bathing Ape 2013 Capsule Collection`,
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11],
            article:(
    
                <p>In yet another pairing with a renowned contemporary brand, the Keith Haring Foundation teams with streetwear giant A Bathing Ape to release a capsule collection for Fall 2013. Displayed on outerwear, T-shirts and accessories, this enticing range applies three of Haring’s iconic stencils to BAPE’s ubiquitous camouflage print in various color options as a subtle nod to the great ‘80s artist and philanthropist. Although ZOZOTOWN will be taking orders next Friday, October 18, the above grouping will not be shipped until after the New Year.</p>
            
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

export default SL009;