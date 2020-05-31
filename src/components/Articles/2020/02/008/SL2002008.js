import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-mackintosh-jil-sander-1.jpg';
import image2 from './symmetriclens-mackintosh-jil-sander-2.jpg';
import image3 from './symmetriclens-mackintosh-jil-sander-3.jpg';
import image4 from './symmetriclens-mackintosh-jil-sander-4.jpg';
import image5 from './symmetriclens-mackintosh-jil-sander-5.jpg';
import image6 from './symmetriclens-mackintosh-jil-sander-6.jpg';
import image7 from './symmetriclens-mackintosh-jil-sander-7.jpg';


//change class name
class SL2002008 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Mackintosh x Jil Sander+ SS20 collection`, //main page title
            subtitle:`Prioritising comfort and authenticity`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7],
            article:(
                //main article
                <p><a href="/search?q=mackintosh">Mackintosh</a> x <a href="/search?q=jil+sander">Jil Sander+</a> is back for SS20.

                <br/><br/>The collection features a bonded linen (& bonded cotton) rain hat, a bonded cotton outer shirt, a bonded cotton field jacket for £2540, a bonded cotton blend single-breasted coat, and a bonded cotton (& cotton blend) shirt jacket
                
                <br/><br/>Jill Sander’s philosophy is plain to see in this collection, a prioritising of comfort and authenticity in her approach to modern luxury; combined with Mackintosh’s dedication to performance, these waterproof hand crafted pieces are available to purchase from the <a target="blank" href="https://www.mackintosh.com/gb/shopping/man/?query=jil%20sander">Mackintosh website</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Mackintosh x Jil Sander SS20</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-02-13").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2002008;