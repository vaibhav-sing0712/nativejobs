import React from 'react'
import { TouchableOpacity,FlatList,View, Text } from 'react-native'
import { SIZES } from '../../../constants'
import styles from './tabs.style'

const TabButton=({name,activeTab,onHandleSearchType})=>{
return (<TouchableOpacity onPress={onHandleSearchType} style={styles.btn(name,activeTab)}>
  <Text style={styles.btnText(name,activeTab)}>{name}</Text>
</TouchableOpacity>)


}

console.log("5");

const Tabs = ({tabs,activeTab,setactiveTab}) => {
  
  
return (
  <View style={styles.container}>
  <FlatList
    data={tabs}
   horizontal
   showsHorizontalScrollIndicator={false}
   contentContainerStyle={{columnGap:SIZES.small/2}}
   keyExtractor={item=>item}
    renderItem={({item})=>(
<TabButton name={item} activeTab={activeTab} onHandleSearchType={()=>setactiveTab(item)}  />
)}
    
    
    
  />

  </View>
  )
}

export default Tabs