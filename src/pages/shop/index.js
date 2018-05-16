import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from 'store/ducks/cart';
import { View, FlatList } from 'react-native';
import CartItem from './components/CartItem';
import Total from './components/Total';
import styles from './styles';

const Shop = ({
  cart,
  total,
  carRemove,
  carQuantity,
}) => {
  console.tron.log(cart);
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={category => String(category.id)}
        renderItem={({ item }) =>
          <CartItem product={item} carRemove={carRemove} carQuantity={carQuantity} />}
      />
      <View style={styles.subTotal}>
        <Total total={total} />
      </View>
    </View>
  );
};

Shop.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })).isRequired,
  total: PropTypes.number.isRequired,
  carRemove: PropTypes.func.isRequired,
  carQuantity: PropTypes.func.isRequired,
};

Shop.navigationOptions = () => ({
  title: 'Carrinho',
});

const mapStateToProps = state => ({
  cart: state.cart.data,
  total: state.cart.total,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);

