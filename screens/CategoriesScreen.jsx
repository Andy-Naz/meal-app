import { FlatList } from "react-native"
import { CATEGORIES } from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"

const CategoriesScreen = ({ navigation }) => {
    const pressHandler = (item) => {
        navigation.navigate("MealsOverview", { categoryId: item.id })
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <CategoryGridTile title={item.title} color={item.color} onPress={() => pressHandler(item)} />
            )}
            numColumns={2}
        />
    )
}

export default CategoriesScreen
