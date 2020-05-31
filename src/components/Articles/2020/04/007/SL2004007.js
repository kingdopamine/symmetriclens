import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-vivienne-westwood-engraved-ring-1.jpg';
import image2 from './symmetriclens-vivienne-westwood-engraved-ring-2.jpg';
import image3 from './symmetriclens-vivienne-westwood-engraved-ring-3.jpg';
import image4 from './symmetriclens-vivienne-westwood-engraved-ring-4.jpg';
import image5 from './symmetriclens-vivienne-westwood-engraved-ring-5.jpg';
import image6 from './symmetriclens-vivienne-westwood-engraved-ring-6.jpg';


//change class name
class SL2004007 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Vivienne Westwood releases new ring design`, //main page title
            subtitle:`Gold-tone and Gunmetal`, //subtitle
            images:[image1,image2,image3,image4,image5,image6],
            article:(
                //main article
                <p><a href="/search?q=vivienne+westwood">Vivienne Westwood</a> has released a new ring design, featuring her signature orb engraved into the face of the ring and a small jewel in the corner. 

                <br/><br/>The ring itself is made of sterling silver and is available in two colours; gold-tone, and gunmetal.
                
                <br/><br/>Available for £165 from <a href="https://www.harveynichols.com/brand/vivienne-westwood-/395680-carlo-engraved-gold-tone-ring/p3839706/" target="blank">Harvey Nichols</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Vivienne Westwood new ring design</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-04-08").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2004007;