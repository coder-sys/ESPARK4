import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import Particle_Background from './starbg';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function Folder(props){
    const [color,setColor] = useState('#3275A6')
    const [w,setW] = useState(240)
    const [h,setH] = useState(100)
    return(
        <SafeAreaProvider style={{backgroundColor:color,borderRadius:10}}>
        <div style={{float:'left',width:w,height:h,fontWeight:'bold',color:'white'}} onMouseEnter={()=>{setW(300);setH(100)}} onMouseLeave={()=>{setW(240);setH(100)}}>
            <TouchableOpacity onPress={props.task}>
                <h3>{props.data}</h3>
            </TouchableOpacity>
        </div>
    </SafeAreaProvider>
    )
}