import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from 'store/ducks/categories';
import { Creators as ProductsActions } from 'store/ducks/products';
import { Creators as CartActions } from 'store/ducks/cart';

import {
  YellowBox,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';
import Categories from './components/Categories';
import ListItem from './components/ListItem';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

class Main extends Component {
  static navigationOptions = () => ({
    title: 'GoCommerce',
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
      })),
      loadign: PropTypes.bool,
    }).isRequired,
    products: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape()),
    }).isRequired,
    ProductsActions: PropTypes.shape({
      getProduRequest: PropTypes.func,
    }).isRequired,
    CategoriesActions: PropTypes.shape({
      getCategRequest: PropTypes.func.isRequired,
    }).isRequired,
    CartActions: PropTypes.shape().isRequired,
  };

  componentDidMount() {
    this.props.CategoriesActions.getCategRequest();
    this.props.ProductsActions.getProduRequest(1);
  }

  render() {
    console.tron.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.category}>
          { this.props.categories.loadign
          ? <ActivityIndicator size="small" color="#FFF" style={styles.loading} />
          : (
            <FlatList
              data={this.props.categories.data}
              horizontal
              keyExtractor={category => String(category.id)}
              renderItem={({ item }) => <Categories category={item} />}
            />
          )}
        </View>

        <FlatList
          data={this.props.products.data}
          keyExtractor={product => String(product.id)}
          numColumns={2}
          columnWrapperStyle={styles.list}
          renderItem={({ item }) => <ListItem onPress={() => this.props.navigation.navigate('Details', { product: item, CartActions: this.props.CartActions })} product={item} />}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products,
});

function mapDispatchToProps(dispatch) {
  return {
    CategoriesActions: bindActionCreators(CategoriesActions, dispatch),
    ProductsActions: bindActionCreators(ProductsActions, dispatch),
    CartActions: bindActionCreators(CartActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
