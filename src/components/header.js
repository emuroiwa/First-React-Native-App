import React from 'react';
import {Text} from 'react-native';
import { View } from 'native-base';

const Header =(props)=>{
    
        const {textStyle,viewStyles}=styles;
        return ( 
                <View style={viewStyles}>
                    <Text style={textStyle}>{props.headerTexts}</Text>
                </View>
            );

    
};
   

    const styles={
        viewStyles:{
            backgroundColor:'grey', 
            justifyContent: 'center', 
            alignItems: 'center',
            paddingTop: 10,
            height:60,
            shadowColor: '#000',
            shadowOffset: {width:0,height:2},
            shadowOpacity: 0.5
        },
        textStyle :{
            justifyContent: 'center', 
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: 20
        }  
      };
      
//AppRegistry.registerComponent()
export default Header;