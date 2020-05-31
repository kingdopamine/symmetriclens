import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-vivienne-westwood-penis-carabiner.jpg';


//change class name
class SL2003007 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Vivienne Westwood’s phallic key-ring carabiner`, //main page title
            subtitle:`Features the iconic orb`, //subtitle
            images:[image1],
            article:(
                //main article
                <p><a href="/search?q=vivienne+westwood">Vivienne Westwood</a> evokes memories of her 70’s punk fashion-house SEX with this latest release; a silver penis-shaped carabiner key ring which includes her iconic orb logo.

                Available for £81 <a href="https://www.ssense.com/en-us/men/product/vivienne-westwood/silver-penis-carabiner-keyring/5010091?ranMID=41610&ranEAID=9ieob0c66Uo&ranSiteID=9ieob0c66Uo-JCQiV9LpqKPLZYunmtLF6w&utm_source=ls_APAC_9ieob0c66Uo&utm_medium=affiliate&utm_campaign=generic&utm_term=1&siteID=9ieob0c66Uo-JCQiV9LpqKPLZYunmtLF6w" target="blank">over at SSENSE</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Vivienne Westwood Carabiner</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-03-11").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2003007;