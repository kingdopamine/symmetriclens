import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetric-lens-garbstore-ss20-1.jpg';
import image2 from './symmetric-lens-garbstore-ss20-2.jpg';
import image3 from './symmetric-lens-garbstore-ss20-3.jpg';
import image4 from './symmetric-lens-garbstore-ss20-4.jpg';
import image5 from './symmetric-lens-garbstore-ss20-5.jpg';
import image6 from './symmetric-lens-garbstore-ss20-6.jpg';
import image7 from './symmetric-lens-garbstore-ss20-7.jpg';
import image8 from './symmetric-lens-garbstore-ss20-8.jpg';
import image9 from './symmetric-lens-garbstore-ss20-9.jpg';
import image10 from './symmetric-lens-garbstore-ss20-10.jpg';



//change class name
class SL2002004 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Garbstore Spring Summer 2020 collection`, //main page title
            subtitle:`Japanese Cordura`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8,image9,image10],
            article:(
                //main article
                <p><a href="/search?q=garbstore">Garbstore</a>’s Spring Summer 2020 collection has been revealed.

                <br/><br/>Centralised around Japanese Cordura, the mainly khaki, military green, and navy, collection features engineer coats for £295, crammer jackets, field jackets, work jackets, and over-shirts, all with shorts as well as trousers to match the aforementioned  upper-body clothing.
                <br/>The collection also features a range of shirts all with a spot-pattern
                
                <br/><br/>The full collection can be checked in further detail or purchased <a href="https://www.couvertureandthegarbstore.com/men/latest.html?brand=Garbstore&gclid=Cj0KCQjwn7j2BRDrARIsAHJkxmzH2xYkDUHSWUlfEHXfACkOI3K_Mp3UBOxe2L_XSSfI5YwunVCP48IaAvDhEALw_wcB" target="blank">here from Garbstore’s website</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Garbstore SS20 collection</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-02-25").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2002004;