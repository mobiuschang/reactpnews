import React from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';


function App() {
  return (
    <Grid padded>
      <Grid.Row>
        <Grid.Column>
          <SearchBar />
          <SearchResults />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default App;
