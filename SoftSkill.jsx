import { Text, StyleSheet } from 'react-native'

export default ({ name }) => {
    return(
        <Text style={styles.softSkill}>{name}</Text>
    )
}

const styles = StyleSheet.create({
    softSkill: {
        marginRight: 12,
        paddingHorizontal: 12,
        backgroundColor: '#f1f1f1',
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: 5,
        color: '#333',
        lineHeight: 30,
        flexDirection: 'row',
      }
})