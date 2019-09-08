import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Header = styled(LinearGradient).attrs({
  colors: ['#320061', '#954cbf'],
})`
  width: 100%;
  height: 180px;
  /* padding: 10px; */
`;

export const HeaderText = styled.Text`
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin-top: 40px;
  font-weight: 600;
`;

export const ValueText = styled.Text`
  color: #fff;
  font-size: 40px;
  text-align: center;
  font-weight: bold;
`;

export const Product = styled.View`
  width: 95%;
  align-self: center;
  background-color: #d1caca;
  height: 400px;
  /* margin-top: 120px; */
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.View`
  border: 1px solid #fafafa;
`;

export const ImageProduct = styled.Image`
  padding-top: 10px;
  align-self: center;
  width: 70%;
  height: 300px;
  background: red;
`;

export const Content = styled.View`
  margin-top: 20px;
  width: 90%;
  border: 1px solid #eeee;
  /* height: 500px; */
  align-self: center;
  margin-bottom: 40px;
`;

export const HeaderContent = styled.View`
  width: 100%;
  background: #fff;
  height: 300px;
`;

export const ProductName = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: #333;
  margin-top: 20px;
`;

export const ContentDetail = styled.View`
  /* margin-top: 20px; */
  padding: 10px;
`;

export const ProductDescription = styled.Text`
  font-size: 13px;
  color: #999;
  margin-top: 20px;
`;

export const Prices = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-around;
  align-items: center;
`;

export const OldPrice = styled.Text`
  font-size: 14px;
`;

export const NewPrice = styled.Text`
  font-size: 19px;
  color: #320061;
  font-weight: bold;
`;

// Area Warn
export const Warn = styled.View`
  margin: 0px 20px 20px 20px;
  padding: 20px;
  background: #dec534;
  border: 1px solid #eee;
  border-radius: 4px;

  flex-direction: row;
  justify-content: space-between;
`;

export const ImageWarn = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 4px;
`;

export const TextWarn = styled.Text`
  color: white;
  margin-top: 4px;
  line-height: 19;
  margin-left: 10px;
  margin-right: 95px;
  font-weight: 500;
`;

export const ButtonRescue = styled.TouchableOpacity`
  height: 50px;
  width: 70%;
  align-self: center;
  background: red;
  border-radius: 4px;
  background: #320061;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;

// expo;
// Fim area Warn
