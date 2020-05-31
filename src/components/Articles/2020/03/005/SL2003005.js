import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-nigel-cabourn-mihara-yasuhiro-M-47-french-military-army-combat-shoe-1.jpg';
import image2 from './symmetriclens-nigel-cabourn-mihara-yasuhiro-M-47-french-military-army-combat-shoe-2.jpg';
import image3 from './symmetriclens-nigel-cabourn-mihara-yasuhiro-M-47-french-military-army-combat-shoe-3.jpg';
import image4 from './symmetriclens-nigel-cabourn-mihara-yasuhiro-M-47-french-military-army-combat-shoe-4.jpg';
import image5 from './symmetriclens-nigel-cabourn-mihara-yasuhiro-M-47-french-military-army-combat-shoe-5.jpg';
import image6 from './symmetriclens-nigel-cabourn-mihara-yasuhiro-M-47-french-military-army-combat-shoe-6.jpg';

//change class name
class SL2003005 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Nigel Cabourn x Mihara Yasuhiro, Army Combat Shoe release`, //main page title
            subtitle:`Inspired by the French military M-47`, //subtitle
            images:[image1,image2,image3,image4,image5,image6],
            article:(
                //main article
                <p>This shoe was designed by <a href="/search?q=nigel+cabourn">Nigel Cabourn</a>, in collaboration with <a href="/search?q=mihara+yasuhiro">Mihara Yasuhiro</a>.
                <br/>Inspired by the M-47 (a french military boot), it has been infused with Mihara’s modernist style and Cabourn’s eye for colour and fabric.
                
                <br/><br/>The aptly named Combat Show is of course made with 100% cotton camo green uppers and laces, as well as black thick rubber soles, the tread of which are vermillion-orange, along with vemillion-orange stitching to compliment, whilst simultaneously connecting the uppers to the sole
                
                <br/><br/>This durable (low-top, comfortable) sneaker retails for £320 on the Nigel Cabourn <a href="https://www.cabourn.com/nigel-cabourn-x-mihara-army-combat-shoe" target="blank">website</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Nigel Cabourn x Mihara Yasuhiro, army combat shoe collaboration</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-03-10").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2003005;