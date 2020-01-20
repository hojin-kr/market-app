import * as React from 'react';
import {Text, View, FlatList, Image, Button, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class MarketListScreen extends React.Component {
  constructor(props){
  super(props);
  this.state ={ market: ''}
  }
  componentDidMount(){
    return fetch('http://192.168.0.15:3000/api/get/market')
            .then((response) => response.json())
            .then((responseJson) => {

              this.setState({
                market: responseJson,

              }, function(){

              });

            })
            .catch((error) =>{
              console.error(error);
            });
  }
  render() {
    let market = this.state.market;
    return (
      <View>
          <FlatList
              columnWrapperStyle={{
                  margin: 10,
                  justifyContent: 'space-between',
                  shadowColor: '#000000',
                  shadowOffset: {width: 1, height: 2},
                  shadowOpacity: 0.5,
              }}
              data={market}
              numColumns={2}
              horizontal={false}
              renderItem={({item}) =>
              <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('MarketDetail', {id: item.id})}>
                  <View>
                      <View>
                          <Image
                              source={{uri: item.image}}
                              style={{width: 170, height: 170, borderTopLeftRadius: 10, borderTopRightRadius: 10 ,backgroundColor: '#000000'}}/>
                      </View>
                      <View style={{height: 50, backgroundColor: '#ffffff', borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
                                    justifyContent: 'center'}}>
                          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                              <View>
                                <Text style={{fontSize: 16}}>{item.title}</Text>
                                <Text style={{fontSize: 14}}>{item.location}</Text>
                              </View>
                              <View>
                                <Image
                                    source={{uri: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5dd0dd31e005e438c97409da/160eddd8d006621aecf812c654e25bf5/image.png'}}
                                    style={{width: 30, height: 30}}/>
                              </View>
                          </View>
                      </View>
                  </View>
              </TouchableOpacity>}
          />
      </View>
    );
  }
}
