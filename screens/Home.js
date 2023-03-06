import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Text,TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Login from "./Login";
import { storeData } from "./Storage";
export default function Home({navigation}){
    const signOut=()=>{
        
        navigation.navigate("Login")
        storeData('isLoggedIn','false')

    }
    return (<SafeAreaView>

        <Image source={{uri: 'https://media.istockphoto.com/id/1145840259/vector/home-flat-icon-pixel-perfect-for-mobile-and-web.jpg?s=612x612&w=0&k=20&c=2DWK30S50TbctWwccYw5b-uR6EAksv1n4L_aoatjM9Q='}}
       style={{width: 400, height: 400}} />
       <TouchableOpacity style={{backgroundColor:'#000', height:58,borderRadius:10,justifyContent:"center",alignItems:"center",marginTop:40}} onPress={signOut}>
        <Text style={{fontWeight:'bold',color:'#fff',fontSize:18}}>Log out</Text>
        </TouchableOpacity>
       
    </SafeAreaView>
    )
};