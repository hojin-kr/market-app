import React, {Component} from 'react';
import {Text, View, FlatList, Image, Button, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';

class Cards extends Component {
    render() {
        return (
            <TouchableWithoutFeedback
                onPress={()=> alert(this.props.card.name)}>
                <View>
                    <View>
                        <Image
                            source={{uri: this.props.card.image}}
                            style={{width: 170, height: 170, borderTopLeftRadius: 10, borderTopRightRadius: 10 ,backgroundColor: '#000000'}}/>
                    </View>
                    <View style={{height: 50, backgroundColor: '#ffffff', borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
                                  justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                            <View>
                              <Text style={{fontSize: 16}}>{this.props.card.name}</Text>
                              <Text style={{fontSize: 14}}>{this.props.card.location}</Text>
                            </View>
                            <View>
                              <Image
                                  source={{uri: 'https://trello-attachments.s3.amazonaws.com/5db8f4b864493b4c6f0c56bd/5dd0dd31e005e438c97409da/160eddd8d006621aecf812c654e25bf5/image.png'}}
                                  style={{width: 30, height: 30}}/>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default function MarketScreen() {
    //ajax로 서버에서 불러옴
    let cards = [
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
                data={cards}
                numColumns={2}
                horizontal={false}
                renderItem={({item}) => <Cards card={item}></Cards>}
            />
        </View>
    );
}

MarketScreen.navigationOptions = {
    headerStyle: {
        backgroundColor: '#ffffff',
        borderBottomColor: '#1F1F1F',
    },
    headerTintColor: '#000000',
    headerTitle: () => (
        <View sytle={{height: 35}}>
            <Text style={{color: '#000000', fontSize: 25, fontWeight: '600'}}>
                    MARKET
            </Text>
        </View>

    ),
    headerLeft: () => (
        <TouchableHighlight
            style={{marginLeft: 10}}
            onPress={() => alert('This is a menu!')}>
            <Image
                source={{uri: 'https://trello-attachments.s3.amazonaws.com/5e0d3abaa9b126632d3a19c9/5e0d4f99ee40b08506182cc3/81d6518b1ff611fa416f165d741aa7fb/image.png'}}
                style={{width: 25, height: 25}}/>
        </TouchableHighlight>
    ),
    headerRight: () => (
        <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableHighlight
                style={{marginRight: 10}}
                onPress={() => alert('This is a shop!')}>
                <Image
                    source={{uri: 'https://trello-attachments.s3.amazonaws.com/5e0d3abaa9b126632d3a19c9/5e0d4f99ee40b08506182cc3/8c82c70ec0cf43091a85fdccc3e99062/image.png'}}
                    style={{width: 25, height: 25}}/>
            </TouchableHighlight>
            <TouchableHighlight
                style={{marginRight: 10}}
                onPress={() => alert('This is a alert!')}>
                <Image
                    source={{uri: 'https://trello-attachments.s3.amazonaws.com/5e0d3abaa9b126632d3a19c9/5e0d4f99ee40b08506182cc3/fa8c53d585348cc3b4b44ce6686c2afe/image.png'}}
                    style={{width: 25, height: 25}}/>
            </TouchableHighlight>
        </View>
    ),
};
