import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-a-cold-wall-tote-bag-1.jpg';
import image2 from './symmetriclens-a-cold-wall-tote-bag-2.jpg';
import image3 from './symmetriclens-a-cold-wall-tote-bag-3.jpg';

//change class name
class SL2002001 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`A-COLD-WALL* pipe wrapped tote bag`, //main page title
            subtitle:`A very modernist aesthetic`, //subtitle
            images:[image1,image2,image3],
            article:(
                //main article
                <p>For SS20, <a href="/search?q=a+cold+wall">A-COLD-WALL*</a> is out with a new take on the tote bag.

                <br/><br/>Constructed using a silver-grey toned nylon, the bag features a transparent pipe that wraps around and cradles the bag, giving it a very modernist aesthetic 
                
                <br/><br/>The bag can be <a href="https://www.brownsfashion.com/uk/shopping/a-cold-wall-grey-padded-tote-bag-14761511" target="blank">purchased from Browns</a> for £570</p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>A-COLD-WALL* tote bag</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-02-27").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2002001;