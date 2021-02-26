import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
    return (
      <>
        <Spacer>
          <Text h3>Sign Up for Tracker</Text>
        </Spacer>
        <Input label="Email" />
        <Spacer />
        <Input label="Password" />
        <Spacer>
          <Button title="Sign Up" onPress={() => console.log("hi")} />
        </Spacer>
      </>
    );
}

const styles = StyleSheet.create({
    
})

export default SignupScreen;