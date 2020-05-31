import React from 'react';

import ArticleTemplate from '../../../ArticleTemplate/ArticleTemplate'

import './SL005.css'

import image1 from './https___hypebeast.com_image_2018_09_bape-hebru-brantley-social-status-1000-bearbrick-001.jpg';
import image2 from './https___hypebeast.com_image_2018_09_bape-hebru-brantley-social-status-1000-bearbrick-002.jpg';


class SL005 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`BAPE Teams up With Hebru Brantley & Social Status on a 1000% BE@RBRICK`,
            images:[image1,image2],
            article:(
    
                <p>To celebrate its 25th anniversary, Japanese stalwart BAPE has once again teamed up with Medicom Toy, along with Social Status and artist Hebru Brantley, on a special edition BE@RBRICK. This time the streetwear favorite collectable takes on the look of BAPE’s Shark Face motif dressed as the Chicago-based artist’s Flyboy character. Featured on the back is co-branding from both BAPE and Hebru Brantley along with Social Status.<br/>

                Standing at a grand 1000% the BAPE x Hebru Brantley x Social Status x Medicom Toy BE@RBRICK will be officially unveiled this Saturday, September 29 at the label’s ”BAPE XXV” exhibition in Tokyo. Interested fans will be able to purchase this BE@RBRICK in the coming weeks at select retailers, such as Medicom Toy’s online shop and Tokyo Sky Tree Town, for $719 USD. Peep it above.</p>
            
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

export default SL005;