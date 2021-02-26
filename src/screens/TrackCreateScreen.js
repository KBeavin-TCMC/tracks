import '../_mockLocation';
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";
import Map from "../components/Map";
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);
  const [err, setErr] = useState(null);

  useEffect(() => {
    startWatching();
  }, []);

  const startWatching = async () => {
    try {
      const { granted } = await requestPermissionsAsync();

      if (!granted) {
        throw new Error("Location permission not granted");
      }

      await watchPositionAsync({
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
      }, (location) => {
        addLocation(location);
      });

    } catch (e) {
      setErr(e);
    }
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>TrackCreateScreen</Text>
      <Map />
      {err ? <Text style={styles.err}>Please enable location services.</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    err: {
        color: 'red',
    }
});

export default TrackCreateScreen;
