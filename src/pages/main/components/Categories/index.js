import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ProductsActions } from 'store/ducks/products';

import styles from './styles';

const Categories = ({ category, products, getProduRequest }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.buttom}
      onPress={() => { getProduRequest(category.id); }}
    >
      <Text
        style={[
          styles.text,
          (products === category.id) ? styles.active : {},
        ]}
      >
        {category.title}
      </Text>
    </TouchableOpacity>
  </View>
);

Categories.propTypes = {
  getProduRequest: PropTypes.func.isRequired,
  category: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  products: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products.categoryId,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProductsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
