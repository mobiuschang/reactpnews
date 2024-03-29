import React, { Component } from 'react';

import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import SearchItem from './SearchItem';
import { Divider, Pagination, Grid} from 'semantic-ui-react'

class SearchResults extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: 1,
            articles: this.props.articles,
            currentArticles: []
    
        }
      }

    handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

    render(){
        const { activePage} = this.state;
        // let articleChunks = [];
        // let currentArticles = this.props.articles[activePage];

        return(
            <React.Fragment>
                 <List divided relaxed>
                  {
                      this.props.articles.map((article, index) => {
                        return <SearchItem key={index} article={article} />
                     })
                  }
                </List>
                <Divider hidden />
                
                {/* <Pagination
                    activePage={activePage}
                    onPageChange={this.handlePaginationChange}
                    totalPages={this.props.articles.length}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                /> */}
            </React.Fragment>
           
               
            
        )
    }
}

function mapStateToProps (state){
    return { 
        articles: state.articles
    }
}

export default connect(mapStateToProps)(SearchResults);