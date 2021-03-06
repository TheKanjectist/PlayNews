import {StyleSheet, Platform} from 'react-native';
import {Colours} from '../../constant/Colours';
import {DefaultFontFamily} from '../../shared/layoutStyles/DarkLayoutStyle';
import {getPercentageWidth} from '../../util/Dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',

    alignItems: 'center',
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 30,
    marginBottom: 15,
  },
  profileName: {
    fontSize: 28,
    color: Colours.White,
    fontWeight: '300',
    fontFamily: DefaultFontFamily.Thin,
    marginTop: 30,
  },
  profileBio: {
    fontSize: 19,
    width: getPercentageWidth(80),
    color: Colours.Grey,
    fontWeight: '200',
    fontFamily: DefaultFontFamily.Thin,
    marginTop: 20,
    paddingHorizontal: 14,
    textAlign: 'center',
    lineHeight: 30,
  },
  actionLabel: {
    fontWeight: 'bold',
    fontFamily: DefaultFontFamily.Bold,
    marginVertical: 50,
    textDecorationLine: 'underline',
    color: Colours.White,
  },
  formControl: {
    paddingHorizontal: 10,
    marginVertical: 25,
    width: '80%',
    color: Colours.White,
  },
  submitBtn: {
    marginVertical: 40,
    // paddingHorizontal: 30,
    // width: '90%',
    width: Platform.ios ? '80%' : getPercentageWidth(80),
    alignSelf: 'center',
  },
});

export default styles;
