import React from 'react';
import SignIn from './sign_in';
import Particle_Background from './starbg';
import Login from './login';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomePage from './homepage'
import FolderContent from './foldercontent';
import Frontpage from './frontpage';
export default function App() {
  return (
    <AppContainer />
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
