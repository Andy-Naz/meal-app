import { useLayoutEffect } from "react"
import { StyleSheet } from "react-native"
import { MEALS, CATEGORIES } from "../data/dummy-data"
import MealsList from "../components/MealsList/MealsList"

const MealsOverviewScreen = ({ route, navigation }) => {
    const categoryId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.includes(categoryId)
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title

        navigation.setOptions({
            title: categoryTitle,
        })
    }, [categoryId, navigation])

    return <MealsList items={displayedMeals} />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
})

export default MealsOverviewScreen
