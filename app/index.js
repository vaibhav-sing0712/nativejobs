import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";


const Home=()=>{

  const [searchTern, setsearchTern] = useState("")
const router=useRouter();

return (

<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      

      <ScrollView showsVerticalScrollIndicator={false}>
      
        <View style={{flex:1,padding:SIZES.medium}} >
        
<Welcome
searchTern={searchTern}
setsearchTern={setsearchTern}
handleClick={()=>{
  if(searchTern)
  {
    router.push(`/search/${searchTern}`)
  }
}}
/>
<Popularjobs/>
<Nearbyjobs/>


        </View>
      </ScrollView>
    
</SafeAreaView>
)


}

export default Home;