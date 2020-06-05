import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-burberry-gosha-rubchinskiy-fw18-1.jpg';
import image2 from './symmetriclens-burberry-gosha-rubchinskiy-fw18-2.jpg';
import image3 from './symmetriclens-burberry-gosha-rubchinskiy-fw18-3.jpg';
import image4 from './symmetriclens-burberry-gosha-rubchinskiy-fw18-4.jpg';
import image5 from './symmetriclens-burberry-gosha-rubchinskiy-fw18-5.jpg';
import image6 from './symmetriclens-burberry-gosha-rubchinskiy-fw18-6.jpg';
import image7 from './symmetriclens-burberry-gosha-rubchinskiy-fw18-7.jpg';
import image8 from './symmetriclens-burberry-gosha-rubchinskiy-fw18-8.jpg';


//change class name
class SL2006002 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`REVISITED: Burberry x Gosha Rubchinskiy FW18`, //main page title
            subtitle:`Reconstructed Flannel shirts`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8],
            article:(
                //main article
                <p>Today we revisit <a href="/search?q=burberry">Burberry</a>’s FW18 capsule collection collaboration with <a href="/search?q=gosha+rubchinskiy">Gosha Rubchinskiy</a>, the second between two.

                <br/><br/>The collection featured 13 pieces; 3 beechwood toggle duffle coats with detachable hood (one in green, red, and classic check Burberry tartan), reconstructed flannel shirts, penny loafers, cashmere scarves, and bucket hats</p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>REVISITED: Burberry x Gosha Rubchinskiy FW18</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-06-05").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2006002;