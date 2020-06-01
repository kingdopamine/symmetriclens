import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-browns-stone-island-1.jpg';
import image2 from './symmetriclens-browns-stone-island-2.jpg';


//change class name
class SL2001012 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Stone Island x Browns capsule`, //main page title
            subtitle:`Blue Camouflage Parka`, //subtitle
            images:[image1,image2],
            article:(
                //main article
                <p><a href="/search?q=browns">Browns</a> and <a href="/search?q=stone+island">Stone Island</a> have come together for a new exclusive capsule collection.

                <br/><br/>All items sporting a blue camouflage design, the capsule includes a Stone Island parka. Made from 70% Cotton and 30% Polyamide, it sells for £850 on <a target="blank" href="https://www.brownsfashion.com/uk/shopping/stone-island-camouflage-parka-jacket-14689072">Browns’ website</a>
                
                <br/><br/>Below is a promotional video featuring modern dancer Abdourahman Njie
                
                <br/><br/><iframe width="560" height="315" src="https://www.youtube.com/embed/TDDB8M3Z74A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Stone Island x Browns SS20"></iframe></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Stone Island x Browns capsule</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-01-30").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2001012;