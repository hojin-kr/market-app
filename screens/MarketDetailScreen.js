import * as React from 'react';
import {Text, View, FlatList, Image, Button, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class MarketDetailScreen extends React.Component {
  render() {
    let market = {key: '1', status: 'open', name: '삼각산 살림장', location: '서울 삼각산', image: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5df9f0373a36ca54c33dd631/6027010fe335210f3d95fd21cd7fcd07/image.png'};

    let seller = [
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
      <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: 10}}>
                <View>
                    <Image
                        source={{uri: market.image}}
                        style={{width: 170, height: 170, borderTopLeftRadius: 10, borderTopRightRadius: 10 ,backgroundColor: '#000000'}}/>
                </View>
                <View style={{width: 170, height: 170}}>
                    <View style={{height: 140}}>
                    <Text style={{fontSize: 20}}>{market.name}</Text>
                    <Text style={{fontSize: 18}}>{market.location}</Text>
                    </View>
                    <Image
                        source={{uri: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5dd0dd31e005e438c97409da/160eddd8d006621aecf812c654e25bf5/image.png'}}
                        style={{width: 30, height: 30}}/>
                </View>
          </View>
          <View style={{margin: 10}}>
              <Text style={{fontSize: 20}}>Description</Text>
              <Text></Text>
          </View>
          <View style={{flexDirection: 'row', margin: 10}}>
              <Text>Participant Seller</Text>
              <Text>join seller</Text>
          </View>
          <FlatList
              data={seller}
              // ListHeaderComponent={}
              renderItem={({item}) =>
              <TouchableOpacity
                  style={{borderBottomWidth: 0.3, justifyContent: 'center', padding: 10 }}
                  onPress={() => this.props.navigation.navigate('Details')}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-around', }}>
                      <View style={{justifyContent: 'center'}}>
                          <Image
                              source={{uri: item.image}}
                              style={{width: 70, height: 70, borderTopLeftRadius: 10, borderTopRightRadius: 10 ,backgroundColor: '#000000'}}/>
                      </View>
                      <View style={{width: 220, justifyContent: 'center'}}>
                          <Text>{item.name} seller name</Text>
                          <Text>{item.name} seller Description</Text>
                          <Text>{item.name} seller Description</Text>
                      </View>
                      <View style={{justifyContent: 'center'}}>
                        <Image
                            source={{uri: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5dd0dd31e005e438c97409da/160eddd8d006621aecf812c654e25bf5/image.png'}}
                            style={{width: 30, height: 30}}/>
                      </View>
                  </View>
              </TouchableOpacity>}
          />
      </View>
    );
  }
}
