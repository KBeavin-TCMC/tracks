import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Map from "../components/Map";
import { withNavigationFocus } from 'react-navigation';
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen = ({ isFocused }) => {
  const { state: { recording }, addLocation } = useContext(LocationContext);
  const callback = useCallback((location) => {
    addLocation(location, recording);
  }, [recording])
  const [err] = useLocation(isFocused || recording, callback);
  
  return (
    <View style={{marginTop: 20}}>
      <Text h2>TrackCreateScreen</Text>
      <Map />
      {err ? (
        <Text style={styles.err}>Please enable location services.</Text>
      ) : null}
      <TrackForm />
    </View>
  );
};

TrackCreateScreen.navigationOptions = {
  title: 'Add Track',
  tabBarIcon: <FontAwesome name="plus" size={20} /> 
}

const styles = StyleSheet.create({
  err: {
    color: "red",
  },
});

export default withNavigationFocus(TrackCreateScreen);
