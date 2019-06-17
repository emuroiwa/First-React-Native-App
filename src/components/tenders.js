import React,{Component} from 'react';
import {Text,View} from 'react-native';
import axios from 'axios';
//import console = require('console');
//import { View } from 'native-base';

class TendersList extends Component{
    state={tenders : []};
    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        //axios.get('http://localhost:8098/onlinetenders/scripts/rest/Tenders.php')
        .then((response)=> this.setState({tenders:response.data}) )
          .catch(function (error) {
            console.log(error);
          });
    };
    renderTenders(){
        return this.state.tenders.map(tender => <Text>{tender.title}</Text>);
    };
    render(){
        return(
                <View>
                    {this.renderTenders()}
                </View>
            );
    };
}

export default TendersList;