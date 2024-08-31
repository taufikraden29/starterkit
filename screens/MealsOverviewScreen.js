import { FlatList, StyleSheet, Text, View } from "react-native";
import { useLayoutEffect } from "react";
import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
	const catId = route.params.categoryId;

	const tampilkanMakanan = MEALS.filter((makananItem) => {
		return makananItem.categoryIds.indexOf(catId) >= 0;
	});

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find(
			(category) => category.id === catId,
		).title;

		navigation.setOptions({
			title: categoryTitle,
		});
	}, [catId, navigation]);

	function renderMakananItem(itemData) {
		const item = itemData.item;

		const makananItemProps = {
			id: item.id,
			title: item.title,
			imageUrl: item.imageUrl,
			affordability: item.affordability,
			duration: item.duration,
			complexity: item.complexity,
		};

		return (
			<View>
				<MealItem {...makananItemProps} />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={tampilkanMakanan}
				keyExtractor={(item) => item.id}
				renderItem={renderMakananItem}
			/>
		</View>
	);
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
