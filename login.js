import { useLinkProps } from '@react-navigation/native';
import React,{useState,useEffect} from 'react'
import {GoogleLogin} from 'react-google-login'
import { StyleSheet, Text, View,TextInput,TouchableOpacity, Alert } from 'react-native';
import Particle_Background from './starbg';
import {gapi} from 'gapi-script'

export default function Login(props){
    const [fname,setFname] = useState("")
    const [password,setPassword] = useState("")
    const [marginTop,setMargin] = useState(200)
    const [googlename,setGoogleName] = useState("")
    const [marginLeft,setMarginLeft] = useState(500)
    const [marginRight,setMarginRight] = useState(600)
    const [opacity,setOpacity] = useState(0.8)
    const [access,setAccess] = useState("denied")
    const loginwithgoogle = async(firstname_google) =>{
      let api = await fetch(`http://localhost:8000/login/${firstname_google}`)
                api = await api.json()
                console.log(password==api['data'])
                if(api['data'] == "username not found"){
                  console.log('username not found')
                    alert("username not found")
                }
                if(api['data']!='username not found'){
                  setAccess("Granted")
                  props.navigation.navigate('HomePage',{name:firstname_google})
                }
      
                
                console.log(access)
    }
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

          <div style={{marginTop:marginTop,marginLeft:marginLeft,marginRight:marginRight,opacity:opacity,width:'40%'}} >
    
            <TextInput placeholder='first name' style={{padding:15,marginLeft:'100px',borderWidth:2,backgroundColor:'white'}} onChangeText={(e)=>{setFname(e)}}/> 
         
            <br></br>        <br></br>
            <br></br>
    
            <br></br>
            <input placeholder='password' type={'password'} style={{padding:15,marginLeft:100,borderWidth:2}} onChange={(e)=>(setPassword(e.target.value))}/><br></br>
            <div style={{marginLeft:'107px'}}><br></br>

          <GoogleLogin 
      clientId={'615921346526-8gs4b74dja97fje48tv2o459a6g7e9ns.apps.googleusercontent.com'}
      onSuccess={(res)=>loginwithgoogle(res.profileObj['name'])}
      onFailure={(res)=>alert('had trouble signing in,please try again')}
      cookiePolicy={'single_host_origin'}
      isSignedIn={false}
/></div><br></br><br></br>
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
