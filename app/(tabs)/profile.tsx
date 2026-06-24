import { StyleSheet, View, Text } from 'react-native';
import Screen from '@/components/Screen';
import EcoExpressGreeting from '@/components/EcoExpressGreeting';

export default function ProfileScreen() {
  return (
    <Screen>
      <EcoExpressGreeting name='Priscila' lastName='Rodriguez' />
      <Text style={styles.subtitle}>priscilarodriguez@gmail.com</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1b5e20',
    textAlign: 'center',
  },
  subtitle: {
    fontStyle: 'italic',
    fontSize: 14,
    color: '#2e7d32',
    textAlign: 'center',
  },
});
















// import Screen from '@/components/Screen';
// import EcoExpressGreeting from '@/components/EcoExpressGreeting';
// import { Image } from 'expo-image';
// import { Platform, StyleSheet, View, Text, TextInput, Button } from 'react-native';


// const email = 'priscilarodriguez@gmail.com';
// const phoneNumber = '09********';

// export default function ProfileScreen() {
//   return (
//     <View style={styles.container}>
//       <Image></Image>
//       {/* <Text style={styles.title}>¡Hola, {name} {apellido}!</Text> */}
//       <EcoExpressGreeting name='Priscila' lastName='Rodriguez'/>
//       <Text style={styles.subtitle}>{email}</Text>
//       <Text style={styles.subtitle}>{phoneNumber}</Text>

//       <TextInput style={styles.textBox} placeholder="Actualiza tu número" onChangeText={(text) => {}}/>

//       <Button title="Guardar cambios" onPress={() => {}} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#d5fddd',
//     padding: 24,
//     gap: 8,
//   },
//   // image: {
//   //   resizeMode: ,
//   // },
//   title: {
//     // fontFamily: ,
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#26741c',
//     textAlign: 'center',
//   },
//   subtitle: {
//     fontStyle: 'italic',
//     fontSize: 16,
//     color: '#305327',
//     textAlign: 'center',
//     },
//   textBox: {
//     fontSize: 16,
//     color: '#000000f6',
//     width: 160,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#7c7c7c',
//     borderRadius: 7,
//     textAlign: 'center',
//   },
// });
