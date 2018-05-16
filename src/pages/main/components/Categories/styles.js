import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: metrics.fontCategory,
    fontWeight: 'bold',
    color: colors.white,
    paddingVertical: metrics.paddingButtomCategory,
    marginHorizontal: metrics.baseMargin * 2,
    borderBottomWidth: metrics.borderCategory,
    borderBottomColor: colors.red,
    opacity: 0.4,
  },

  active: {
    fontSize: metrics.fontCategory,
    fontWeight: 'bold',
    color: colors.white,
    paddingVertical: metrics.paddingButtomCategory,
    marginHorizontal: metrics.baseMargin * 2,
    borderBottomWidth: metrics.borderCategory,
    borderBottomColor: colors.white,
    opacity: 1,
  },
});

export default styles;
