import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const CartItem = ({ product, carRemove, carQuantity }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: product.image }} />
    <View style={styles.info}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.brand}>{product.brand}</Text>
      <Text style={styles.price}>R${product.price}</Text>
    </View>
    <View style={styles.unit}>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="numeric"
        maxLength={3}
        placeholderTextColor="#C0C0C0"
        underlineColorAndroid="transparent"
        value={String(product.qtt)}
        onChangeText={text => carQuantity(product.id, Number(text))}
      />
      <TouchableOpacity onPress={() => carRemove(product.id)} style={styles.iconButton}>
        <Icon name="remove" size={24} style={styles.icon} />
      </TouchableOpacity>

    </View>
  </View>
);

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
  carRemove: PropTypes.func.isRequired,
  carQuantity: PropTypes.func.isRequired,
};

export default CartItem;
