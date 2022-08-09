import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Linking, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { 
  MaterialCommunityIcons,
  FontAwesome, 
  AntDesign, 
  Ionicons, 
  SimpleLineIcons,
  MaterialIcons,
  Entypo
} from '@expo/vector-icons';
import {
  Button,
  Container,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme
} from '@draftbit/ui';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { Line } from 'react-native-svg';


function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MapView style={styles.map}
      initialRegion={{latitude: 40.7284789272453, longitude: -73.9902219314191, latitudeDelta: 0.01, longitudeDelta: 0.01}} 
      showsMyLocationButton={true}
      showsUserLocation = {true}
      >
        <Marker />
      </MapView>
    </View>
  );
}

function SurveyScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Button style={styles.buttonOne} onPress={ ()=>{ Linking.openURL('https://google.com')}}>
        <Text style={{color: "black", fontSize: "15"}}>Flood Survey</Text>
      </Button>
      <Button style={styles.buttonTwo}>
        <Text style={{color: "black", fontSize: "15"}} onPress={ ()=>{ Linking.openURL('https://google.com')}}>Drain Survey</Text>
      </Button>
      <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: "22", marginTop: 20}}>Why Collect Data?</Text>
      <Text style={{textAlign: 'left', marginLeft: 15, marginRight: 15, marginTop: 8}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </View>
  );
}

function DataScreen() {
  return (
    <View style={{ flex: 1}}>
      <Text>Flooding and stormwater drains have a key correlation with one another, seen in the graph below.</Text>
      <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width}
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
    yAxisInterval={1}
    chartConfig={{
      backgroundColor: "#e26a00",
      backgroundGradientFrom: "#4C66F3",
      backgroundGradientTo: "#ffa726",
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
    </View>
  )
}

const profile_screen = props => {
  const { theme } = props;
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ScreenContainer
      style={styles.screenContainerJb}
      scrollable={true}
      hasSafeArea={false}
    >
      {/*<ImageBackground
        style={styles.imageBackgroundNb}
        source={Images.ErikmcleannTCtYYyVqSYunsplash}
  />*/}
      <Container
        style={styles.containerEA}
        elevation={0}
        useThemeGutterPadding={true}
      >
      <Image
          style={StyleSheet.flatten([
            styles.imageA3,
            { borderRadius: theme.borderRadius.global },
          ])}
          resizeMode="cover"
          source={require('./Images/DefaultProfilePic.png')}
        />
        <Text
          style={StyleSheet.flatten([
            styles.textPr,
            theme.typography.headline3,
          ])}
        >Random Person</Text>
        <Button style={styles.buttonP2} type="outline">
          Edit Profile
        </Button>
  </Container>
  <Container useThemeGutterPadding={true} elevation={0}>
        <Touchable
          style={StyleSheet.flatten([
            styles.touchableOk,
            { borderColor: theme.colors.divider },
          ])}
        >
          <View style={styles.viewKs}>
            <Text style={theme.typography.body1}>Peronsal Information</Text>
            <Icon
              style={styles.iconFE}
              size={24}
              color={theme.colors.strong}
              name="MaterialIcons/account-circle"
            />
          </View>
        </Touchable>
        <Touchable
          style={StyleSheet.flatten([
            styles.touchableOm,
            { borderColor: theme.colors.divider },
          ])}
        >
            <View style={styles.viewYR}>
              <Text style={theme.typography.body1}>Badges</Text>
              <SimpleLineIcons name='badge' style={styles.iconCL} color={theme.colors.strong} size={24} />
            </View>
          </Touchable>
          <Touchable
          style={StyleSheet.flatten([
              styles.touchableBp,
              { borderColor: theme.colors.divider },
            ])}
          >
            <View style={styles.viewS1}>
              <Text style={theme.typography.body1}>Questions</Text>
              <AntDesign name='question' style={styles.iconZz} color={theme.colors.strong} size={24} />
            </View>
          </Touchable>
          <Touchable
            style={StyleSheet.flatten([
              styles.touchableJg,
              { borderColor: theme.colors.divider },
            ])}
          >
            <View style={styles.viewAl}>
              <Text style={theme.typography.body1}>Privacy Disclaimer</Text>
              <MaterialIcons name='privacy-tip' style={styles.iconCL} color={theme.colors.strong} size={24} />
            </View>
          </Touchable>
        </Container>
      </ScreenContainer>
    </View>
  )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map" component={MapScreen} 
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="map-marker" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name="Surveys" component={SurveyScreen} 
        options={{
          tabBarLabel: 'Surveys',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="clipboard" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Data" component={DataScreen} 
        options={{
          tabBarLabel: 'Data',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="barschart" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name="Profile" component={withTheme(profile_screen)} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
        <MyTabs />
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  screenContainerJb: {
    justifyContent: 'space-evenly',
  },
  viewKs: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  viewYR: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  viewS1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewAl: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  imageBackgroundNb: {
    width: '100%',
    height: 250,
  },
  imageA3: {
    height: 120,
    width: 120,
  },
  containerEA: {
    alignItems: 'center',
    marginTop: -65,
  },
  textPr: {
    width: '100%',
    textAlign: 'center',
    marginTop: 16,
  },
  touchableOk: {
    borderTopWidth: 1,
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 32,
  },
  iconFE: {
    height: 24,
    width: 24,
  },
  iconCl: {
    width: 24,
    height: 24,
  },
  iconZz: {
    width: 24,
    height: 24,
  },
  iconZb: {
    height: 24,
    width: 24,
  },
  buttonP2: {
    marginTop: 16,
    alignSelf: 'center',
    width: '50%',
  },
  touchableOm: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  touchableBp: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  touchableJg: {
    paddingBottom: 12,
    paddingTop: 12,
    borderTopWidth: 1,
  },
  buttonOne: {
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    height: 120,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 10,
    marginRight: 10,
  },
  buttonTwo: {
    backgroundColor: 'rgba(52, 52, 52, 0.2)',
    height: 120,
    marginLeft: 10,
    marginRight: 10
  }
});