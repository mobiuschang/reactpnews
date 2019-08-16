import React, {Component} from 'react';
import { debounce } from 'lodash';
import { Button, Input, Search } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query:''
        }
    }

    searchQuery = ()=> {
        let URL = `https://newsapi.org/v2/everything?q='${this.state.query}&apiKey=35789dd31de94c20a9774f196179a7a0`;

        fetch(URL)
            .then(res => res.json())
            .then(data => {
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
            </React.Fragment>
        )
    }
}



export default connect(null, {fetchArticles})(SearchBar);