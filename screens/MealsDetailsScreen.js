import { StyleSheet, Text, View } from "react-native";
import React from "react";

const MealsDetailsScreen = ({ route }) => {
	const mealId = route.params.mealId;
	return (
		<View>
			<Text>MealsDetailsScreen</Text>
		</View>
	);
};

export default MealsDetailsScreen;

const styles = StyleSheet.create({});
