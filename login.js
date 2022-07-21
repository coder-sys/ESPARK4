import { useLinkProps } from '@react-navigation/native';
import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert } from 'react-native';
import Particle_Background from './starbg';
import {gapi} from 'gapi-script'

export default function Login(props){
    const [fname,setFname] = useState("")
    const [password,setPassword] = useState("")
    const [marginTop,setMargin] = useState(200)
    const [marginLeft,setMarginLeft] = useState(500)
    const [marginRight,setMarginRight] = useState(600)
    const [opacity,setOpacity] = useState(0.8)
    const [access,setAccess] = useState("denied")
    return (
        <View >
                      <Particle_Background />

          <div style={{marginTop:marginTop,marginLeft:marginLeft,marginRight:marginRight,opacity:opacity,width:'40%'}} >
    
            <TextInput placeholder='first name' style={{padding:15,marginLeft:'100px',borderWidth:2,backgroundColor:'white'}} onChangeText={(e)=>{setFname(e)}}/> 
         
            <br></br>        <br></br>
            <br></br>
    
            <br></br>
            <input placeholder='password' type={'password'} style={{padding:15,marginLeft:100,borderWidth:2}} onChange={(e)=>(setPassword(e.target.value))}/><br></br>
            <button style={{backgroundColor:"#3275A6",marginLeft:155,height:50,width:100,border:'none',borderRadius:10}} onClick={async()=>{
                let api = await fetch(`http://localhost:8000/login/${fname}`)
                api = await api.json()
                if(api['data'] == "username not found"){
                  console.log('username not found')
                    alert("username not found")
                }
                if(password == api["data"]){
                  setAccess("Granted")
                  props.navigation.navigate('HomePage',{name:fname})
                }
                else{
                  alert('Incorrect Password')
                }
                console.log(access)
        }}><Text>Log in (Triple click)</Text></button><br></br><br></br>
        <Text></Text>
            </div>
            </View>
    )
}
