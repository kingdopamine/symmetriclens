import React from 'react';

import ArticleTemplate from '../../../ArticleTemplate/ArticleTemplate'

import './SL007.css'

import image1 from './10-deep-x-masayuki-yoshinaga-capsule-collection-1.jpg';
import image2 from './10-deep-x-masayuki-yoshinaga-capsule-collection-2.jpg';
import image3 from './10-deep-x-masayuki-yoshinaga-capsule-collection-3.jpg';
import image4 from './10-deep-x-masayuki-yoshinaga-capsule-collection-4.jpg';
import image5 from './10-deep-x-masayuki-yoshinaga-capsule-collection-5.jpg';
import image6 from './10-deep-x-masayuki-yoshinaga-capsule-collection-6.jpg';
import image7 from './10-deep-x-masayuki-yoshinaga-capsule-collection-7.jpg';
import image8 from './10-deep-x-masayuki-yoshinaga-capsule-collection-8.jpg';
import image9 from './10-deep-x-masayuki-yoshinaga-capsule-collection-9.jpg';

class SL007 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`The 10.Deep x Masayuki Yoshinaga Capsule Collection Features Images From Japan's Bosozoku Culture`,
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9],
            article:(
    
                <p>After just releasing its VCTRY collection for this season, 10.Deep returns to tease us with something even more exciting. The streetwear mainstay has linked up with documenter Masayuki Yoshinaga on a 2017 winter capsule featuring the famed photographer’s works — a selection of tees and hoodies show his visceral images of Bosozoku culture in ’80s Japan.<br/>

                Bosozoku, which can be paralleled to the popular anime, Akira, is a subculture of local gangs made up of teens who ride modified motorcycles and cause havoc in city streets. The community was that of a violent one and Yoshinaga, who claims himself to be a hooligan as well, documented some of the members’ wild antics. According to 10.Deep, “Mr. Yoshinaga has had solo exhibitions at the Parco Galleries in Tokyo and Nagoya and has exhibited internationally at the Dazed &amp; Confused Gallery and Barbican Gallery in London. To date, his work has been published in seven monographs.”<br/>
                
                The Masayuki Yoshinaga x 10.Deep Bosozoku capsule will be available for purchase on December 14, 11 a.m. EST at the brand’s website.</p>
            
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

export default SL007;