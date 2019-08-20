import React, { Component } from 'react';
import Search from '../components/search';
import Artistlist from '../components/artistlist';

/*---------------- Redux ---------------------------*/
import { connect } from 'react-redux';
import { artistsListAll , artistList } from '../actions';
import { bindActionCreators } from 'redux';

class HomeContainer extends Component { 
    
    componentWillMount() {
         this.props.artistsListAll()
    }


    getKeywords = (event) => {
        let key = event.target.value;
        this.props.artistList(key); 
        console.log(key)
    }

    render(){
        return (
            <div>
                <Search keywords={this.getKeywords}/>
                <Artistlist artists={this.props.artists.artistsList} />
            </div>
        )
    }
    
}

function mapStateToProps(state){
    console.log(state)
    return{
        artists : state.artists
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({artistsListAll,artistList},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps )(HomeContainer);    