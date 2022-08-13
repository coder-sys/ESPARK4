import React from 'react';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Earth } from './earth';
import { View } from 'react-native';
const Container = styled.div`
width:100%;
height:100%
`;
export default function Frontpage(props) {
  console.log(Container)
  return (
    <View>
      <div style={{display:'flex',flexWrap:'wrap',flexDirection:'row',padding:'40px'}}>

        <div style={{backgroundColor:'#3275a6',width:'400px',height:'200px',marginBottom:'30px',borderRadius:'10px'}}>
          <div style={{marginTop:'90px',marginLeft:'120px',fontFamily:'serif'}}><h1><i>E spark</i><sub style={{'fontSize':'11px'}}><i>Learning is limitless</i></sub></h1></div>
        </div>

    

        <div>

            <button style={{backgroundColor:"#3275A6",marginLeft:130,height:50,width:100,border:'none',borderRadius:10}} onClick={()=>{
                props.navigation.navigate('SignIn')
            }}>Sign in</button>
            </div>

            <div>
               <button style={{backgroundColor:"#3275A6",marginLeft:130,height:50,width:100,border:'none',borderRadius:10}} onClick={()=>{
                props.navigation.navigate('Login')
            }}>Logn in</button>
            </div>
            </div>

    </View>
  );
}
