// ************* Exercise 1 *************
// import React from 'react';
// import {View, Text} from 'react-native';
//
// const Exercise1 = () => {
//   return(
//       <View>
//           <Text style={{fontSize: 24}}>Values</Text>
//           <Text style={{color: 'green'}}>Excellence</Text>
//           <Text style={{backgroundColor: 'yellow'}}>Customer-Centric</Text>
//           <Text style={{fontStyle: 'italic'}}>Integrity</Text>
//           <Text style={{alignSelf: 'center'}}>Teamwork</Text>
//           <Text style={{backgroundColor: 'black', color:'white'}}>Enterprising</Text>
//       </View>
//   );
// };
// export default Exercise1;

// ************* Exercise 2 *************
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     greenBox:{
//         width: 100,
//         height: 100,
//         marginTop: 30,
//         backgroundColor: 'green',
//         borderWidth: 1,
//         color: 'black'
//     },
//     boxText:{
//         textAlign: 'center',
//         color: 'white',
//     },
//     title:{
//         fontWeight: 'bold',
//     }
// })
//
// const Exercise2 = () => {
//   return(
//       <View>
//           <View style={[styles.greenBox,styles.title]}>
//               <Text style={styles.boxText}>Who We Are</Text>
//           </View>
//           <View style={[styles.greenBox,styles.title]}>
//               <Text style={styles.boxText}>Our People</Text>
//           </View>
//           <View style={[styles.greenBox,styles.title]}>
//               <Text style={styles.boxText}>Our Campus</Text>
//           </View>
//       </View>
//   );
// };
//
// export default Exercise2;

// ************* Exercise 3A *************
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     parent:{
//         flexDirection: 'row',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5
//     },
//     child:{
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24
//     }
// })
//
// const Exercise3a = () => {
//   return(
//       <View style={[styles.parent, {marginTop:20}]}>
//           <View style={styles.child}>
//               <Text style={{backgroundColor:'powderblue'}}>Child One</Text>
//           </View>
//           <View style={styles.child}>
//               <Text style={{backgroundColor:'skyblue'}}>Child Two</Text>
//           </View>
//           <View style={styles.child}>
//               <Text style={{backgroundColor:'steelblue'}}>Child Three</Text>
//           </View>
//       </View>
//
//     // <View style={[styles.parent, {marginTop:20}]}>
//     //     <Text style={[styles.child, {backgroundColor:'powderblue'}]}>Child One</Text>
//     //     <Text style={[styles.child, {backgroundColor:'skyblue'}]}>Child Two</Text>
//     //     <Text style={[styles.child, {backgroundColor:'steelblue'}]}>Child Three</Text>
//     // </View>
//   );
// };
//
// export default Exercise3a;

// ************* Exercise 3B *************
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     parent:{
//         flexDirection: 'column',
//         flex: 1,
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5
//     },
//     child:{
//         flex: 1,
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24
//     }
// })
//
// const Exercise3b = () => {
//     return(
//         <View style={[styles.parent, {marginTop:20}]}>
//             <Text style={[styles.child, {backgroundColor:'powderblue'}]}>Child One</Text>
//             <Text style={[styles.child, {backgroundColor:'skyblue'}]}>Child Two</Text>
//             <Text style={[styles.child, {backgroundColor:'steelblue'}]}>Child Three</Text>
//         </View>
//     );
// };
//
// export default Exercise3b;

// ************* Exercise 3C *************
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     parent:{
//         flexDirection: 'column',
//         flex: 1,
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5
//     },
//     child:{
//         flex: 1,
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24
//     }
// })
//
// const Exercise3c = () => {
//     return(
//         <View style={[styles.parent, {marginTop:20}]}>
//             <Text style={[styles.child, {backgroundColor:'powderblue', maxWidth: 90}]}>Child One</Text>
//             <Text style={[styles.child, {backgroundColor:'skyblue'}]}>Child Two</Text>
//             <Text style={[styles.child, {backgroundColor:'steelblue', maxHeight: 120}]}>Child Three</Text>
//         </View>
//     );
// };
//
// export default Exercise3c;

// ************* Exercise 3D *************
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     parent:{
//         flexDirection: 'row',
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5
//     },
//     child:{
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24
//     }
// })
//
// const Exercise3d = () => {
//     return(
//         <View style={[styles.parent, {marginTop:20}]}>
//             <Text style={[styles.child, {backgroundColor:'powderblue', flex:1}]}>Child One</Text>
//             <Text style={[styles.child, {backgroundColor:'skyblue', flex:2}]}>Child Two</Text>
//             <Text style={[styles.child, {backgroundColor:'steelblue', flex:3}]}>Child Three</Text>
//         </View>
//     );
// };
//
// export default Exercise3d;

// ************* Exercise 3E *************
// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//     parent:{
//         flexDirection: 'column',
//         // justifyContent: 'flex-start',
//         // justifyContent: 'flex-end',
//         // justifyContent: 'space-around',
//         justifyContent: 'space-between',
//         flex: 1,
//         backgroundColor: '#F5fcff',
//         borderColor: '#0099AA',
//         borderWidth: 5
//     },
//     child:{
//         borderWidth: 2,
//         textAlign: 'center',
//         fontSize: 24
//     }
// })
//
// const Exercise3e = () => {
//     return(
//         <View style={[styles.parent, {marginTop:20}]}>
//             <Text style={[styles.child, {backgroundColor:'powderblue'}]}>Child One</Text>
//             <Text style={[styles.child, {backgroundColor:'skyblue'}]}>Child Two</Text>
//             <Text style={[styles.child, {backgroundColor:'steelblue'}]}>Child Three</Text>
//         </View>
//     );
// };
//
// export default Exercise3e;

// ************* Exercise 4 *************
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    parent:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        backgroundColor: '#whitesmoke',
    },
    child:{
        width: 80,
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
})

const Exercise4 = () => {
    return(
        <View style={[styles.parent, {marginTop:20, alignItems:'center'}]}>
            <Text style={[styles.child, {backgroundColor:'blue'}]}>Square 1</Text>
            <Text style={[styles.child, {backgroundColor:'green'}]}>Square 2</Text>
            <Text style={[styles.child, {backgroundColor:'red'}]}>Square 3</Text>
        </View>
    );
};

export default Exercise4;
