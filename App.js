import { StatusBar } from 'expo-status-bar';
import React from 'react';
<<<<<<< HEAD
import reactDom from 'react-dom';
import { Image,ScrollView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

function MapScreen() {
    return (
     <View style={{ flex: 1, justifyContent: 'Center', alignItems: 'center'}}>
      <Text>Map</Text>
  </View>
  );
}


function FloodScreen() {
=======
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
>>>>>>> b1122bb5fe33ecd70b32343cd3051aea242f7e9d
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

<<<<<<< HEAD
function DrainScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Drain Survey</Text>
    </View>
  )
}

function DataScreen(){
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
     
<ScrollView>
      <Text style={{fontSize:20,fontWeight:500}}>Stormwater system</Text>
      <Text>When New York City began construction on its stormwater system, the plan was to drain all wastewater, including both stormwater and sewage, into New York Harbor. Unfortunately, this legacy still affects the stormwater system today. 

Practically all of Manhattan and the Bronx, along with significant portions of the other boroughs, use a sewage system that combines both stormwater and raw sewage. As a result, sewage, entering through pipes, and stormwater, entering through drains, usually meet inside sewers and travel together to wastewater treatment. However, heavy rain can cause issues. The higher volume overwhelms the sewers and causes the stormwater-sewage mixture to bypass the sewer regulator. The mixture goes on to flow out of a combined sewer outfall, which is an open pipe that releases it into the waterways.
</Text>
<Image source={{uri: 'https://www1.nyc.gov/assets/dep/images/content/pages/water/cso-wet-weather-conditions.png'}}
       style={{width: 250, height: 170}} ></Image>
       <Image source={{uri: 'https://www1.nyc.gov/assets/dep/images/content/pages/water/cso-dry-weather-conditions.png'}}
       style={{width: 250, height: 170}} ></Image>

<Text> NYCs Department of Environmental Protection has spent billions of dollars outfitting the city with separated sewage systems, in which stormwater pipes lead directly to local waterways without ever crossing with sewage. So far, it has succeeded in implementing these systems in approximately 40% of the city [1].
Another helpful element in the stormwater system is the green infrastructure system, defined as an integrated system of green space that protects the values and functions of the natural ecosystem and helps the human populations [2]. This includes green roofs, permeable paving, and bioswales, all of which capture stormwater, using it as a resource for plant growth [3]. NYC currently has over 10,000 green infrastructure installations, including 2,500 green streets and over 700 green roofs.[4]
</Text>

## insert bioswales images
<Text style={{fontSize:20,fontWeight:500}}>Flooding</Text>
<Text>NYC is highly prone to flooding caused by coastal storms because of its thoroughly used waterfronts and considerable coastal geography [5]. Additionally, the current stormwater systems were built to handle only 5-year storms, meaning storms that have a 20% chance of happening in any given year [1]. With larger, rarer storms, such as Hurricane Sandy and Hurricane Ida, the city is completely overwhelmed with flooding. Floods have the potential to destroy homes and businesses, damage infrastructure, and threaten human safety. These risks are expected to increase due to climate change and sea levels rising, affecting low-lying neighborhoods the most [5].</Text>
## insert chart or something
<Text>For example, by 2050, both the chances of major floods in NYC and the amount of people at risk will at least double [1].</Text>
##Flood maps here
<Text>There are multiple types of floods, each with different risks:</Text>
  
    <ul>
      <li>Coastal Flooding</li>
    <ul>
        <li>caused by storm surges that accompany coastal storms (tropical storms, hurricanes, nor’easters)</li>
        <li>Stillwater or wave flooding</li>
    </ul>
        <li>Tidal Flooding</li>
    <ul>
        <li>Caused by normal variations of the lunar cycle</li>
        <li>Tides in large bodies of water encroach onto land</li>
        <li>Usually not dangerous</li>
        <li>Still harmful if occurs repeatedly</li>
    </ul>
        <li>Inland Flooding</li>
    <ul>
        <li>Known as flash floods, cloudbursts, urban flooding</li>
        <li>Caused by high intensity, yet small-scale thunderstorms</li>
        <li>Can overwhelm low-lying areas</li>
    </ul>
        <li>Riverine Flooding</li>
    <ul>
        <li>Caused by freshwater river overflow - usually due to heavy rainfall or snowmelt</li>
        <li>Mostly affects the Bronx and Staten Island</li>
    </ul>
        <li>The effects can be disastrous, including:</li>
    <ul>
        <li>Deaths, injuries, illness, and worsening health</li>
        <li>Psychological distress, including depression and anxiety</li>
        <li>Disruption of critical infrastructure systems</li>
        <li>Water pollution</li>
        <li>Lost of income and revenue</li>
        <li>Disruption of communities and social networks</li>
        <li>Property damage and destruction</li>
    </ul>
    </ul> 
    ##Flooding image
<Text>Heavy flooding surrounds cars as remnants of Hurricane Ida hit Queens, September 1st, 2021. [11]</Text>
<Text style={{fontSize:15,fontWeight:500}}>What You Can do</Text>
    <ul>
      <li>To mitigate future flooding:</li>
    <ul>
        <li>Answer our surveys!</li>
    </ul>
    </ul>
<Text>In order to inform more accurate flooding maps for NYC, provide our app with information regarding flooding and drains. Drainage blockage data is important information for predicting flooding risk–areas with more blocked drains will be more vulnerable to flooding–and this type of data is currently missing from NYC flooding calculations. Once flooding maps are improved with your data, we will be able to warn all our residents sooner about their real flood risk, and help them evacuate as needed. 
</Text>
    <ul>
      <li>Grow More Plants</li>
    </ul>
<Text>Vegetation helps soak up stormwater, preventing flooding [3]. If you have a garden or a green roof, try growing some heavy grasses. Also, let your local politicians know that they should be investing in green infrastructure. 
</Text>
    <ul>
      <li>To Protect Yourself:</li>
    <ul>
        <li>Know Your Zone</li>
        <ul>
          <li>Find your evacuation zone at https://www1.nyc.gov/assets/em/html/know-your-zone/knowyourzone.html</li>
          <li>Discover your general risk for evacuation orders</li>
          <li>Different from flood risk maps, which are for insurance</li>
          <li>City can still order evacuation even if you aren’t in a general evacuation zone - depends on the individual event</li>
        </ul>
        <li>Enroll in Notify NYC</li>
        <ul>
          <li>Receive official city alerts for emergencies by enrolling here https://a858-nycnotify.nyc.gov/Home/EnrollmentInfo </li>
        </ul>
        <li>Create an Emergency Plan</li>
        <ul>
          <li>Coordinate with members of your household if necessary</li>
          <li>Discover general guidelines on how to evacuate here: https://www1.nyc.gov/site/em/ready/coastal-storms-hurricanes.page </li>
        </ul>
        <li>Prepare Supplies</li>
        <ul>
          <li>Check out the Official NYC Emergency Management Checklist: https://www1.nyc.gov/site/em/ready/get-prepared.page </li>
          <li>Some examples of necessary supplies include:</li>
          <ul>
            <li>Birth certificates</li>
            <li>passports and other important documents in a waterproof container</li>
            <li>Bottled water</li>
            <li>Nonperishable food</li>
          </ul>
        </ul>

        <li>Prepare Your Surroundings</li>
        <ul>
          <li>Visit the same Official NYC Emergency Management Checklist for a full guide: https://www1.nyc.gov/site/em/ready/coastal-storms-hurricanes.page </li>
          <li>Some examples of necessary preparation include:</li>
          <ul>
            <li>Bringing loose objects inside</li>
            <li>Charging any essential electronics, including cell phones</li>
            <li>Moving any vehicles you may drive to higher ground</li>
            <li>Closing windows and distancing yourself from them [7]</li>
          </ul>
        </ul>
        <li>Have the Correct Insurance</li>
        <ul>
          <li>Visit www.floodsmart.gov for guidance on flood insurance</li>
          <li>Basic insurance policies do not cover flood damage (wind and water)</li>
          <li>You’ll need separate flood insurance</li>
          <li>All homeowners, renters, and business owners are eligible </li>
        </ul>
        <li>For Disabilities</li>
        <ul>
          <li>Factor in extra travel time and other obstacles into your evacuation plan</li>
          <li>Plan to evacuate if you rely on power for life-sustaining support</li>
          <li>Bring all medications with you</li>
          <li>Have a hard copy of contact information for your health providers and emergency contacts with you at all times [8]</li>
        </ul>
        </ul>
        </ul>
<Text style={{fontSize:20,fontWeight:500}}>Sources</Text>
<ol>
  <li>#1</li>
  <li>(2021) Urban stormwater management in New York City. ArcGIS Story Maps. https://storymaps.arcgis.com/stories/d4ac0c596689444dac46c9c2f3354e5e.
</li>
<li>Benedict, M. and McMahon, T. (2002). Green infrastructure: smart conservation for the 21st century. Mersey Forest. https://www.merseyforest.org.uk/files/documents/1365/2002+Green+Infrastructure+Smart+Conservation+for+the+21st+Century..pdf. 
</li>
<li>Types of green infrastructure. NYC Department of Environmental Protection. https://www1.nyc.gov/site/dep/water/types-of-green-infrastructure.page. 
</li>
<li>Flooding. NYC Hazard Mitigation. https://nychazardmitigation.com/hazard-specific/flooding/how-do-we-manage-the-risk/. 
</li>
<lil>#6</lil>
<li>(2016). Flood risk in NYC info brief. NYC Planning. https://www1.nyc.gov/assets/planning/download/pdf/plans-studies/climate-resiliency/flood-risk-nyc-info-brief.pdf. 
</li>
<li>#8</li>
<li>#9</li>
<li>Flooding. NYC Hazard Mitigation. https://nychazardmitigation.com/hazard-specific/flooding/how-do-we-manage-the-risk/. 
</li>
<li>#11</li>
<li>Holliday Smith, R. and Maldonado, S. (2022). As NYC releases new flood maps, here’s what you can do before the water starts rising. The City. https://www.thecity.nyc/2022/7/6/23197630/nyc-releases-flood-maps-guide-before-water-starts-rising. 
</li>
<li>Coastal storms & hurricanes. NYC Emergency Management. https://www1.nyc.gov/site/em/ready/coastal-storms-hurricanes.page. 
</li>
</ol>        
</ScrollView>
=======
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
>>>>>>> b1122bb5fe33ecd70b32343cd3051aea242f7e9d
    </View>
  )
}

const profile_screen = props => {
  const { theme } = props;
  return (
<<<<<<< HEAD
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile</Text>
    
      
=======
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
>>>>>>> b1122bb5fe33ecd70b32343cd3051aea242f7e9d
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
    backgroundColor:'#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
<<<<<<< HEAD
  
});
=======
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
>>>>>>> b1122bb5fe33ecd70b32343cd3051aea242f7e9d
