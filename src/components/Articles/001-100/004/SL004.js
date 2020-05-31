import React from 'react';

import ArticleTemplate from '../../../ArticleTemplate/ArticleTemplate'

import './SL004.css'

import image1 from './bape-hebru-brantley-reveal-full-graphic-collection-1.jpg';
import image2 from './bape-hebru-brantley-reveal-full-graphic-collection-2.jpg';
import image3 from './bape-hebru-brantley-reveal-full-graphic-collection-3.jpg';
import image4 from './bape-hebru-brantley-reveal-full-graphic-collection-4.jpg';
import image5 from './bape-hebru-brantley-reveal-full-graphic-collection-5.jpg';
import image6 from './bape-hebru-brantley-reveal-full-graphic-collection-6.jpg';
import image7 from './bape-hebru-brantley-reveal-full-graphic-collection-7.jpg';
import image8 from './bape-hebru-brantley-reveal-full-graphic-collection-8.jpg';
import image9 from './bape-hebru-brantley-reveal-full-graphic-collection-9.jpg';
import image10 from './bape-hebru-brantley-reveal-full-graphic-collection-10.jpg';
import image11 from './bape-hebru-brantley-reveal-full-graphic-collection-11.jpg';
import image12 from './bape-hebru-brantley-reveal-full-graphic-collection-12.jpg';
import image13 from './bape-hebru-brantley-reveal-full-graphic-collection-13.jpg';
import image14 from './bape-hebru-brantley-reveal-full-graphic-collection-14.jpg';
import image15 from './bape-hebru-brantley-reveal-full-graphic-collection-15.jpg';
import image16 from './bape-hebru-brantley-reveal-full-graphic-collection-16.jpg';


class SL004 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`BAPE & Hebru Brantley Reveal Full Graphic Collection`,
            images:[
                image1,
                image2,
                image3,
                image4,
                image5,
                image6,
                image7,
                image8,
                image9,
                image10,
                image11,
                image12,
                image13,
                image14,
                image15,
                image16,
            ],
            article:(
    
                <p>After teasing a joint collection earlier this month, BAPE and Chicago-based artist Hebru Brantley have now officially unveiled their full collaboration. The collection fuses classic characters from both Brantley and BAPE, with the artist’s Flyboy and Lil MaMa featuring alongside BABY MILO and APE HEAD motifs throughout the collection.<br/>

                Different variations on these graphics appear on a range of printed T-shirts, while BAPE’s signature Shark Hoodie is reworked to feature “FLYBOY” pilot goggles rather than the standard eye design. The collection is set to launch at BAPE’s Los Angeles store — with an appearance from Brantley — and Social Status on June 2, before dropping worldwide a week later.</p>
            
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

export default SL004;