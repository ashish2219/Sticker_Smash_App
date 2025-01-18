import { StyleSheet } from "react-native";
import { Image, type ImageSource } from "expo-image";

type Props = {
    imgSource: ImageSource;
    chosenImage?: string;
}

export default function ImageViewer({ imgSource, chosenImage }: Props ) {
    const imageSource = chosenImage ? { uri: chosenImage } : imgSource;

    return <Image source={imageSource} style={styles.image} />
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 12,
    }
});