/**
 * @format
 */
import React from 'react';
import {AppRegistry,Text,View} from 'react-native';
import Header from './src/components/header';
import TenderList from './src/components/tenders';

//component
const App=()=>{
    return(
        <View>
            <Header headerTexts='XX'/>
            <TenderList/>
        </View>
    );
};

//render component to device
AppRegistry.registerComponent('TestReact1',()=> App);
