import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-barbour-kaptain-sunshine-1.jpg';
import image2 from './symmetriclens-barbour-kaptain-sunshine-2.jpg';
import image3 from './symmetriclens-barbour-kaptain-sunshine-3.jpg';
import image4 from './symmetriclens-barbour-kaptain-sunshine-4.jpg';
import image5 from './symmetriclens-barbour-kaptain-sunshine-5.jpg';
import image6 from './symmetriclens-barbour-kaptain-sunshine-6.jpg';
import image7 from './symmetriclens-barbour-kaptain-sunshine-7.jpg';
import image8 from './symmetriclens-barbour-kaptain-sunshine-8.jpg';


//change class name
class SL2002003 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Barbour x KAPTAIN SUNSHINE waxed parrafin parkas`, //main page title
            subtitle:`Infused with Shinsuke Kojima’s aesthetic`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8],
            article:(
                //main article
                <p><a href="/search?q=kaptain+sunshine">KAPTAIN SUNSHINE</a> designer Shinsuke Kojima has infused his brands style with <a href="/search?q=barbour">Barbour</a>’s classic waxed paraffin parkas, in both standard length and 3/4 length.

                <br/><br/>Available in both black and khaki, the jackets sell for just under £500, which you can purchase <a href="https://baycrews.jp/item/detail/journalstandard/blouson/20011610005010" target="blank">through Journal Standard</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Barbour x KAPTAIN SUNSHINE Parka capsule</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-02-13").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2002003;