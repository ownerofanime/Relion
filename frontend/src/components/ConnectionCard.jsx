import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ConnectionCard = ({ connection, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text>{connection.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#eee' },
});

export default ConnectionCard;
