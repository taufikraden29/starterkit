import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryScreens from "../screens/CategoryScreens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MealsOverviewScreen from "../screens/MealsOverviewScreen";
import MealsDetailsScreen from "../screens/MealsDetailsScreen";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: "#D7204C",
						},
						headerTintColor: "white",
						contentStyle: {
							backgroundColor: "white",
						},
					}}
				>
					<Stack.Screen
						name="MealsCategories"
						component={CategoryScreens}
						options={{
							title: "All Kategories",
						}}
					/>
					<Stack.Screen
						name="MealsOverview"
						component={MealsOverviewScreen}
						// options={({ route, navigation }) => {
						// 	const catId = route.params.categoryId;
						// 	return {
						// 		title: catId,
						// 	};
						// }}
					/>
					<Stack.Screen name="MealDetail" component={MealsDetailsScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default App;

const styles = StyleSheet.create({});
