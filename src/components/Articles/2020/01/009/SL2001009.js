import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-reebok-kenzo-minami-instapump-fury-2020-1.jpg';
import image2 from './symmetriclens-reebok-kenzo-minami-instapump-fury-2020-2.jpg';
import image3 from './symmetriclens-reebok-kenzo-minami-instapump-fury-2020-3.jpg';
import image4 from './symmetriclens-reebok-kenzo-minami-instapump-fury-2020-4.jpg';


//change class name
class SL2001009 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Kenzo Minami x Reebok: Instapump Fury`, //main page title
            subtitle:`Reflectins Minami’s proclivity towards intricate patterns`, //subtitle
            images:[image1,image2,image3,image4],
            article:(
                //main article
                <p><a href="/search?q=kenzo+minami">Kenzo Minami</a> has come together with <a href="/search?q=reebok">Reebok</a> after a 15 year break in partnership, for a new take on the Instapump Fury. 

                <br/><br/>This black and white op-art checkered  sneaker design reflects Minami’s proclivity towards intricate patterns.
                
                <br/><br/>Minami’s first take on the Instapump Fury over a decade ago are currently being sold in the secondary market for 15x the price of these new sneakers, so don’t be surprised if they end up doing the same; retailing at £136 on <a target="blank" href="https://sneakerstudio.com/product-eng-28353-Reebok-x-Kenzo-Minami-Instapump-Fury-FW9462.html">sneaker studio</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Kenzo Minami x Reebok: Instapump Fury</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-01-09").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2001009;