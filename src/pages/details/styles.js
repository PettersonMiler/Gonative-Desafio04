import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    margin: metrics.baseMargin * 2,
    padding: metrics.basePadding,
    backgroundColor: colors.white,
    borderRadius: metrics.borderRadius,
  },

  imageContainer: {
    alignItems: 'center',
  },

  image: {
    height: metrics.heightImage * 1.5,
    width: '50%',
    marginBottom: metrics.baseMargin * 2,
  },

  infoContainer: {
    flexDirection: 'row',
  },

  product: {
    alignItems: 'flex-start',
  },

  name: {
    fontSize: metrics.fontName + 4,
    fontWeight: 'bold',
    color: colors.black,
  },

  brand: {
    fontSize: metrics.fontBrand + 1,
    color: colors.grey,
  },

  price: {
    fontSize: metrics.fontPrice + 10,
    color: colors.green,
  },

  containerPrice: {
    flex: 1,
    alignItems: 'flex-end',
  },

  button: {
    height: metrics.heightButton,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.green,
    marginVertical: metrics.baseMargin * 2,
    borderRadius: metrics.borderRadius,
  },

  textButton: {
    color: colors.white,
    fontWeight: 'bold',
  },

});

export default styles;
