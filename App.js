import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

export default class App extends React.Component {
  constructor () {
    super();
    this.state = {
      username: 'Enter email...',
      password: 'Enter password...',
      firstname: 'First name...',
      lastname: 'Last name...'
    }
  }

  componentDidMount = () => {
    console.log("mounted")
  }

  login = () => {
    console.log('log in dog')
  }

  signUp = () => {
    fetch('http://10.17.30.158:4000/api/registrations', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email: this.state.username,
          password: this.state.password,
          first_name: this.state.firstname,
          last_name: this.state.lastname
        }
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title='Sign Up'
          onPress={() => this.setState({ showSignUp: true})}
        />
        <Button
          title='Log In'
          onPress={() => this.setState({ showSignUp: false})}
        />

        {this.state.showSignUp ? (
          <View style={styles.formContainer}>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, marginBottom: 20}}
              onChangeText={(firstname) => this.setState({firstname})}
              onFocus={() => this.setState({ firstname: '' })}
              value={this.state.firstname}
            />

            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, marginBottom: 20}}
              onChangeText={(lastname) => this.setState({lastname})}
              onFocus={() => this.setState({ lastname: '' })}
              value={this.state.lastname}
            />

            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, marginBottom: 20}}
              onChangeText={(username) => this.setState({username})}
              onFocus={() => this.setState({ username: '' })}
              value={this.state.username}
            />

            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5}}
              onChangeText={(password) => this.setState({password})}
              onFocus={() => this.setState({ password: '' })}
              value={this.state.password}
            />

            <Button
              onPress={this.signUp}
              title='Sign Up'
            >

            </Button>
          </View>
        ) : (
          <View style={styles.formContainer}>
            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5, marginBottom: 20}}
              onChangeText={(username) => this.setState({username})}
              onFocus={() => this.setState({ username: '' })}
              value={this.state.username}
            />

            <TextInput
              style={{height: 40, borderColor: 'gray', borderWidth: 1, padding: 5}}
              onChangeText={(password) => this.setState({password})}
              onFocus={() => this.setState({ password: '' })}
              value={this.state.password}
            />

            <Button
              onPress={this.login}
              title='Log In'
            >

            </Button>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
