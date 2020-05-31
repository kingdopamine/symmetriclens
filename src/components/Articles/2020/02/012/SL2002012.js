import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-vivienne-westwood-orb-pendant-1.jpg';
import image2 from './symmetriclens-vivienne-westwood-orb-pendant-2.jpg';
import image3 from './symmetriclens-vivienne-westwood-orb-pendant-3.jpg';
import image4 from './symmetriclens-vivienne-westwood-orb-pendant-4.jpg';
import image5 from './symmetriclens-vivienne-westwood-orb-pendant-5.jpg';


//change class name
class SL2002012 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`3 new Vivienne Westwood orb logo pendants`, //main page title
            subtitle:`Featuring Swarvoski crystals`, //subtitle
            images:[image1,image2,image3,image4,image5],
            article:(
                //main article
                <p><a href="/search?q=vivienne+westwood">Vivienne Westwood</a> has released three new orb logo design pendant necklaces

                <br/><br/>All on a chain-link necklace, the first has a Swarovski crystal-embellished carved small silver orb available for £120. 
                <br/>The second (the Silver Hecuba Pendant necklace) features a blue x black x white enamel detailing which represents the orb of the pendant; this sells for £140. 
                <br/>Thirdly we have the Silver Ornelia Double-Sided Pendant, which features a reversible carved logo, enamelled in white on one side and black on the other; available for £100.
                
                <br/><br/>Check them all out on SSENSE: <a target="blank" href="https://www.ssense.com/en-gb/men/product/vivienne-westwood/silver-crystal-small-orb-pendant-necklace/5007321">Silver Crystal Small Orb</a>, <a target="blank" href="https://www.ssense.com/en-gb/men/product/vivienne-westwood/silver-hecuba-pendant-necklace/5008431">Silver Hecuba</a>, <a target="blank" href="https://www.ssense.com/en-gb/men/product/vivienne-westwood/silver-ornella-double-sided-pendant-necklace/5007421">Silver Ornelia Double-Sided</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Vivienne Westwood orb logo pendants</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-02-25").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2002012;