import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Details = ({ navigation }) => {
  const { product } = navigation.state.params;
  const action = navigation.state.params.CartActions.carConfirm;
  console.tron.log(product);
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: product.image }} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.product}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.brand}>{product.brand}</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>R${product.price}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={() => action(product)} style={styles.button}>
        <Text style={styles.textButton}>Adicionar ao carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

Details.navigationOptions = {
  title: 'Detalhe do produto',
};

Details.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Details;
