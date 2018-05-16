import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginTop: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin,
    borderRadius: metrics.borderRadius,
    padding: metrics.basePadding * 2,
  },

  image: {
    height: 60,
    width: 40,
  },

  info: {
    alignItems: 'flex-start',
    paddingHorizontal: metrics.basePadding,
  },

  name: {
    color: colors.black,
    fontSize: metrics.fontName,
    fontWeight: 'bold',
  },

  brand: {
    fontSize: metrics.fontBrand,
    color: colors.grey,
  },

  price: {
    fontSize: metrics.fontPrice,
    color: colors.green,
  },

  unit: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },

  input: {
    height: metrics.input,
    fontSize: metrics.fontInput,
    borderWidth: 1,
    borderColor: colors.grey,
    borderRadius: metrics.borderRadius,
    color: colors.grey,
  },

  iconButton: {
    marginLeft: metrics.baseMargin,
  },

  icon: {
    color: colors.grey,
  },
});

export default styles;
