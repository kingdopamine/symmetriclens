import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-alxander-mcqueen-chelsea-boots-1.jpg';
import image2 from './symmetriclens-alxander-mcqueen-chelsea-boots-2.jpg';
import image3 from './symmetriclens-alxander-mcqueen-chelsea-boots-3.jpg';
import image4 from './symmetriclens-alxander-mcqueen-chelsea-boots-4.jpg';
import image5 from './symmetriclens-alxander-mcqueen-chelsea-boots-5.jpg';


//change class name
class SL2001003 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Alexander McQueen Chelsea Boots`, //main page title
            subtitle:`Silver-toned studs`, //subtitle
            images:[image1,image2,image3,image4,image5],
            article:(
                //main article
                <p><a href="/search?q=alexander+mcqueen">Alexander McQueen</a> have released a new take on the classic Chelsea Boot. Utilising their familiar thick black rubber soles, they have added silver-toned studs around the perimeter of the mid-sole.

                <br/><br/>Crafted in Italy from smooth black leather, it includes the iconic elasticated black side panels, and logo-jacquard pull tabs.
                
                <br/><br/><a target="blank" href="https://www.matchesfashion.com/products/1314723?c3ch=LinkShare&c3nid=9ieob0c66Uo&qxjkl=tsid:30065|cgn:9ieob0c66Uo&rffrid=aff.linkshare.3271293.35725">Available from MATCHESFASHION</a> for £620</p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Alexander McQueen Chelsea Boots</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-01-05").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2001003;