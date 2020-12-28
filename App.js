import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import feed from "./assets/data/feed";

import Post from "./src/components/Post/Post";
import SearchResultsScreen from "./src/screens/SearchResults/SearchResultsScreen";


const post1 = feed[0]

export default function App() {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<SafeAreaView>
				{/* <HomeScreen /> */}
				{/* <Post post={post1}/> */}
				<SearchResultsScreen />
			</SafeAreaView>
		</>
	);
}
