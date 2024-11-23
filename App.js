import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ChatScreen from './Screens/ChatScreen';
import EditProfileScreen from './Screens/EditProfileScreen';
import FiltersForProfile from './Screens/FiltersForProfile';
import Login from './Screens/Login';
import Match from './Screens/Match';
import MatchFoundScreen from './Screens/MatchFoundScreen';
import NewMatchedProfileNotification from './Screens/NewMatchedProfileNotification';
import ProfileView from './Screens/ProfileView';
import SubscriptionPlans from './Screens/SubscriptionPlans';
import SwipeRightConfirmation from './Screens/SwipeRightConfirmation';
import VideoCallScreen from './Screens/VideoCallScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
        }}
      >
        {/* Authentication */}
        <Stack.Screen name="Login" component={Login} />
        
        {/* Main Flow */}
        <Stack.Screen name="Match" component={Match} />
        <Stack.Screen name="SwipeRightConfirmation" component={SwipeRightConfirmation} />
        <Stack.Screen name="MatchFoundScreen" component={MatchFoundScreen} />
        
        {/* Profile & Settings */}
        <Stack.Screen name="ProfileView" component={ProfileView} />
        <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        <Stack.Screen name="FiltersForProfile" component={FiltersForProfile} />
        <Stack.Screen name="SubscriptionPlans" component={SubscriptionPlans} />
        
        {/* Chat & Communication */}
        <Stack.Screen name="NewMatchedProfileNotification" component={NewMatchedProfileNotification} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="VideoCallScreen" component={VideoCallScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
