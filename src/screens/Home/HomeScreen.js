import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import styles from "./styles";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
	const navigation = useNavigation();

	return (
		<View>
			<Pressable
				style={styles.searchButton}
				onPress={() => navigation.navigate("Destination Search")}
			>
				<Fontisto name="search" color="#f15454" size={25} />
				<Text style={styles.searchButtonText}>
					Where are you going?
				</Text>
			</Pressable>
			<ImageBackground
				style={styles.image}
				source={require("../../../assets/images/background.jpg")}
			>
				<Text style={styles.title}> Go</Text>
				<Text style={styles.title}> Near</Text>

				<Pressable style={styles.button}>
					<Text style={styles.buttonText}>Explore nearby stays</Text>
				</Pressable>
			</ImageBackground>
		</View>
	);
};

export default HomeScreen;
