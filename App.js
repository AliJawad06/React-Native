import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style = {styles.inputContainer}>
        <TextInput style = {styles.textInput} placeholder = 'your course goal'/>
        <Button title = "add Goal" />
      </View>
      <View style = {styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, 
    paddingTop:50,
    paddingHorizontal: 16, 
  },
  inputContainer: {
    flex:1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24, 
    borderBottomWidth: 1, 
    borderBottomColor: '#cccccc'
  },
  textInput:{
    borderWidth: 1, 
    borderColor: '#cccccc', 
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5,
  }
});
