import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-browns-the-dan-life-squirtle-1.jpg';
import image2 from './symmetriclens-browns-the-dan-life-squirtle-2.jpg';
import image3 from './symmetriclens-browns-the-dan-life-squirtle-3.jpg';


//change class name
class SL2002011 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Browns x The Dan Life Squirtle Necklace`, //main page title
            subtitle:`Hand-set Swarovski crystals`, //subtitle
            images:[image1,image2,image3],
            article:(
                //main article
                <p>London Luxury Retailer <a href="/search?q=browns">Browns</a> has reunited with <a href="/search?q=the+dan+life">The Dan Life</a> for a new exclusive necklace. 

                <br/><br/>Depicting the Pokémon character Squirtle striking a cool pose whilst wearing sunglasses, the necklace is set with Swarovski crystals by hand and can be bought from <a target="blank" href="https://www.brownsfashion.com/shopping/browns-x-the-dan-life-silver-tone-squirtle-crystal-necklace-14962155?">Brown’s website</a> for £430</p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Browns x The Dan Life Squirtle Necklace</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-02-18").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2002011;