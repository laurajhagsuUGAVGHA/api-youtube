/*
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import YoutubeScreen from './screens/YoutubeScreen';
import VimeoScreen from './screens/VimeoScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const YoutubeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Youtube" component={YoutubeScreen} options={{ title: 'Pesquisar no YouTube' }} />
    </Stack.Navigator>
  );
};

const VimeoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Vimeo" component={VimeoScreen} options={{ title: 'Pesquisar no Vimeo' }} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} options={{ tabBarVisible: false }} />
        <Tab.Screen name="YoutubeStack" component={YoutubeStack} options={{ title: 'YouTube' }} />
        <Tab.Screen name="VimeoStack" component={VimeoStack} options={{ title: 'Vimeo' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import YoutubeScreen from './screens/YoutubeScreen';
import VimeoScreen from './screens/VimeoScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faYoutube, faVimeo } from '@fortawesome/free-brands-svg-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const YoutubeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Youtube" component={YoutubeScreen} options={{ title: 'Pesquisar no YouTube' }} />
    </Stack.Navigator>
  );
};

const VimeoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Vimeo" component={VimeoScreen} options={{ title: 'Pesquisar no Vimeo' }} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ tabBarVisible: false }}
        />
        <Tab.Screen
          name="YoutubeStack"
          component={YoutubeStack}
          options={{
            title: 'YouTube',
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faYoutube} color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="VimeoStack"
          component={VimeoStack}
          options={{
            title: 'Vimeo',
            tabBarIcon: ({ color, size }) => (
              <FontAwesomeIcon icon={faVimeo} color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
