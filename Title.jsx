import { Text, StyleSheet } from "react-native"

export default ({children}) => {
    return (
        <Text style={styles.title}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
      },
})