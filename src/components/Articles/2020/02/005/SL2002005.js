import React from 'react';
import MetaTags from 'react-meta-tags';


import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-garbstore-nanamica-gor-tex-coat-1.jpg';
import image2 from './symmetriclens-garbstore-nanamica-gor-tex-coat-2.jpg';
import image3 from './symmetriclens-garbstore-nanamica-gor-tex-coat-3.jpg';
import image4 from './symmetriclens-garbstore-nanamica-gor-tex-coat-4.jpg';
import image5 from './symmetriclens-garbstore-nanamica-gor-tex-coat-5.jpg';


//change class name
class SL2002005 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Garbstore x Nanamica GOR-TEX coat`, //main page title
            subtitle:`A-line cut`, //subtitle
            images:[image1,image2,image3,image4,image5],
            article:(
                //main article
                <p><a href="/searc?q=garbstore">Garbstore</a> has collaborated with <a href="/searc?q=nanamica">Nanamic</a> to bring you this GOR-TEX Soutien Collar Coat with Check pattern.

                <br/><br/>This 100% brethable nylon coat has been cut in a relaxed A-line silhouette from a crisp cotton outer with 3 layers of GORE-TEX lining, ensure waterproofing
                
                <br/><br/>The £705 jacket is available exclusively at Garbstore, which can be purchased <a href="https://www.couvertureandthegarbstore.com/gore-tax-soutien-collar-coat-black-watch.html" target="blank">from their website</a></p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Garbstore x Nanamica GOR-TEX coat</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-02-19").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2002005;