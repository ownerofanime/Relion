import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddConnectionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Add Connection Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default AddConnectionScreen;
