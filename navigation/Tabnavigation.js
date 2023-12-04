import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Listdata from '../screen/Listdata';
import { WebView } from 'react-native-webview';
import Homepage from '../screen/Homepage';

const Tab = createBottomTabNavigator();
const forminput = 'https://arza12345.github.io/react-native-map-content/';
const webmap = 'https://arza12345.github.io/react-native-map-content/map.html';

function HomePage() {
  return (
    <View>
        <Homepage/>
    </View>
  );
}
function Map() {
  return <WebView source={{uri: webmap}} />;
}
function InputPage() {
  return <WebView source={{ uri: forminput}}/>;
}
function ListPage() {
  return (
    <View>
      <Listdata/>
    </View> 
  );
}
function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}} >
        <Tab.Screen
          name="Home Page"
          component={HomePage}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Map Page"
          component={Map}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Input Data"
          component={InputPage}
          options={{
            tabBarLabel: 'Input',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user-plus" color={color} size={size} />
            ),
          }}
        />
         <Tab.Screen
          name="List Data"
          component={ListPage}
          options={{
            tabBarLabel: 'List',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="pen" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
const styles = StyleSheet.create ({
  image: {
    width:400,
    height:600,
    resizeMode: 'stretch'
  },
  listitems: {
    padding: 20,
    alignItems: 'center',
  },
  caption: {
    fontSize: 14,
    fontWeight: 'bold',
},
});