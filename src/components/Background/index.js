import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export default styled(LinearGradient).attrs({
  colors: ['#320061', '#954cbf'],
})`
  flex: 1;
  border-top-left-radius: 11px;
  border-top-right-radius: 11px;
  padding: 10px;
`;
