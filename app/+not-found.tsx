import { View, StyleSheet } from "react-native";
import { Link, Stack} from "expo-router";

export default function NotFoundScreen() {
    return (
        <>
        <Stack.Screen options={{ title: "Oops! page not found" }} />
        <View style={styles.container}>
            <Link href="/" style={styles.button}>
                Go back to Home screen!
            </Link>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#faebd7",
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        fontSize: 20,
        color: "#2f4f4f",
        textDecorationLine: "underline",
    },
});