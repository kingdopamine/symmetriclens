import React from 'react';
import MetaTags from 'react-meta-tags';
import InstagramEmbed from 'react-instagram-embed';

import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-end-clarks-wallabee-collaboration-1.jpg';
import image2 from './symmetriclens-end-clarks-wallabee-collaboration-2.jpg';
import image3 from './symmetriclens-end-clarks-wallabee-collaboration-3.jpg';
import image4 from './symmetriclens-end-clarks-wallabee-collaboration-4.jpg';
import image5 from './symmetriclens-end-clarks-wallabee-collaboration-5.jpg';
import image6 from './symmetriclens-end-clarks-wallabee-collaboration-6.jpg';
import image7 from './symmetriclens-end-clarks-wallabee-collaboration-7.jpg';
import image8 from './symmetriclens-end-clarks-wallabee-collaboration-8.jpg';


//change class name
class SL2005008 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`END. x Clarks: new Wallabees`, //main page title
            subtitle:`Native-American inspired`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8],
            article:(
                //main article
                <p>In collaboration with <a href="/search?q=clarks">Clarks</a>, <a href="/search?q=end">END.</a> have released a new interpretation of the classic Wallabee, in both the boot silhouette and low-cut silhouette.

                <br/><br/>The low-cut comes in a pink suede, but with a lighter shade panel for the top of the uppers compared with the outside of the shoe. Similarly the boot comes in Navy Suede with the same contrast in shade.
                
                <br/><br/>Inspired by the moccasins of Native American culture, the shoes feature conspicuous cross-stitching on the permitters of the heel, as well as a decorative Native-American beaded tassels attached to the shoe, along with an embossed END. logo tag
                
                <br/><br/>Available at the end of the month from <a target="blank" href="https://www.endclothing.com/gb/">END.’s website</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>END. x Clarks: new Wallabees</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-05-25").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2005008;