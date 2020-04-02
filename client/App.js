import * as React from 'react';
import { Text, View , ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Onboarding1, Onboarding2 ,Onboarding3, Onboarding4, Onboarding5 } from './components/Onboarding';
import HomeScreen from './components/Home';


function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate('Onboarding1');
    return;
    }, 3000)

  return (
    <SafeAreaView style={{ backgroundColor: '#001736', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style= {{fontSize: 130, fontWeight: 'bold', color: 'white'}}>
      P
      </Text>
      <View style= {{backgroundColor: '#F5C932', height: 11, width: 138, marginBottom: 25}}>
      </View>
      <Text style= {{fontSize: 40, fontWeight: 'bold', color: 'white'}}>
        Hjälpen
      </Text>
    </SafeAreaView>
  );
}

function CutomHeader({isHome, navigation}) {
  return (
    <View style={{ flexDirection: 'row', height:50 }}>
      <View style={{ flex: 1, justifyContent: 'center'}}>
     {
       isHome ? 
          null
      : <TouchableOpacity 
      onPress={()=> navigation.goBack()}
      style={{ flexDirection: 'row', height:50 }}>
        <Text>Back</Text>
        </TouchableOpacity>
     } 
          
    <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
      </View>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
    </View>
    </View>
  );
}

function SettingsScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CutomHeader navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>

      </View>
    </SafeAreaView>
  );
}


function NotificationsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1}}>
      <CutomHeader navigation={navigation}/>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications screen</Text>

      </View>
    </SafeAreaView>
  );
}

const navOptionHandler = () => ({
  headerShown: false
})
const StackHome = createStackNavigator();
function HomeStack() {
  return (
      <StackHome.Navigator initialRouteName="Home">
        <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
      </StackHome.Navigator>
  );
}
// DRAWER NAVIGATION
const Drawer = createDrawerNavigator();

function CutomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>
      <ScrollView>
      <TouchableOpacity onPress={()=> props.navigation.navigate('Home')}>
        <Text>Menu Tab</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> props.navigation.navigate('Notifications')}>
        <Text>Notifications</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> props.navigation.navigate('Settings')}>
        <Text>SettingsScreen</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home"
    drawerContent={props => CutomDrawerContent(props)}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

// ONBOARDING NAVIGATION
const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <StackApp.Navigator initialRouteName="SplashScreen">
          <StackApp.Screen name="HomeApp" component={DrawerNavigator} options={navOptionHandler}/>
          <StackApp.Screen name="SplashScreen" component={SplashScreen} options={navOptionHandler}/>
          <StackApp.Screen name="Onboarding1" component={Onboarding1} options={navOptionHandler}/>
          <StackApp.Screen name="Onboarding2" component={Onboarding2} options={navOptionHandler}/>
          <StackApp.Screen name="Onboarding3" component={Onboarding3} options={navOptionHandler}/>
          <StackApp.Screen name="Onboarding4" component={Onboarding4} options={navOptionHandler}/>
          <StackApp.Screen name="Onboarding5" component={Onboarding5} options={navOptionHandler}/>
      </StackApp.Navigator>
    </NavigationContainer>
  );
}

