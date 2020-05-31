import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-ahluwalia-matchesfashion-capsule-collection-1.jpg';
import image2 from './symmetriclens-ahluwalia-matchesfashion-capsule-collection-2.jpg';
import image3 from './symmetriclens-ahluwalia-matchesfashion-capsule-collection-3.jpg';
import image4 from './symmetriclens-ahluwalia-matchesfashion-capsule-collection-4.jpg';
import image5 from './symmetriclens-ahluwalia-matchesfashion-capsule-collection-5.jpg';
import image6 from './symmetriclens-ahluwalia-matchesfashion-capsule-collection-6.jpg';
import image7 from './symmetriclens-ahluwalia-matchesfashion-capsule-collection-7.jpg';
import image8 from './symmetriclens-ahluwalia-matchesfashion-capsule-collection-8.jpg';
import image9 from './symmetriclens-ahluwalia-matchesfashion-capsule-collection-9.jpg';
import image10 from './symmetriclens-ahluwalia-matchesfashion-capsule-collection-10.jpg';
import image11 from './symmetriclens-ahluwalia-matchesfashion-capsule-collection-11.jpg';


//change class name
class SL2004006 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Ahluwalia drops collection exclusive to MATCHESFASHION`, //main page title
            subtitle:`Made from reclaimed fabrics`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11],
            article:(
                //main article
                <p><a href="/search?q=matchesfashion">MATCHESFASHION</a> has released and exclusive capsule collection with Londoner Priya Ahluwalia’s ‘<a href="/search?q=ahluwalia">Ahluwalia Studio</a>’ label.
                <br/>The collection celebrates the past, through it’s exclusive use of deadstock vintage textiles, which are put together in a very dynamic way through an extensive use of patchwork design; a very sustainable approach to fashion.
                
                <br/><br/>The most expensive item in this 11-piece collection (£750) is a safari style silhouette shirt made from a “reclaimed” striped cotton fabric,
                
                <br/><br/>All items are available now from <a href="https://www.matchesfashion.com/mens/designers/ahluwalia?qxjkl=tsid:30065|cgn:9ieob0c66Uo&c3ch=LinkShare&c3nid=9ieob0c66Uo&utm_source=linkshare&utm_medium=affiliation&utm_campaign=uk&utm_content=9ieob0c66Uo&rffrid=aff.linkshare.3271293.35725" target="blank">MATCHESFASHION</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>new Ahluwalia capsule exclusive to MATCHESFASHION</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-04-22").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2004006;