import React from 'react';

import ArticleTemplate from '../../../ArticleTemplate/ArticleTemplate'

import './SL001.css'

import image1 from './55-dsl-united-arrows-tshirts-1.jpg';
import image2 from './55-dsl-united-arrows-tshirts-2.jpg';
import image3 from './55-dsl-united-arrows-tshirts-3.jpg';

class SL001 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`55 DSL x UNITED ARROWS Limited Edition T-Shirts`,
            images:[image1,image2,image3],
            article:(
    
                <p>New from Japanese label UNITED ARROWS comes a unique and whimsical 
                    series of tees in collaboration with the popular streetwear branch of Italian 
                    denim brand Diesel, 55 DSL. Highlighting the work of Terry Richardson, Andy 
                    Warhol and Woody Allen in a creative fashion homage, the shirts remain 
                    indicative of the great bespectacled artists without being too blatant. 
                    Available for a limited time only for ¥6,090 JPY (approximately $80 USD) 
                    starting on August 23 at UNITED ARROWS’ Tokyo store.</p>
            
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

export default SL001;