import React from 'react';
import {View, Dimensions} from 'react-native';
var { width  } = Dimensions.get('window');
export default class Divider extends React.Component{
    
    render(){
        const { ...props } = this.props;
        return(
            <View style =  {{width: width-width/10, height: 1 , backgroundColor: 'red', marginTop: 8}} />
        );
    }
}
