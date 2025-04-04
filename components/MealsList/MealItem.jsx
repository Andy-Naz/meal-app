import { useNavigation } from "@react-navigation/native"
import { Image, Pressable, StyleSheet, Text, View, Platform } from "react-native"
import MealDetails from "../MealDetails"

const MealItem = ({ id, title, affordability, complexity, imageUrl, duration }) => {
    const navigation = useNavigation()

    const selectMealItemHandler = () => {
        navigation.navigate("MealDetail", {
            mealId: id,
        })
    }
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={selectMealItemHandler}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} affordability={affordability} complexity={complexity} />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    button: { flex: 1 },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
})

export default MealItem
