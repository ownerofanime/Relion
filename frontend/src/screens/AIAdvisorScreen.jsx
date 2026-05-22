import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AIAdvisorScreen = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text>AI Advisor Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default AIAdvisorScreen;
