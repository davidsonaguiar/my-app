import { Text, StyleSheet } from "react-native"

export default ({children}) => {
    return (
        <Text style={styles.paragraph}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    paragraph: {
        marginBottom: 8,
        paddingLeft: 8,
        color: '#666',
        fontSize: 14,
        textAlign: 'justify',
    }
})