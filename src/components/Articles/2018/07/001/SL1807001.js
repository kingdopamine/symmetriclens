import React from 'react';
import MetaTags from 'react-meta-tags';

import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'



//images for the main image slider
import image1 from './symmetriclens-vivienne-westwood-riccardo-tisci-1.jpg';
import image2 from './symmetriclens-vivienne-westwood-riccardo-tisci-2.jpg';

//change class name
class SL1807001 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Riccardo Tisci announces new Burberry Collaboration with Vivienne Westwood`, //main page title
            subtitle:`"The original British Punk"`, //subtitle
            images:[image1,image2],
            article:(
                //main article
                <p>Riccardo Tisci has taken to Instagram to announce a new Burberry collaboration; this time with Vivienne Westwood.<br/>
                Riccardo described Vivienne as “the most unique champion of British style” and “the original British PUNK”.<br/>
                Also stating that Vivienne was one of the first designers who inspired him and many others to become designers, and that he is extremely honoured and proud to be working with her on this collaboration </p>
            
            )

        }
    }

   


    render(){//Meta tag title (should be truncated version of main page title)
        return (
            <div>
                <MetaTags>
                    <title>Riccardo Tisci: Burberry x Vivienne Westwood </title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle}`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-03").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL1807001;