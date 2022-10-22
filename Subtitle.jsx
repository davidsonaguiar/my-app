import { Text, StyleSheet } from "react-native"

export default ({children}) => {
    return (
        <Text style={styles.subtitle}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        marginBottom: 8,
        color: '#333',
        fontSize: 20,
        fontWeight: 'bold',
      },
})