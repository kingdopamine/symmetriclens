import React from 'react';
import queryString from 'query-string';

import './SearchPage.css';

class SearchPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            articles:this.props.articles
        }
     

    }

//we convert the brand string and the search string to lowercase so that we can find a match regardless of which casing was used in the search term
//we query the url by using props.location.search, which received it's props from react-router {...props}
//we're using npm's querystring instead of the factory 'URLSearchParams' to ensure browser compatibility
    
    render(){

        let emptyArr = ['no-results']

        return (
          <div id="navspace">

            <div id="gallery-container">
              {this.state.articles
                .map((article) => {
                    let lowercase = article.brands.map(brand => brand.toLowerCase())
                    
                    if(lowercase.includes(queryString.parse(this.props.location.search).q.toLowerCase())){
                        
                        emptyArr = ['no-results-hidden']
                        return (
                            <div className="fullcontainer">
                              <a href={article.URL}>
                                <div className="imgcontainer">
                                  <img src={article.image} className="articleimgs" alt={article.title}/>
                                </div>
                                <div className="articletitles">
                                  <h3>{article.title}</h3>
                                  <p>{article.subtitle}</p>
                                </div>
                              </a>
                            </div>
                          );
                    } 
                }
                    
                )} 
                <h3 id={emptyArr[0]}>We're sorry, your search term returned no results, please try another...</h3>
            </div>
            
          </div>
          
        );

        
    }
}

export default SearchPage;