import React from "react";
import {  Image } from "react-native";


import { SafeAreaView } from "react-native-safe-area-context";

export default function Home(){
    return (<SafeAreaView>

        <Image source={{uri: 'https://media.istockphoto.com/id/1145840259/vector/home-flat-icon-pixel-perfect-for-mobile-and-web.jpg?s=612x612&w=0&k=20&c=2DWK30S50TbctWwccYw5b-uR6EAksv1n4L_aoatjM9Q='}}
       style={{width: 400, height: 400}} />
       
    </SafeAreaView>
    )
};