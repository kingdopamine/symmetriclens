import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-ymc-asics-tarther-og-1.jpg';
import image2 from './symmetriclens-ymc-asics-tarther-og-2.jpg';
import image3 from './symmetriclens-ymc-asics-tarther-og-3.jpg';
import image4 from './symmetriclens-ymc-asics-tarther-og-4.jpg';
import image5 from './symmetriclens-ymc-asics-tarther-og-5.jpg';
import image6 from './symmetriclens-ymc-asics-tarther-og-6.jpg';


//change class name
class SL2001008 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`YMC x ASICS: Tarther Og`, //main page title
            subtitle:`Leather laces and Ikat prints`, //subtitle
            images:[image1,image2,image3,image4,image5,image6],
            article:(
                //main article
                <p><a href="/search?q=ymc">YMC</a> and <a href="/search?q=asics">ASICS</a> together again, this time for a new iteration on the Tarther Og.

                <br/><br/>Inspired by the late 80’s 'Madchester' scene, these trainers express YMC’s taste for strong colourful prints, this time more specifically an Ikat print. 
                
                <br/><br/>With the exception of the print, the uppers are made with either Blue or Caramel Suede, and with the YMC logo embroidered on smooth leather heel-cups.
                
                <br/><br/>Another stand out feature is the use of leather laces
                
                <br/><br/>These gum outsole sneakers retail for £100 on <a href="https://www.youmustcreate.com/product/menswear/mens-footwear/tarther-og-trainer/" target="blank">the YMC website</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>YMC x ASICS: Tarther Og</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-01-03").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2001008;