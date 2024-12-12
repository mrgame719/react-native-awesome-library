import { Text } from 'react-native';
import { Container } from '../components/Container';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import { constant } from '../constants/constants';

const Profile = () => {
  return (
    <Container style={Styles.centered} backgroundColor={Colors.menu1}>
      <Text style={{ fontSize: constant.titleFontSize }}>Profile</Text>
    </Container>
  );
};

export default Profile;
