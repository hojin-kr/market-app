import * as React from 'react';
import {Text, View, FlatList, Image, Button, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class MarketListScreen extends React.Component {
  render() {
    //ajax로 서버에서 불러옴
    let market = [
        {key: '1', status: 'open', name: '삼각산 살림장', location: '서울 삼각산', image: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5df9f0373a36ca54c33dd631/6027010fe335210f3d95fd21cd7fcd07/image.png'},
        {key: '2', status: 'open', name: '부평 풍물 축제 ', location: '인천 부평구', image: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5df9f0373a36ca54c33dd631/6027010fe335210f3d95fd21cd7fcd07/image.png'},
        {key: '3', status: 'open', name: '서로 나눔', location: '서울 강남구', image: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5df9f0373a36ca54c33dd631/6027010fe335210f3d95fd21cd7fcd07/image.png'},
        {key: '4', status: 'open', name: '부평 풍물 축제 ', location: '인천 부평구', image: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5df9f0373a36ca54c33dd631/6027010fe335210f3d95fd21cd7fcd07/image.png'},
        {key: '5', status: 'open', name: '서로 나눔', location: '서울 강남구', image: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5df9f0373a36ca54c33dd631/6027010fe335210f3d95fd21cd7fcd07/image.png'},
        {key: '6', status: 'open', name: '부평 풍물 축제 ', location: '인천 부평구', image: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5df9f0373a36ca54c33dd631/6027010fe335210f3d95fd21cd7fcd07/image.png'},
        {key: '7', status: 'open', name: '서로 나눔', location: '서울 강남구', image: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5df9f0373a36ca54c33dd631/6027010fe335210f3d95fd21cd7fcd07/image.png'},
        {key: '8', status: 'open', name: '부평 풍물 축제 ', location: '인천 부평구', image: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5df9f0373a36ca54c33dd631/6027010fe335210f3d95fd21cd7fcd07/image.png'},
        {key: '9', status: 'open', name: '서로 나눔', location: '서울 강남구', image: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5df9f0373a36ca54c33dd631/6027010fe335210f3d95fd21cd7fcd07/image.png'},
        {key: '10', status: 'open', name: '부평 풍물 축제 ', location: '인천 부평구', image: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5df9f0373a36ca54c33dd631/6027010fe335210f3d95fd21cd7fcd07/image.png'},
        {key: '11', status: 'open', name: '서로 나눔', location: '서울 강남구', image: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5df9f0373a36ca54c33dd631/6027010fe335210f3d95fd21cd7fcd07/image.png'},

    ];
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
                  onPress={() => this.props.navigation.navigate('MarketDetail')}>
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
                                <Text style={{fontSize: 16}}>{item.name}</Text>
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
