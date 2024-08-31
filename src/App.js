import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoryScreens from "../screens/CategoryScreens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MealsOverviewScreen from "../screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name="MealsCategories" component={CategoryScreens} />
					<Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
				</Stack.Navigator>
			</NavigationContainer>
			<CategoryScreens />
		</>
	);
};

export default App;

const styles = StyleSheet.create({});
