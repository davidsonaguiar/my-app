import { Image, StyleSheet } from "react-native";

export default ({ src }) => {
    return(
        <Image style={styles.image}
              source={{uri: src}}></Image>
    )
}

const styles = StyleSheet.create({
    image: {
      width: 150,
      height: 150,
      marginBottom: 12,
      backgroundColor: '#999',
      borderWidth: 2,
      borderColor: '#FFF',
      borderRadius: 150,
    }
  });