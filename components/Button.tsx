import { StyleSheet, View, Pressable, Text } from "react-native";
import FontAwesone from "@expo/vector-icons/FontAwesome";

type Props = {
    label: string;
    theme?: "primary";
    onPress?: () => void;
}

export default function Button({ label, theme, onPress }: Props) {
    if (theme === "primary") {
        return(
            <View style={[ styles.buttonContainer, 
            { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 16 } ]}>

                <Pressable style={[ styles.button, { backgroundColor: "#d7b2b2" } ]} 
                    onPress={onPress}>
                    <FontAwesone name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
                    <Text style={[ styles.buttonLabel, { color: "#25292e" }]}>
                        {label}
                    </Text>
                </Pressable>

            </View>
        );
    }

    return(
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonLabel}>
                        {label}
                    </Text>
                </Pressable>
            </View>
        );
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
    },
    button: {
        borderRadius: 10,
        height: "100%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: "#2f4f4f",
        fontSize: 16,
    },
});