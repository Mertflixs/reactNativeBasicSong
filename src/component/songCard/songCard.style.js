import { StyleSheet } from "react-native";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";

export default StyleSheet.create({
	container: {
		padding: 10,
		flexDirection: "row",

	},
	image: {
		width: 130,
		height: 130,
		borderRadius: 65
	},
	inner_container: {
		padding: 10,
		flex: 1,
		justifyContent: "center",
	},
	title: {
		fontWeight: "bold",
		fontSize: 23,
	},
	content_container: {
		flexDirection: "row",
	},
	info_container: {
		flexDirection: "row",
		flex: 1,
		alignItems: "center",
	},
	name: {
		fontWeight: "bold",
		color: "black",
	},
	year: {
		marginLeft: 5,
		color: "gray",
		fontWeight: "bold",
	},
	soldout_container: {
		borderWidth: 1,
		borderColor: "#f76060",
		padding: 3,
		borderRadius: 3,
	},
	soldout_text: {
		color: "#f76060",
		fontSize: 10,
	},
})