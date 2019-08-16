import React from 'react';
import { List } from 'semantic-ui-react';

const SearchItem = ({article}) => {
    return(
        <List.Item>
            <List.Content>
                <List.Header><a href={article.url}>{article.title}</a></List.Header>
            </List.Content>
        </List.Item>
    )
}

export default SearchItem;