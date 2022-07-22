import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { 
  Raleway_400Regular,
  Raleway_600SemiBold,
  Raleway_700Bold,
  
  useFonts,
} from '@expo-google-fonts/raleway'
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from 'routes/StackNavigator';
import { SelectProvider } from '@mobile-reality/react-native-select-pro';






export default function App() {
  let [fontsLoaded, error] = useFonts({
    Regular: Raleway_400Regular,
    SemiBold: Raleway_600SemiBold,
    Bold: Raleway_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <SelectProvider>
      <StackNavigator />
      </SelectProvider>
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
});
