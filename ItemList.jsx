import { Text, View, StyleSheet } from "react-native"

export default ({ name, nivel }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.containerAlign}>
                <Text style={styles.textNivel}>{nivel}%</Text>
                <View style={styles.nivel}>
                    <View style={[styles.progress, {width: `${nivel}%`}]}></View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
        padding: 12,
        backgroundColor: '#f1f1f1',
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: 5,
    },
    name: {
        color: '#333',
        fontSize: 20,
    },
    containerAlign: {
        alignItems: "flex-end",
    },
    nivel: {
        width: '100%',
        height: 12,
        paddingHorizontal: 2,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#d3d3d3',
        borderRadius: 6,
        justifyContent: 'center',
    },
    textNivel: {
        color: '#333',
        fontSize: 14,
    },
    progress: {
        height: 6,
        backgroundColor: '#999',
        borderRadius: 4,
    }
})