import React from 'react'



class Clothing extends React.Component {

    constructor(props){
        super(props)
        this.state={
            articles:this.props.articles
        }
    }

    render(){
        return (

            <div id="navspace">
                <div id="gallery-container">
                {this.state.articles
                    .map((article) => {
                        if(article.category.includes('clothing')){
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
                        }
                    
                    })}
                </div>
            </div>

        )
    }
} 

export default Clothing;