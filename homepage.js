import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import Particle_Background from './starbg';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Folder from './folder';
import particlesConfig from './particlesConfig.json'
import Particles from 'react-tsparticles';

export default function HomePage(props) {
let fname = props.navigation.getParam('name')

const [name,setName] = useState(fname)
const [folderfield,setFolderField] = useState('')
const [update,setUpdated] = useState(0)
const [folderdata,setFolderData] = useState([])
useEffect(async()=>{
  let emailandlastname = await fetch(`http://localhost:8000/get_last_name_and_email/${name}`)
  emailandlastname = await emailandlastname.json()
  let api = await fetch(`http://localhost:8000/get_folders/${name+emailandlastname['lastname']+emailandlastname['email']}`)
  api = await api.json()
  console.log(api.data)
  setFolderData(api.data)
  console.log(folderdata)
console.log(true,name)
},[update])
  return (
    <SafeAreaProvider style={{backgroundColor:'white'}}>
      <Particle_Background />
        <div style={{marginLeft:600,display:'inline-block'}}>
            <div style={{"display":"inline-block","margin":"20px"}}>
            <TextInput type='text' placeholder='folder name' style={{borderWidth:4,color:'white'}} onChangeText={(data)=>{setFolderField(data);console.log(folderfield)
            }}/>
            <button style={{backgroundColor:"#3275A6",height:30,width:100,border:'none',borderRadius:10}} onClick={async()=>{
              setUpdated(update+1)
              
  let emailandlastname = await fetch(`http://localhost:8000/get_last_name_and_email/${name}`)
  emailandlastname = await emailandlastname.json()
              let api = await fetch(`http://localhost:8000/add_folder/${name+emailandlastname['lastname']+emailandlastname['email']}/${folderfield}`)
              api = await api.json()
              console.log(api)
              let api2 = await fetch(`http://localhost:8000/add_folder/${name+emailandlastname['lastname']+emailandlastname['email']}`)
              api2 = await api2.json()
              console.log(api2)
              setFolderField("");
              }}>Create folder</button>
            </div>
            <div style={{"display":"inline-block","margin":"20px"}}>{name}</div>
         
        </div>    
        <div style={{marginTop:50,'display':'inline-block'}}>
        {
               folderdata.map((data,index)=>{
                 return(
                   <div key={index}>
                     <Folder task={()=>{props.navigation.navigate('FolderContent',{foldername_:{data},name:name})}} data={data}/>

                  <br></br>
                  </div>
                 )
                 
               }) 
              
              }
          </div>
    </SafeAreaProvider>
  );
}
//        <Folder task={()=>{props.navigation.navigate('FolderContent',{foldername_:'data',name:name})}} data='data'/>
