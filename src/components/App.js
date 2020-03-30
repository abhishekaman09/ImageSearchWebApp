import React, { Component } from 'react';
import SearchBar from './SearchBar';
import unsplash from'../api/unsplash';
import Images from './Images';

class App extends Component {
    state={

        images:[]
    };
    onSearchSubmit=(term)=>{
        unsplash.get('/search/photos',{
            params:{query:term},
           
        }).then((response)=>{
            this.setState({images:response.data.results});
        });
    }
    render() { 
        return ( <div className="ui container" style={{marginTop:'30px'}}> 

            <SearchBar onSubmit={this.onSearchSubmit} />
            <Images  images={this.state.images}/>
        </div> );
    }
}
 
export default App;