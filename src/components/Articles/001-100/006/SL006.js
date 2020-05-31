import React from 'react';

import ArticleTemplate from '../../../ArticleTemplate/ArticleTemplate'

import './SL006.css'

import image1 from './bape-shaun-crawford-new-york-city-15th-anniversary-t-shirt-release-1.jpg';
import image2 from './bape-shaun-crawford-new-york-city-15th-anniversary-t-shirt-release-2.jpg';
import image3 from './bape-shaun-crawford-new-york-city-15th-anniversary-t-shirt-release-3.jpg';
import image4 from './bape-shaun-crawford-new-york-city-15th-anniversary-t-shirt-release-4.jpg';


class SL006 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`BAPE NY Enlists Shaun Crawford for 15th Anniversary T-Shirt Design`,
            images:[image1,image2,image3,image4],
            article:(
    
                <p>As a continuation of BAPE STORE NY’s 15th anniversary celebrations, A Bathing Ape has tapped Harlem-based graffiti artist Shaun Crawford for a release of special T-shirts. Available in black and white colorways, each shirt features “BAPE” and its store location in NYC’s SoHo neighborhood in the artist’s distinct tagging style.<br/>
                A series of limited-edition items were made available exclusively at the New York store to commemorate the brand’s milestone. From Modernica furniture to MTA Metro Card-printed tees, the collection incorporates a print that’s only associated with the streetwear stalwart’s NY location, along with other NYC-inspired motifs. For the latest T-shirt release, an APE Head insignia sporting the same crown as the Statue of Liberty brands the back of each tee.<br/>

                Check out the latest Shaun Crawford design for BAPE in the images above. Retailing for $99 USD each, the tees will drop exclusively on BAPE’s website starting April 11.
                </p>
            
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

export default SL006;