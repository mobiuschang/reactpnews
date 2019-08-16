import React, {Component} from 'react';
import { debounce } from 'lodash';
import { Button, Input, Pagination, Search } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query:'',
            activePage:1
        }
    }

    chunkArticles = (articles) => {
        let result = [], chunk = 10;
        for (let i=0,j=articles.length; i<j; i+=chunk) {
            result.push(articles.slice(i,i+chunk));
        }

        return result;
    }

    handlePaginationChange = (e, { activePage }) => {
        let URL = `https://newsapi.org/v2/everything?q='${this.state.query}&page=${activePage}&pageSize=10&apiKey=35789dd31de94c20a9774f196179a7a0`;

        fetch(URL)
        .then(res => res.json())
        .then(data => {
            this.props.fetchArticles(data.articles);
            this.setState({ activePage })
        }).catch((error) => console.log(error))

        
    }

    searchQuery = ()=> {
        let URL = `https://newsapi.org/v2/everything?q='${this.state.query}&page=${this.state.activePage}&pageSize=10&apiKey=35789dd31de94c20a9774f196179a7a0`;

        fetch(URL)
            .then(res => res.json())
            .then(data => {
                //let chunkArticles = this.chunkArticles(data.articles);
                this.props.fetchArticles(data.articles);
            }).catch((error) => console.log(error))

    }

   onChange = (e) => {
       this.setState({
           query: e.target.value
       })
   } 
    render() {
        
        return(
            <React.Fragment>
                <Input
                    placeholder='Search...'
                    onChange={this.onChange}
                    value={this.state.query}
                />
                <Button
                    onClick={this.searchQuery}
                >
                    Search
                </Button>

                <Pagination
                    activePage={this.state.activePage}
                    onPageChange={this.handlePaginationChange}
                    totalPages={3}
                    ellipsisItem={null}
                    firstItem={null}
                    lastItem={null}
                    siblingRange={1}
                />
            </React.Fragment>
        )
    }
}



export default connect(null, {fetchArticles})(SearchBar);