import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, Image } from 'react-native';

import styles from './styles';

const ListItem = ({ product, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: product.image }} />
    </View>
    <View style={styles.info}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.brand}>{product.brand}</Text>
      <Text style={styles.price}>R${product.price}</Text>
    </View>
  </TouchableOpacity>
);

ListItem.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ListItem;
