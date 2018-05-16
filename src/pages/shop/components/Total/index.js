import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';

const Total = ({ total }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Subtotal</Text>
    <Text style={styles.total}>R${total.toFixed(2)}</Text>
  </View>
);

Total.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Total;
