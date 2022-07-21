import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import React,{useState,useEffect} from 'react'
import {GoogleLogin} from 'react-google-login';
import Particle_Background from './starbg';
import {gapi} from 'gapi-script'

export default function SignIn (props){
   
  const [fname,setFname] = useState("")
  const [lname,setLname] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [marginTop,setMargin] = useState(200)
  const [marginLeft,setMarginLeft] = useState(500)
  const [marginRight,setMarginRight] = useState(600)
  const [opacity,setOpacity] = useState(0.8)
  const [checked_lastname,setChecked_lastname] = useState('')
  const [checked_firstname,setChecked_firstname] = useState('')
  const [checked_email,setChecked_email] = useState('')
   useEffect(()=>{

    function start(){
      gapi.client.init({
        'clientId':'615921346526-8gs4b74dja97fje48tv2o459a6g7e9ns.apps.googleusercontent.com',
        scope:''
      })
    }
    gapi.load('client:auth2',start)
  })
  return (
    <View >
      <Particle_Background/>
      <div style={{marginTop:marginTop,marginLeft:marginLeft,marginRight:marginRight,opacity:opacity,width:'40%'}} >
        <TextInput placeholder='first name' type='text'style={{padding:15,marginRight:5,borderWidth:2,backgroundColor:'white'}} onChangeText={(e)=>{setFname(e);console.log(e)}}/> 
        <TextInput placeholder='lastname' type='text' style={{padding:15,borderWidth:2,backgroundColor:'white'}} onChangeText={(e)=>{setLname(e)}}/>
        <br></br>        <br></br>
        <br></br>

        <TextInput placeholder='email' type='email' style={{padding:15,marginLeft:100,borderWidth:2,backgroundColor:'white'}} onChangeText={(e)=>(setEmail(e))}/> <br></br>        <br></br>
        <br></br>
        <TextInput placeholder='password' type='password' style={{padding:15,marginLeft:100,borderWidth:2,backgroundColor:'white'}} onChangeText={(e)=>(setPassword(e))}/><br></br>
        <button type='sumbit' style={{backgroundColor:"#3275A6",marginLeft:130,height:50,width:100,border:'none',borderRadius:10}} onClick={async()=>{
          let __api__ = await fetch(`http://localhost:8000/verify_sign_in_information/${fname}/${lname}`)
          __api__ = await __api__.json()
          alert(__api__['data'])
          if(__api__['data'] == 'good to go!'){
          let api = await fetch(`http://localhost:8000/sign_in/${fname}/${lname}/${password}/${email}`)
          let api_json = await api.json()
          props.navigation.navigate('Login')
          }
        }}><Text>Sign in</Text></button>
        </div>
      <GoogleLogin 
      clientId={'672590221729-shi326ntu91q9ghsf0pd7rt8hh56vb3n.apps.googleusercontent.com'}
      onSuccess={(res)=>console.log(res.profileObj)}
      onFailure={(res)=>console.log(res)}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
/>
    </View>
  );
  
}
