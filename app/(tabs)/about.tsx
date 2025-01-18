import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                About Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#faebd7",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "#2f4f4f",
    }
})