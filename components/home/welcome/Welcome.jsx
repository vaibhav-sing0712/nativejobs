import React from 'react'
import { View,TextInput,TouchableOpacity,Image,FlatList, Text } from 'react-native'
import { useState } from 'react'
import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { icons,SIZES } from '../../../constants'


const jobTyles=["Full-time","Part-time","Contractor"]
const Welcome = ({searchTern,setsearchTern,handleClick}) => {
  const router=useRouter();
const [activeJobType, setactiveJobType] = useState("Full-time")
  
  return (
    <View>
    <View style={styles.container}>
      <Text style={styles.userName}>Hello Adrian</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job!</Text>
    </View>
<View style={styles.searchContainer}>
  <View style={styles.searchWrapper}>
    <TextInput placeholder="What are you looking for?" onChangeText={(e)=>setsearchTern(e)} style={styles.searchInput} value={searchTern}   />
  </View>

  <TouchableOpacity style={styles.searchBtn} onPress={handleClick} >
    <Image source={icons.search} resizeMode="contain" style={styles.searchBtn } />
  </TouchableOpacity>
</View>

<View style={styles.tabsContainer}>
<FlatList data={jobTyles} renderItem={({item})=>(
  <TouchableOpacity onPress={()=>{
    setactiveJobType(item)
    router.push(`/search/${item}`)
  }} style={styles.tab(activeJobType,item)}>
    <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
  </TouchableOpacity>


  )}
  keyExtractor={item=>item}
  contentContainerStyle={{columnGap:SIZES.small}}
  horizontal>
    
  
  </FlatList>

</View>

    </View>
  )
}

export default Welcome