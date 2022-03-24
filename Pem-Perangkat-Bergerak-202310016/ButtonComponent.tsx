import { Alert, StyleSheet, Button, Text, View } from 'react-native';

export function ButtonComponent() {
  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <View>
      <View>
        <Text style={styles.baseText}>
          <Text style={styles.titleText}>
            Button Element
            {"\n"}
          </Text>
        </Text>
      </View>

      <View>
        <Button
          title="Press me"
          onPress={() => Alert.alert('You just pressed me')}
        />
      </View>
      <Separator />

      <View style={styles.fixToText}>
        <Button
          title="Touch me"
          onPress={() => Alert.alert('You just touched me')}
        />
        <Button
          title="Click me"
          onPress={() => Alert.alert('You clicked me')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold"
  },

  fixToText:{
    flexDirection: "row",
    justifyContent: "space-between"
  },

  separator:{
    borderWidth: 0.5,
    borderColor:'#bcbbbd',
    marginTop: 5,
    marginBottom: 5
  }
});

export default ButtonComponent;
