import React, { Component } from 'react'
import { Image, StyleSheet, View, Dimensions , TouchableOpacity} from 'react-native';
import { Feather, Ionicons,AntDesign } from '@expo/vector-icons';
var { width,height } = Dimensions.get('window');
import Text from './Text';
import Route from '../constants/Route';

var box_height = height/5+10;
export default class Item extends Component {

  render() {
    const  navigation  = this.props.navigation;
    return (
      <TouchableOpacity onPress={() => navigation.push( Route.DETAIL )}>
          <View style={styles.container}>
            <View style={ styles.box1 }>
              <View style={ styles.box3 }>
                <Image
                  style = {styles.img}
                  source={require('../assets/image-background.png')} 
                /> 
              </View>
              <View style={ styles.box4 }>
                <Text  h4 style = {styles.title}>
                  Phòng cho thuê Phonng Bắc 1, Cẩm Lệ
                </Text>
                <Text  style={{fontSize: 18, marginTop: 8 ,color: '#9D150A'}}>
                  6 Triệu VND/tháng
                </Text>
              </View>
            </View>
            <View style={ styles.box2 }>
              <View style = {styles.box5}>
                <Feather name = 'map-pin' color = 'black' size = {16} style = {styles.icon}/>
                <Text style = {styles.address}>K33/03 Đông Giang, Phường An Hải Tây...</Text>
              </View>
              <View style = {styles.box6}>
                <View style = {styles.box7}>
                  <Ionicons name = 'md-time' color = 'black' size = {16} style = {styles.icon}/>
                  <Text style = {styles.address}>1-5-2020 14:50:40</Text>
                </View>
                <View style = {styles.box8}>
                  <AntDesign name = 'hearto' color = 'red' size = {16} style = {styles.icon}/>
                  <Text style = {styles.save}>Lưu tin</Text>
                </View>
              </View>
            </View>
          </View>
      </TouchableOpacity>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    height: box_height,
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    borderRadius:15,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#D3C1C1',
    backgroundColor: 'white',
  },
  box1: {
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    flex: 7,
  },
  box2: {
    flexDirection: 'column',
    flex: 4,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
  box3: {
    flex: 4,
  },
  box4: {
    marginLeft: 15,
    flex: 6
  }, 
  box5: {
    flexDirection: 'row',
    flex: 1,
  },
  box6: {
    flexDirection: 'row',
    flex: 1,
  },
  box7: {
    flexDirection: 'row',
    flex: 3,
  },
  box8: {
    flexDirection: 'row',
    flex: 1.7,
  },
  img: {
    width: width/3+10,
    height: height/9-10,
    marginTop: 10
  },
  title: {
    fontSize: 18,
    marginTop: 10,
  },
  icon: {
    marginLeft: 5
  },
  address: {
    marginLeft: 5,
    fontSize: 14,
  },
  save: {
    marginLeft: 5,
  }
});

