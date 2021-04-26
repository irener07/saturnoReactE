import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: '#000', fontSize: 22}}>Integrantes:</Text>
       <Text style={{color: '#000', fontSize: 20}}>Gabriel Cortés</Text>
       <Text style={{color: '#000', fontSize: 20}}>Ronaldo Picado</Text>
       <Text style={{color: '#000', fontSize: 20}}>Irene Rojas</Text>
       <Text style={{color: '#000', fontSize: 20}}>Catalina Sánchez</Text>
      <Button
        title="Sorpresa"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: '#000', fontSize: 22}}>Grupo Saturno</Text>
      <Text style={{color: '#888', fontSize: 22}}>🪐</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
