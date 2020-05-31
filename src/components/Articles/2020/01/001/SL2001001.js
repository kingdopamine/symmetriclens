import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-alexander-mcqueen-3d-ss20-trainers-1.jpg';
import image2 from './symmetriclens-alexander-mcqueen-3d-ss20-trainers-2.jpg';
import image3 from './symmetriclens-alexander-mcqueen-3d-ss20-trainers-3.jpg';


//change class name
class SL2001001 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Alexander McQueen SS20 trainers`, //main page title
            subtitle:`3D-effect on uppers’ heel`, //subtitle
            images:[image1,image2,image3],
            article:(
                //main article
                <p><a href="/search?q=alexander+mcqueen">Alexander McQueen</a> have released a new oversized round toe low-top leather sneaker. What set’s this one apart is the 3D effect created on the heel of the sneaker by the layerederd form of white printing.

                <br/><br/>These black (with the exception of the uppers’ heel and the interior) leather and rubber soled trainers are available from <a target="blank" href="https://www.brownsfashion.com/uk/shopping/alexander-mcqueen-black-and-white-oversized-sneakers-14571783">Browns’ website</a> for £560</p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Alexander McQueen SS20 trainers</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-01-22").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2001001;