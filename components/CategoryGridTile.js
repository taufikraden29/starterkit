import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const CategoryGridTile = ({ title, color, onPress, navigation }) => {
	return (
		<View style={styles.gridItem}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => [
					styles.button,
					pressed ? styles.buttonPressed : null,
				]}
				onPress={onPress}
			>
				<View style={[styles.innerContainer, { backgroundColor: color }]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default CategoryGridTile;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		backgroundColor: "white",
		margin: 16,
		height: 150,
		borderRadius: 10,
		elevation: 8,
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
	},
	button: {
		flex: 1,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		elevation: 8,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
	},
});
