import React from "react";
import { View, TextInput } from "react-native";
import styles from "./searchBar.style";

const searchBar = (props) => {
	return(
		<View style={styles.container}>
			<TextInput style={styles.textInput} 
				placeholder={"Search"}
				onChangeText={props.onSearch}
			/>
		</View>
	);
}

export default searchBar;