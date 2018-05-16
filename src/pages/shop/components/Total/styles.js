import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    height: metrics.heightSubTotal,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    marginBottom: 1,
    marginTop: metrics.baseMargin / 2,
  },

  title: {
    fontSize: metrics.fontSubTotal,
    color: colors.gray,
  },

  total: {
    fontSize: metrics.fontPrice + 10,
    color: colors.green,
    fontWeight: 'bold',
  },

});

export default styles;
