import React from 'react';

import './ArticleGallery.css';

import img1 from '../Articles/2020/05/001/symmetriclens-supreme-barbour-1.jpg' 
import img2 from '../Articles/2020/04/003/symmetriclens-maharishi-spring-summer-2020-lookbook-1.jpg'
import img3 from '../Articles/2020/04/004/symmetriclens-nigel-cabour-element-cricket-collaboration-1.jpg'
import img4 from '../Articles/2020/03/001/symmetriclens-a-cold-wall-retrosuperfuture-sunglasses-1.jpg' 


class ArticleGallery extends React.Component {
    constructor(props){
        super(props)
        this.state={
            leadarticle:['leadvisible','leadnone','leadnone','leadnone'],
            articles:this.props.articles
        }
    }

    componentDidMount(){
        /*This is to change the classname of the articles below so that the css for them changes 
        so that every 8 seconds a different article is the lead picture at the top of the website */ 
        setInterval(()=>{
            let arr = this.state.leadarticle;
            let first = arr.shift();
            arr.push(first);
            this.setState({leadarticle:arr});
        },4000)
    }



    render(){
        return (
          <div>
            <a href="/article/burberry-reburberry-sustainable-ecological-20200522">
              <div className={this.state.leadarticle[0]}>
                <div className="leadarticles">
                  <img src={img1}/>
                </div>
                <h2 id="mainimgcap">Barbour x Supreme Spring 2020 capsule collection</h2>
              </div>
            </a>
            <a href="/article/maharishi-summer-lookbook-2020-20200409">
              <div className={this.state.leadarticle[1]}>
                <div className="leadarticles">
                  <img src={img2}/>
                </div>
                <h2 id="mainimgcap">Maharishi Spring Summer 2020 lookbook release</h2>
              </div>
            </a>
            <a href="/article/nigel-cabourn-element-skateboards-cricket-collection-20200401">
              <div className={this.state.leadarticle[2]}>
                <div className="leadarticles">
                  <img src={img3}/>
                </div>
                <h2 id="mainimgcap">Nigel Cabourn and Element come together to create a cricket inspired collection</h2>
              </div>
            </a>
            <a href="/article/a-cold-wall-retrosuperfuture-collaboration-sunglasses-20200320">
              <div className={this.state.leadarticle[3]}>
                <div className="leadarticles">
                  <img src={img4}/>
                </div>
                <h2 id="mainimgcap">A-COLD-WALL* x RETROSUPERFUTURE Sunglasses collaboration</h2>
              </div>
            </a>
            <div id="gallery-section">
            <div id="gallery-container">
              {this.state.articles
                .map((article) => {
                  return (
                    <div className="fullcontainer">
                      <a href={article.URL}>
                        <div className="imgcontainer">
                          <img src={article.image} className="articleimgs" alt={article.title}/>
                        </div>
                        <div className="articletitles">
                          <h3>{article.title}</h3>
                          <p className="gallery-date">{article.date}</p>
                          <p>{article.subtitle}</p>
                        </div>
                      </a>
                    </div>
                  );
                })}
            </div>
            </div>
          </div>
        );
    }
}

export default ArticleGallery;