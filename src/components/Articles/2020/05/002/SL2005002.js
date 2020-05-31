import React from 'react';
import MetaTags from 'react-meta-tags';

import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-jw-anderson-tubular-knitwear-1.jpg';
import image2 from './symmetriclens-jw-anderson-tubular-knitwear-2.jpg';
import image3 from './symmetriclens-jw-anderson-tubular-knitwear-3.jpg';
import image4 from './symmetriclens-jw-anderson-tubular-knitwear-4.jpg';
import image5 from './symmetriclens-jw-anderson-tubular-knitwear-5.jpg';
import image6 from './symmetriclens-jw-anderson-tubular-knitwear-6.jpg';
import image7 from './symmetriclens-jw-anderson-tubular-knitwear-7.jpg';

//change class name
class SL2005002 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`JW Anderson's SS20 experimental cut-out knitwear is now available`, //main page title
            subtitle:`A multi-coloured statement piece`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7],
            article:(
                //main article
                <p>The <a href="/search?q=jw+anderson">JW Anderson</a> tubular jumper and cardigan from JW Anderson’s Spring/Summer 2020 collection are now finally available for purchase. 

                <br/><br/>Retailing for £820 from the <a href="https://www.jwanderson.com/gb/shopping/tubular-jumper-14688040" target="blank">JW Anderson web store</a>, these unique knitted pieces made of 100% virgin wool exemplify the deconstructionst experimental theme of JW Anderson’s SS20 runway show.</p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>JW Anderson experimental knitwear available for purchase</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-05-14").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2005002;