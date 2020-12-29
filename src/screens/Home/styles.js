import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        height: 500,
        width: "100vw",
        resizeMode: "cover",
        justifyContent: "center"
    },
    title: {
        fontSize: 80,
        fontWeight: "bold",
        color: "#fff",
        marginLeft: 10,
        marginTop: -15,
    },
    button: {
        backgroundColor: "white",
        width: 200,
        height: 40, 
        marginLeft: 25,
        marginTop : 25,
        justifyContent: 'center', alignItems: 'center',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold"
    },
    searchButton: {
        backgroundColor: "white",
        flexDirection: "row",
        height: 60, 
        justifyContent: 'center', alignItems: 'center',
        position: "absolute",
        top: 50,
        left: 25,
        right: 25,
        zIndex: 100,
        borderRadius: 50
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 10
    }
})

export default styles