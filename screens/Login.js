import React,{useEffect, useState} from "react";
import { Alert, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import Storage, { getData, storeData } from './Storage'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({navigation}){
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[isLoggedIn,setIsLoggedIn]=useState('false')
    if(isLoggedIn==='true'){
        navigation.navigate("Home")
    }
    useEffect(()=>{
        const getData= async()=>{
            try{
                const value = await AsyncStorage.getItem('isLoggedIn');
                setIsLoggedIn(value)
            }
            catch(e){

            }
        }
        getData()
        },[])  ;              
    
    // alert(isLoggedIn)


    const onHandleLogin=()=>{
    
        if (password==="password"){
            storeData('isLoggedIn','true')    
            navigation.navigate("Home")
            
        }

    }
    return (
        <SafeAreaView >
            <Text style={{fontSize:36,fontWeight:'bold',alignSelf:"center",paddingBottom:24}}>Enter your Login details</Text>
            <TextInput style={{height:58,marginBottom:20,fontSize:16}}
                placeholder="Enter Email"
                autoCapitalize="none"
                value={email}
                onChangeText= {(text)=> setEmail(text)}
                
            />
            <TextInput style={{height:58,marginBottom:20,fontSize:16}}
                placeholder="Enter Password"
                textContentType="password"
                value={password}
                secureTextEntry={true}
                onChangeText={(text)=>setPassword(text)}
            />
        <TouchableOpacity style={{backgroundColor:'#000', height:58,borderRadius:10,justifyContent:"center",alignItems:"center",marginTop:40}} onPress={onHandleLogin}>
        <Text style={{fontWeight:'bold',color:'#fff',fontSize:18}}>Log In</Text>

        </TouchableOpacity>
        </SafeAreaView>
    )
}
