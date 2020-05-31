import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-nigel-cabour-element-cricket-collaboration-1.jpg';
import image2 from './symmetriclens-nigel-cabour-element-cricket-collaboration-2.jpg';
import image3 from './symmetriclens-nigel-cabour-element-cricket-collaboration-3.jpg';
import image4 from './symmetriclens-nigel-cabour-element-cricket-collaboration-4.jpg';
import image5 from './symmetriclens-nigel-cabour-element-cricket-collaboration-5.jpg';
import image6 from './symmetriclens-nigel-cabour-element-cricket-collaboration-6.jpg';
import image7 from './symmetriclens-nigel-cabour-element-cricket-collaboration-7.jpg';
import image8 from './symmetriclens-nigel-cabour-element-cricket-collaboration-8.jpg';
import image9 from './symmetriclens-nigel-cabour-element-cricket-collaboration-9.jpg';
import image10 from './symmetriclens-nigel-cabour-element-cricket-collaboration-10.jpg';
import image11 from './symmetriclens-nigel-cabour-element-cricket-collaboration-11.jpg';
import image12 from './symmetriclens-nigel-cabour-element-cricket-collaboration-12.jpg';
import image13 from './symmetriclens-nigel-cabour-element-cricket-collaboration-13.jpg';
import image14 from './symmetriclens-nigel-cabour-element-cricket-collaboration-14.jpg';
import image15 from './symmetriclens-nigel-cabour-element-cricket-collaboration-15.jpg';
import image16 from './symmetriclens-nigel-cabour-element-cricket-collaboration-16.jpg';


//change class name
class SL010 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Nigel Cabourn and Element come together to create a cricket inspired collection`, //main page title
            subtitle:`Reversible argyle`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,image16],
            article:(
                //main article
                <p><a href="/search?p=element">Element skateboards</a> and <a href="/search?p=nigel+cabourn">Nigel Cabourn</a> have come together to create a collection rooted in the history of British cricket. 

                <br/><br/>Having delved into archives of Nigel Cabourn’s late 80’s ‘Cricket’ label, element were inspired by pieces that reflected the philosophy and aesthetics of skateboarding.
                
                <br/><br/>The collection's overall palette of course includes a lot of the natural white synonymous with cricket, as well as colours fans of Cabourn would be familiar with, and a few 80’s highlights
                
                <br/><br/>The collection includes breathable, lightweight, (and in some cases reversible, argyle pattern revealing) 100% cotton staple pieces with an oversize fit, and are available to purchase from <a href="https://www.elementbrand.com/mens-collection-cabourn/">element’s web-store</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Nigel Cabourn x Element Skateboards; Cricket capsule collection</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-04-01").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL010;