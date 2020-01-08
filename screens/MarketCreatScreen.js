import * as React from 'react';
import {Text, View, FlatList, Image, Button, TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class MarketCreatScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>마켓 등록하기</Text>
      </View>
    );
  }
}
