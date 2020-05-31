import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-john-smedley-fragment-desgin-sea-island-cotton-1.jpg';
import image2 from './symmetriclens-john-smedley-fragment-desgin-sea-island-cotton-2.jpg';
import image3 from './symmetriclens-john-smedley-fragment-desgin-sea-island-cotton-3.jpg';
import image4 from './symmetriclens-john-smedley-fragment-desgin-sea-island-cotton-4.jpg';


//change class name
class SL2003003 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`John Smedley and Fragment design collaborate of a Sea Island Cotton t-shirt pack`, //main page title
            subtitle:`Made in England`, //subtitle
            images:[image1,image2,image3,image4],
            article:(
                //main article
                <p><a href="/search?q=john+smedley">John Smedley</a> and <a href="/search?q=fragment+design">Fragment Design</a> have come together to bring you a pack of sea island knitwear cotton t-shirts. 

                <br/><br/>Constructed in England, each pack sells for £680, and contains three t-shirts all with slightly different designs.
                
                <br/><br/>Available in either black or white to purchase through the John Smedley <a href="https://www.johnsmedley.jp/productitem" target="blank">website</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>John Smedley x Fragment Design, t-shirt pack</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-03-19").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2003003;