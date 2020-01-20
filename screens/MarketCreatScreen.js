import * as React from 'react';
import {Text, View, TextInput, DatePickerIOS, ScrollView, Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default class MarketCreatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '', location: '', description: '', chosenDate: new Date(), userId: '', password: ''};
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }
  createMarket() {
    fetch('http://192.168.0.15:3000/api/create/market', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.title,
        location: this.state.location,
        description: this.state.description,
        date: this.state.chosenDate,
        user_id: this.state.userId,
        password: this.state.password,
      }),
    })
    .then((response) => response.json())
      .then((responseJson) => {
        console.error(responseJson);
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
      }

  render() {
    return (
      <ScrollView>
        <View style={{margin: 10, padding: 20, backgroundColor: '#F2F2F7', borderRadius: 10}}>
          <Text style={{fontSize: 20}}>
            Market title
          </Text>
          <TextInput
            style={{ height: 50, fontSize: 20, borderBottomWidth: 1}}
            onChangeText={(title)=> this.setState({title})}
            value={this.state.title}
            maxLength={40}
          />
        </View>
        <View style={{margin: 10, padding: 20, backgroundColor: '#F2F2F7', borderRadius: 10}}>
          <Text style={{fontSize: 20}}>
            Description
          </Text>
          <TextInput
            style={{ height: 100, fontSize: 20, borderBottomWidth: 1, backgroundColor: '#F2F2F7'}}
            onChangeText={(description)=> this.setState({description})}
            value={this.state.description}
            maxLength={140}
            multiline={true}
          />
        </View>
        <View style={{margin: 10, padding: 20, backgroundColor: '#F2F2F7', borderRadius: 10}}>
        <Text style={{fontSize: 20}}>
          Date
        </Text>
        <DatePickerIOS
          date={this.state.chosenDate}
          onDateChange={this.setDate}
        />
        </View>
        <View style={{margin: 10, padding: 20, backgroundColor: '#F2F2F7', borderRadius: 10}}>
          <Text style={{fontSize: 20}}>
            Location
          </Text>
          <TextInput
            style={{ height: 50, fontSize: 20, borderBottomWidth: 1}}
            onChangeText={(location)=> this.setState({location})}
            value={this.state.location}
            maxLength={40}
          />
        </View>
        <View style={{margin: 10, padding: 20, backgroundColor: '#F2F2F7', borderRadius: 10}}>
          <Text style={{fontSize: 20}}>
            User ID
          </Text>
          <TextInput
            style={{ height: 50, fontSize: 20, borderBottomWidth: 1}}
            onChangeText={(userId)=> this.setState({userId})}
            value={this.state.userId}
            maxLength={40}
          />
        </View>
        <View style={{margin: 10, padding: 20, backgroundColor: '#F2F2F7', borderRadius: 10}}>
          <Text style={{fontSize: 20}}>
            Password
          </Text>
          <TextInput
            style={{ height: 50, fontSize: 20, borderBottomWidth: 1}}
            onChangeText={(password)=> this.setState({password})}
            value={this.state.password}
            maxLength={40}
          />
        </View>
        <View>
        <Button
          onPress={() => this.createMarket()}
          title='OK'
          />
        </View>
      </ScrollView>
    );
  }
}

MarketCreatScreen.navigationOptions = {
  headerRight: () => (
    <Button
      onPress={() =>alert('ok')}
      title='OK'
      />
  ),
};
