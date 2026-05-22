import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ConnectionDetailScreen = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <View style={styles.container}>
      <Text>Connection Detail Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default ConnectionDetailScreen;
