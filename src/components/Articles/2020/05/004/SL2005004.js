import React from 'react';
import MetaTags from 'react-meta-tags';

import ArticleTemplate from '../../../../ArticleTemplate/ArticleTemplate'


//images for the main image slider
import image1 from './symmetriclens-reebok-instapump-fury-takua-kamioka-1.jpg';
import image2 from './symmetriclens-reebok-instapump-fury-takua-kamioka-2.jpg';
import image3 from './symmetriclens-reebok-instapump-fury-takua-kamioka-3.jpg';
import image4 from './symmetriclens-reebok-instapump-fury-takua-kamioka-4.jpg';
import image5 from './symmetriclens-reebok-instapump-fury-takua-kamioka-5.jpg';
import image6 from './symmetriclens-reebok-instapump-fury-takua-kamioka-6.jpg';
import image7 from './symmetriclens-reebok-instapump-fury-takua-kamioka-7.jpg';
import image8 from './symmetriclens-reebok-instapump-fury-takua-kamioka-8.jpg';


//change class name
class SL2005004 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:`Reebok and Takuya Kamioka bring to life the artist’s Instapump Fury 25th anniversary celebratory mural`, //main page title
            subtitle:`Citron`, //subtitle
            images:[image1,image2,image3,image4,image5,image6,image7,image8],
            article:(
                //main article
                <p><a href="/search?q=reebok">Reebok’s</a> iconic Instapump Fury has been reworked by Japanese artist <a href="/search?q=takuya+kamioka">Takuya Kamioka</a>. Well known for his jacket customisations for various musicians, he painted a mural of the Instapump Fury during the celebration of the 25th anniversary of the sneaker at the ‘Reebok 90s House’ museum in Harajuku in 2019.<br/><br/>
                This collaborations luminescent yellow x black colour scheme has been emulated directly from the aforementioned mural (known as “Citron”), and also features Takuya’s signature on the side of the heel, as well his artwork on the insole.<br/><br/>
                
                Available from <a href="https://www.atmos-tokyo.com/items/fx4261" target="blank">atmos</a> for ¥ 18,000 JPY (£137.47 GBP)</p>
            
            )

        }
    }

    render(){//Meta tag title (should be truncated version of main page title), change date as well
        return (
            <div>
                <MetaTags>
                    <title>Reebok x Takyka Kamioka Instapump Fury collaboration</title>
                    <meta name="description" content={`${this.state.title}: ${this.state.subtitle} - British Luxury Fashion Brands`}/>
                </MetaTags>
                <ArticleTemplate title={this.state.title} subtitle={this.state.subtitle} article={this.state.article} images={this.state.images} date={new Date("2020-05-07").toDateString()}/>
            </div>
        )
    }
}
//export file
export default SL2005004;