import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 10,
  baseMargin: 10,
  heightHeader: 54,
  fontHeader: 16,
  heightCategory: 44,
  paddingButtomCategory: 16,
  fontCategory: 12,
  borderCategory: 5,
  borderRadius: 5,
  heightImage: 180,
  fontName: 14,
  fontBrand: 11,
  fontPrice: 14,
  heightButton: 45,
  heightSubTotal: 100,
  fontSubTotal: 14,
  fontInput: 12,
  input: 35,

  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
