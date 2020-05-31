import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-a-cold-wall-shirting-1.jpg';
import image2 from './symmetriclens-a-cold-wall-shirting-2.jpg';
import image3 from './symmetriclens-a-cold-wall-shirting-3.jpg';
import image4 from './symmetriclens-a-cold-wall-shirting-4.jpg';
import image5 from './symmetriclens-a-cold-wall-shirting-5.jpg';
import image6 from './symmetriclens-a-cold-wall-shirting-6.jpg';
import image7 from './symmetriclens-a-cold-wall-shirting-7.jpg';
import image8 from './symmetriclens-a-cold-wall-shirting-8.jpg';
import image9 from './symmetriclens-a-cold-wall-shirting-9.jpg';
import image10 from './symmetriclens-a-cold-wall-shirting-10.jpg';


//change class name
class SL2004008 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`A-COLD-WALL* Shirting collection`, //main page title
            subtitle:`Features a metal-hardware rhombus shaped badge`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10],
            article:(
                //main article
                <p><a href="/search?q=a+cold+wall">A-COLD-WALL*</a>’s Spring Summer 2020 Shirting collection is now available. 
                <br/>It features 5 pieces, all in either black or white.
                <br/>The most unique piece in the collection is an all black textured nylon utility shirt with two 3d front  pockets, one of which sports a screen-printed ACW* logo, which is also present on the back. The chest of the shirt is padded, and utilises a press-stud closure system; this piece retails for £330.
                
                <br/><br/>The remaining shirts are all made from 100% cotton, and apart from a long sleeved white shirt which sports the ACW* logo over the left breast, they all instead feature a metal-hardware rhombus shaped badge
                
                <br/><br/>Available now from the <a href="https://a-cold-wall.com/collections/shirting" target="blank">A-COLD-WALL*</a> website</p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>A-COLD-WALL* Shirting collection</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-04-02").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2004008;