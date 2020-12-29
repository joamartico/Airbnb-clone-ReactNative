import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Fontisto, FontAwesome5 } from "@expo/vector-icons";
import HomeScreen from '../screens/Home/HomeScreen';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				activeTintColor: "#f15454",
				safeAreaInsets: {
					bottom: 0,
					top: 0,
				},

				style: {
					backgroundColor: "red",
					marginBottom: 0,
				},
			}}
		>
			<Tab.Screen
				name="Explore"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Fontisto name="search" size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Saved"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="heart" size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Airbnb"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="airbnb" size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Messages"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<Fontisto name="comment" size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="Profile"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name="user" size={25} color={color} />
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default HomeTabNavigator;
