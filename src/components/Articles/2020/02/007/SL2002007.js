import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-craig-green-ssense-capsule-1.jpg';
import image2 from './symmetriclens-craig-green-ssense-capsule-2.jpg';
import image3 from './symmetriclens-craig-green-ssense-capsule-3.jpg';
import image4 from './symmetriclens-craig-green-ssense-capsule-4.jpg';
import image5 from './symmetriclens-craig-green-ssense-capsule-5.jpg';
import image6 from './symmetriclens-craig-green-ssense-capsule-6.jpg';
import image7 from './symmetriclens-craig-green-ssense-capsule-7.jpg';
import image8 from './symmetriclens-craig-green-ssense-capsule-8.jpg';
import image9 from './symmetriclens-craig-green-ssense-capsule-9.jpg';


//change class name
class SL2002007 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Craig Green x SSENSE capsule collection`, //main page title
            subtitle:`Embroidered orange silk satin panels`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9],
            article:(
                //main article
                <p>Exclusive to <a href="/search?q=ssense">SSENSE</a>; a new <a href="/search?q=craig+green">Craig Green</a> capsule.

                <br/><br/>The collection makes an extensive use of black, and every piece features either military green, quilting, orange lace, or orange embroidery.
                
                <br/><br/>The collection can be purchased and viewed in detail from <a target="blank" href="https://www.ssense.com/en-us/men/designers/craig-green">SSENSE’s website</a>, which includes a long sleeve (with decorative gloves attached) cotton poplin hoodie with embroidered orange silk satin panels for £1070</p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Craig Green x SSENSE capsule</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-02-15").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2002007;