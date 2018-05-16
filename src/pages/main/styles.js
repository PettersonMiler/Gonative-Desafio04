import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.page,
  },

  category: {
    height: metrics.heightHeader,
    backgroundColor: colors.red,
  },

  list: {
    marginHorizontal: metrics.baseMargin * 2,
    marginVertical: metrics.baseMargin,
    justifyContent: 'space-between',
  },

  loading: {
    marginTop: metrics.baseMargin * 2,
  },

});

export default styles;
