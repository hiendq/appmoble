import React from 'react';
import { SimpleLineIcons, } from '@expo/vector-icons';
import { View , StyleSheet } from 'react-native';
export default class ShowEnergy extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isShowText: false
        };
        setInterval(()=>{
            this.setState({
                isShowText : !this.state.isShowText
            });
        } , 500);
    }
    render(){
        const { isShowText } = this.state;
        return(
            <View style = {isShowText?style.active : style.un_active}>
                <SimpleLineIcons name = 'energy' color = '#F2D112' size = {20} />
            </View>
        );
    }
}
const style = StyleSheet.create({
    active: {
        opacity: 1, 
    },
    un_active: {
        opacity: 0, 
    },
})