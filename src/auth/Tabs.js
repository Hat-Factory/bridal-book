// import React from 'react'
// import { Image, StyleSheet } from 'react-native'
// import { createBottomTabNavigator } from 'react-navigation'

// // import { colors } from '../theme'
// // import SignIn from './SignIn'
// // import SignUp from './SignUp'

// const styles = StyleSheet.create({
//   icon: {
//     width: 26,
//     height: 26
//   }
// })

// const routes = {
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       title: 'BridalBook',
//       tabBarIcon: ({ tintColor }) => (
//         <Image
//           source={require('../assets/home.png')}
//           style={[styles.icon, { tintColor }]}
//         />
//       )
//     }
//   },
//   Tasks: {
//     screen: Tasks,
//     navigationOptions: {
//       title: 'Tasks',
//       tabBarIcon: ({ tintColor }) => (
//         <Image
//           source={require('../assets/tasks.png')}
//           style={[styles.icon, { tintColor }]}
//         />
//       )
//     }
//   }
// }

// const routeConfig = {
//   tabBarPosition: 'bottom',
//   tabBarOptions: {
//     showLabel: true,
//     activeTintColor: '#ed7766',
//     inactiveTintColor: '#67769a',
//     indicatorStyle: { backgroundColor: '#67769a'},
//     labelStyle: {
//       fontSize: 12
//     },
//     style: {
//       backgroundColor: 'white',
//       borderTopWidth: 0,
//       paddingBottom: 3
//     },
//   }
// }

// export default createBottomTabNavigator(routes, routeConfig)