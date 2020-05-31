import React from 'react';
import MetaTags from 'react-meta-tags';

import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-vivienne-westwood-burberry-capsule-collection-1.jpg';
import image2 from './symmetriclens-vivienne-westwood-burberry-capsule-collection-2.jpg';
import image3 from './symmetriclens-vivienne-westwood-burberry-capsule-collection-3.jpg';
import image4 from './symmetriclens-vivienne-westwood-burberry-capsule-collection-4.jpg';
import image5 from './symmetriclens-vivienne-westwood-burberry-capsule-collection-5.jpg';
import image6 from './symmetriclens-vivienne-westwood-burberry-capsule-collection-6.jpg';
import image7 from './symmetriclens-vivienne-westwood-burberry-capsule-collection-7.jpg';
import image8 from './symmetriclens-vivienne-westwood-burberry-capsule-collection-8.jpg';
import image9 from './symmetriclens-vivienne-westwood-burberry-capsule-collection-9.jpg';
import image11 from './symmetriclens-vivienne-westwood-burberry-capsule-collection-11.jpg';
import image12 from './symmetriclens-vivienne-westwood-burberry-capsule-collection-12.jpg';
import image13 from './symmetriclens-vivienne-westwood-burberry-capsule-collection-13.jpg';
import image14 from './symmetriclens-vivienne-westwood-burberry-capsule-collection-14.jpg';
import image15 from './symmetriclens-vivienne-westwood-burberry-capsule-collection-15.jpg';


//change class name
class SL1812001 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`The Burberry x Vivienne Westwood capsule collection has now been revealed`, //main page title
            subtitle:`Includes customised t-shirts to be auctioned`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image11,image12,image13,image14,image15],
            article:(
                //main article
                <p>The Burberry x Vivienne Westwood collaboration has now been revealed in a campaign shot by David Sims.<br/><br/>
                The capsule features classic Westwood silhouettes (which have been repurposed in Burberry’s vintage tartan pattern), as well as a t-shirt with a print of Vivienne’s own handwriting promoting the non-profit organisation Cool Earth; they deal with climate change, saving the rainforest, and other ecological issues. <br/>
                Four of these t-shirts will be customised by Westwood and auctioned off with all proceeds going to Cool Earth.</p>
            
            )

        }
    }

   


    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Burberry x Westwood capsule now revealed </title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle}`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2018-12-06").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL1812001;