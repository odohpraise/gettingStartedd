import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { DayListitem } from './src/components/core/DayListitem';


const days = [...Array(24)].map((val,index) => index +1);

export default function App() {
  
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
  },   
  box:{
    backgroundColor:'#F9EDE3',
    flex:1,
    aspectRatio:1,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#9b4521',
    borderRadius:20
  },
  text:{
    color:'#9b4521',
    fontSize:50
  }
});
