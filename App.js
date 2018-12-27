import React,{Component} from 'react';
import LoginPage from './App/components/login'
import Profile from './App/components/profile'
import StudentDashboard from './App/components/studentDashboard'
import { Text,View,StyleSheet } from 'react-native';


export default class myapp extends Component {
render () {
  return (
  // <LoginPage />
   //   <Profile />
    <StudentDashboard />
  );

 }
}
