import React from 'react';
import MetaTags from 'react-meta-tags';

import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-vetements-reebok-spike-runner-2-1.jpg';
import image2 from './symmetriclens-vetements-reebok-spike-runner-2-2.jpg';
import image3 from './symmetriclens-vetements-reebok-spike-runner-2-3.jpg';
import image4 from './symmetriclens-vetements-reebok-spike-runner-2-4.jpg';
import image5 from './symmetriclens-vetements-reebok-spike-runner-2-5.jpg';


//change class name
class SL2005005 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Vetements x Reebok is back, this time with the Spike Runner 2 silhouette`, //main page title
            subtitle:`The latest in an ongoing collaboration`, //subtitle
            images:[image1,image2,image3,image4,image5],
            article:(
                //main article
                <p>In the latest of an ongoing collaboration between <a href="/search?q=vetements">Vetements</a> and <a href="/search?q=reebok">Reebok</a>, Vetements has opted for a black x red x blue x cyan x metallic-silver colour scheme on Reebok’s Spike Runner 2 silhouette this time around.<br/><br/>

                Currently available for £520 from <a href="https://www.ln-cc.com/en/men/shoes/sneakers/spike-runner-2-sneakers-in-red-vet0342004col.html" target="blank">LN-CC</a>, this pragmatic sneaker features a rubberised tounge with Vetements’ logo, and Riged DMPR Tek rubber soles.</p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>new Vetements x Reebok release, Spike Runner 2</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-05-22").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2005005;