import React from 'react';

import ArticleTemplate from '../../../ArticleTemplate/ArticleTemplate'

import './SL008.css'

import image1 from './katsuhiro-otomo-x-kosuke-kawamura-x-a-bathing-ape-bapexclusive-aoyama-t-shirt-1.jpg';


class SL008 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Katsuhiro Otomo x Kosuke Kawamura x A Bathing Ape "BAPEXCLUSIVE AOYAMA" T-Shirt`,
            images:[image1],
            article:(
    
                <p>Following up on the relationship forged in last year’s “Re:construct” collection and exhibition, artists Katsuhiro Otomo and Kosuke Kawamura rejoin A Bathing Ape in creating a joint exhibition. Both artists are notable for their contribution to the Japanese artistic canon – Otomo is best known as the creator behind Akira, while Kawamura’s dizzyingly meticulous pen work has ushered in a new era of sketch art. Alongside the exhibition is, of course, a shirt, featuring a collaged, reworked rendition of the show title. Together, the two will present at BAPEXCLUSIVE™ AOYAMA, with the show running from May 24 to June 8. If in the Tokyo area, be sure to pop in to the store and grab one of these special commemorative pieces.</p>
            
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

export default SL008;