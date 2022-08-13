import React from 'react';
import SignIn from './sign_in';
import Particle_Background from './starbg';
import Login from './login';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomePage from './homepage'
import FolderContent from './foldercontent';
import Frontpage from './frontpage';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Earth } from './earth';
import { View } from 'react-native';

export default function App() {
  return (
    <div>
    <Canvas><Suspense fallback={null}>
      <Earth />
      </Suspense></Canvas>
      </div>

    );
}
const sn = createSwitchNavigator({
  Frontpage:Frontpage,
SignIn:SignIn,
Login:Login,
HomePage:HomePage,
FolderContent:FolderContent,
})
const AppContainer = createAppContainer(sn)
