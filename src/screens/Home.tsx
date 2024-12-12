import { Text } from 'react-native';
import { Container } from '../components/Container';
import Styles from '../common/Styles';
import Colors from '../constants/Colors';
import { constant } from '../constants/constants';

const Home = () => {
  return (
    <Container style={Styles.centered} backgroundColor={Colors.menu3}>
      <Text style={{ fontSize: constant.titleFontSize }}>Home</Text>
    </Container>
  );
};

export default Home;
