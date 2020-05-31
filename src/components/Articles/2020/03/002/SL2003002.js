import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-reebok-cottweiler-zig-3d-storm-1.jpg';
import image2 from './symmetriclens-reebok-cottweiler-zig-3d-storm-2.jpg';
import image3 from './symmetriclens-reebok-cottweiler-zig-3d-storm-3.jpg';
import image4 from './symmetriclens-reebok-cottweiler-zig-3d-storm-4.jpg';
import image5 from './symmetriclens-reebok-cottweiler-zig-3d-storm-5.jpg';


//change class name
class SL2003002 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Reebok and Cottweiler ‘Zig 3D Storm’ collaboration`, //main page title
            subtitle:`Two British heavy-weights`, //subtitle
            images:[image1,image2,image3,image4,image5],
            article:(
                //main article
                <p>Two British heavy-weights, <a href="/search?q=reebok">Reebok</a> and <a href="/search?q=cottweiler">Cottweiler</a>, come together again; this time to redesign Reebok’s iconic Zig Kinetica trainer, calling it the ‘Zig 3D Storm’; as well as an apparel line to compliment the sneakers

                <br/><br/>The trainers come in 3 colour schemes; red and white; blue and white; black, blood-red, and blue. 
                
                <br/><br/>The sneaker offers a chunky zig-zag sole design, which with the white sneakers also featuring a semi-translucent mesh uppers, gives a very futuristic aesthetic
                
                <br/><br/>These £150 trainers are available from <a href="https://www.endclothing.com/gb/reebok-x-cottweiler-zig-3d-storm-fw0285.html" target="blank">End Clothing</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Reebok x Cottweiler; the Zig 3D Storm</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-03-21").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2003002;