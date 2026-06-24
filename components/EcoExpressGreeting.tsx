import { View, StyleSheet, Text } from "react-native";

export default function EcoExpressGreeting({name="nombreCliente", lastName="apellidoCliente"}) {
    const fecha = new Date();
    const hora = fecha.getHours();
    const saludo = hora < 12 ? 'Buenos días' : hora < 18 ? 'Buenas tardes' : 'Buenas noches';

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>
                {saludo},   
            </Text> 
            <Text style = {styles.title}>                                        
                {name ? ` ${name}` : ""}
                {lastName ? ` ${lastName}` : ""}
            </Text>
            <Text style = {styles.subtitle}>
                Hoy es {fecha.toLocaleDateString()} - {fecha.toLocaleTimeString()}
            </Text>
        </View>
    )
} 

const styles = StyleSheet.create({
container: {
    gap: 4,
    marginBottom: 16,
},
title: {
    fontSize: 22,
    fontWeight: 700,
    color: '#1b5e20',
    textAlign: "center",
},
subtitle: {
    fontSize: 12,
    color: '##333333',
    textAlign: "center",
}
})