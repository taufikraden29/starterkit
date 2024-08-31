import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useLinkBuilder, useNavigation } from "@react-navigation/native";

const MealItem = ({
	id,
	title,
	imageUrl,
	duration,
	complexity,
	affordability,
}) => {
	const navigation = useNavigation();

	function selectMealItemHandler() {
		navigation.navigate("MealDetail", {
			mealId: id,
		});
	}

	return (
		<View style={styles.makananItem}>
			<Pressable
				android_ripple={{ color: "#ccc" }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
				onPress={selectMealItemHandler}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image style={styles.image} source={{ uri: imageUrl }} />
						<Text style={styles.title}>{title}</Text>
					</View>
					<View style={styles.details}>
						<Text style={styles.detailsItem}>{duration}</Text>
						<Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
						<Text style={styles.detailsItem}>
							{affordability.toUpperCase()}
						</Text>
					</View>
				</View>
			</Pressable>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	makananItem: {
		margin: 16,
		borderRadius: 20,
		overflow: "hidden",
		backgroundColor: "white",
		elevation: 4,
	},
	image: {
		width: 200,
		height: 200,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
		textAlign: "center",
		color: "#000",
	},
	details: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		justifyContent: "center",
	},
	detailsItem: { marginHorizontal: 4, fontSize: 12 },
	innerContainer: {
		borderRadius: 8,
	},
});
