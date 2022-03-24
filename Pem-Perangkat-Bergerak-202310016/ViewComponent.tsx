import { StyleSheet, Text, View } from 'react-native';

export function ViewComponent() {
  return (
    <View 
    style={{
        flexDirection: "row",
        height: 100,
        backgroundColor: "yellow",
        padding: 20
    }}
    >
      <View style={{ backgroundColor: "blue", width: 100}} />
      <View style={{ backgroundColor: "red", flex: 0.5, marginLeft: 3 }} />
      <Text>Hello World!</Text>
    </View>
  );
}

export default ViewComponent;
