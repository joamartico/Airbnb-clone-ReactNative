import { StatusBar } from "expo-status-bar";
import React from "react";
import "react-native-gesture-handler";
import Router from './src/components/navigation/Router';


export default function App() {
	return (
		<>
			<StatusBar barStyle="dark-content" />
			<Router />
		</>
	);
}
