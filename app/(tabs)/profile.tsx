import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import Screen from '@/components/Screen';
import EcoExpressGreeting from '@/components/EcoExpressGreeting';
import ProfileCard from '@/components/ProfileCard';

export default function ProfileScreen() {
  const [phone, setPhone] = useState('0993472803');
  const save = () => {
    Alert.alert('¡Listo!', `Número actualizado: ${phone}`);
  };

  return (
    <Screen>
      <EcoExpressGreeting 
        name='Priscila' 
        lastName='Rodriguez'
      />
      <ProfileCard
        name='Priscila'
        lastName='Rodriguez'
        email='priscilarodriguez26@gmail.com'
      />
      <View style={styles.section}>
        <Text style={styles.label}>Actualiza tu número de teléfono</Text>
        <TextInput
          style={styles.textBox}
          placeholder="Ingresa tu número"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          keyboardType="phone-pad"
        />
        <TouchableOpacity style={styles.button} onPress={save}>
          <Text style={styles.buttonText}>GUARDAR CAMBIOS</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
    gap: 10,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#1b5e20',
    fontWeight: '600',
  },
  textBox: {
    fontSize: 16,
    width: '100%',
    height: 44,
    borderWidth: 1,
    borderColor: '#2e7d32',
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#2e7d32',
    borderRadius: 10,
    paddingVertical: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});