import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { DayListitem } from './src/components/core/DayListitem';
import * as SplashScreen from 'expo-splash-screen';
import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import { AmaticSC_400Regular,AmaticSC_700Bold } from '@expo-google-fonts/amatic-sc';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((val,index) => index +1);

export default function App() {
 const [fontsLoaded, fontError] = useFonts({
    Inter : Inter_900Black,
    Amatic : AmaticSC_400Regular,
    AmaticBold : AmaticSC_700Bold
  })
  useEffect(()=>{
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync()
    }
  },[fontsLoaded, fontError])
if (!fontsLoaded && !fontError){
 return null;
}

  return (
    <View style={styles.container}>
      <FlatList
      numColumns={2}
      columnWrapperStyle ={styles.flatListRowGap}
      contentContainerStyle={styles.flatList}
      data={days}
      renderItem={({item})=>
        <DayListitem day={item}/>
      }
      />
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
  flatList:{
    gap:10,
    padding:10
  },
  flatListRowGap:{
    gap:10
  }
});
