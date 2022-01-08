import { StatusBar } from 'expo-status-bar'
import React, { useRef, useState } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	SafeAreaView,
	TouchableOpacity,
	ScrollView,
} from 'react-native'

export default function App() {
	const [todo, setTodo] = useState([])
	const myTextInput = useRef()
	const handleAddTodo = (e) => {
		setTodo([...todo, { key: Date.now(), title: e.nativeEvent.text }])
		myTextInput.current.clear()
	}
	const handleRemove = (key) => {
		setTodo([...todo.filter((item) => item.key !== key)])
	}
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Text style={styles.logo}>Todo app</Text>
			</View>
			<TextInput
				ref={myTextInput}
				placeholder="Nhập nhiệm vụ của bạn ở đây"
				style={styles.textInput}
				onSubmitEditing={handleAddTodo}
				placeholderTextColor="gray"
			/>
			<Text style={{ marginTop: 16, marginBottom: 8, textAlign: 'center' }}>
				Click để xóa
			</Text>
			<ScrollView style={styles.content}>
				{todo.map((item) => (
					<TouchableOpacity
						style={styles.box}
						key={item.key}
						onPress={() => handleRemove(item.key)}
					>
						<Text style={styles.boxText}>{item.title}</Text>
					</TouchableOpacity>
				))}
			</ScrollView>
			<StatusBar style="auto" />
			<Text style={styles.title}>Design By Mai Trí Toàn :v</Text>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFDEFA',
	},
	logo: {
		fontSize: 26,
		color: 'black',
		textAlign: 'center',
		marginVertical: 32,
		fontWeight: 'bold',
	},
	title: {
		fontSize: 12,
		textAlign: 'center',
		marginBottom: 16,
	},
	textInput: {
		color: 'black',
		backgroundColor: 'white',
		borderColor: 'black',
		borderStyle: 'solid',
		borderWidth: 1,
		height: 45,
		padding: 10,
		marginHorizontal: 16,
	},
	content: {
		flex: 1,
		margin: 16,
		marginTop: 0,
	},
	box: {
		height: 'auto',
		padding: 10,
		backgroundColor: '#F0D9FF',
		marginBottom: 10,
		height: 45,
		flex: 1,
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: '#6B7AA1',
	},
	boxText: {
		color: '#170055',
		fontSize: 16,
		fontWeight: 'bold',
	},
})
