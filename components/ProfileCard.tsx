import { View, Text, Image, StyleSheet } from 'react-native';

type Props = {
  name: string;
  lastName: string;
  email: string;
}

export default function ProfileCard({ name, lastName, email }: Props) {
  return (
    <View style={styles.card}>
      <Image
        source={require('../assets/images/cliente1.jpg')}
        style={styles.avatar}
      />
      <Text style={styles.title}>{name} {lastName}</Text>
      <Text style={styles.subtitle}>{email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    gap: 6,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    width: '100%',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#2e7d32',
    marginBottom: 8,
  },
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