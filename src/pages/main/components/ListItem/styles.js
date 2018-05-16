import { StyleSheet } from 'react-native';
import { metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    maxWidth: (metrics.screenWidth - 60) / 2,
    padding: metrics.basePadding,
    borderRadius: metrics.borderRadius,
  },

  imageContainer: {
    alignItems: 'center',
  },

  image: {
    height: metrics.heightImage,
    width: '80%',
  },

  info: {
    alignItems: 'flex-start',
  },

  name: {
    fontSize: metrics.fontName,
    fontWeight: 'bold',
    color: colors.black,
  },

  brand: {
    fontSize: metrics.fontBrand,
    color: colors.grey,
  },

  price: {
    fontSize: metrics.fontPrice,
    color: colors.green,
  },

});

export default styles;
