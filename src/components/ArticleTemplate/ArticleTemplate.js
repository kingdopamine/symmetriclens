import React from 'react';

import './ArticleTemplate.css';

let imgcounter = 0;


class ArticleTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainimg: this.props.images[0],
      imgnav:"img-nav-hidden",
      expandimg:"expand-img-hidden",
      templatecontainer:"templatecontainer"
      
    };
  }

  componentDidMount(){
    if(this.props.images.length > 1){
      this.setState({imgnav:"img-nav"})
    }
  }

  render() {
    
    return (
      <div id={this.state.templatecontainer}>
        <div id={this.state.expandimg} >
          <i class="fas fa-window-close" id="close-img-expansion"  onClick={()=>{this.setState({expandimg:"expand-img-hidden",templatecontainer:"templatecontainer"})}}></i>
          <img id="expanded-img" src={this.state.mainimg} alt={`${this.props.title} ${this.props.subtitle}`} />
        </div>
        <div id="navspace"/>
        <div id="articleimagescontainer">
          
          <img id="mainimg" src={this.state.mainimg} alt={`${this.props.title} ${this.props.subtitle}`} onClick={()=>{this.setState({expandimg:"expanded-img-container", templatecontainer:"templatecontainer-noscroll"})}}/>
          
          <div id={this.state.imgnav}>
            <i class="fas fa-chevron-circle-left" id="previous-img-button" onClick={()=>{
              if(imgcounter>0){
                imgcounter--;
                this.setState({mainimg:this.props.images[imgcounter]})
              } else {
                imgcounter=this.props.images.length-1;
                this.setState({mainimg:this.props.images[imgcounter]})
              }
              
          }}></i>
            <i class="fas fa-chevron-circle-right" id="next-img-button" onClick={()=>{
              if(imgcounter<this.props.images.length-1){
                imgcounter++;
                this.setState({mainimg:this.props.images[imgcounter]})
              } else {
                imgcounter=0;
                this.setState({mainimg:this.props.images[imgcounter]})
              }
              }}></i>
          </div>
          
          
          <div id="icongroup">
            {this.props.images.map((icon) => {
              if (this.props.images.length > 1 && imgcounter===this.props.images.indexOf(icon)) {
                return (
                  <div className="icon" id="iconcolour" onClick={()=>{
                    this.setState({mainimg:icon});
                    imgcounter=this.props.images.indexOf(icon)
                  }}/>
                );
              } else if(this.props.images.length > 1 ){
                return (
                  <div className="icon" onClick={()=>{
                    this.setState({mainimg:icon});
                    imgcounter=this.props.images.indexOf(icon)
                  }}/>
                );
              }
            })}
          </div>
        </div>
        
        <h1>{this.props.title}</h1>
        <p className="gallery-date">{this.props.date}</p>
        <p className="gallery-date">{this.props.subtitle}</p>
        <article>
        {this.props.article}
        </article>
        
      </div>
    );
  }
}

export default ArticleTemplate;