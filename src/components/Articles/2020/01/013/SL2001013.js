import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-reebok-kenzo-minami-zig-kinetica-r58-2020-1.jpg';
import image2 from './symmetriclens-reebok-kenzo-minami-zig-kinetica-r58-2020-2.jpg';
import image3 from './symmetriclens-reebok-kenzo-minami-zig-kinetica-r58-2020-3.jpg';
import image4 from './symmetriclens-reebok-kenzo-minami-zig-kinetica-r58-2020-4.jpg';


//change class name
class SL2001013 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Reebok x Kenzo Minami: Zig Kinetica R58`, //main page title
            subtitle:`Warping Spacetime`, //subtitle
            images:[image1,image2,image3,image4],
            article:(
                //main article
                <p>Similar in theme to their recent Instapump Fury collaboration, <a href="/search?q=kenzo+minami">Kenzo Minami</a> and <a href="/search?q=reebok">Reebok</a> have taken on the Zig Kinetica R58 this time.

                <br/><br/>These round toed intricately patterned zig-zag soled trainers are meant to abstractly interpret the concept of time and space, breaking through the barrier, and entering warp speed distorting space-time.
                
                <br/><br/>Selling for £150 <a target="blank" href="https://www.farfetch.com/uk/shopping/men/reebok-x-zig-kinetica-x-kenzo-minami-sneakers-item-15020304.aspx">through Farferch</a>, the uppers are constructed with 100% Polyamide</p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Reebok x Kenzo Minami: Zig Kinetica R58</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-01-16").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2001013;