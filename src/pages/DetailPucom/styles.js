import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
  background: #320061;
`;

export const Header = styled.View`
  height: 300px;
  width: 100%;
  background: #fff;

  justify-content: center;
  align-items: center;
`;

export const ContainerImage = styled.View`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  background: #efefef;

  justify-content: center;
  align-items: center;
`;

export const ImageProduct = styled.Image`
  width: 246px;
  height: 246px;
  border-radius: 200px;
`;

export const Content = styled.View`
  /* margin-top: 35px; */
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  padding: 20px;
  background: #320061;
`;

export const Separator = styled.View`
  border-width: 0.3px;
  /* borderRadius: 5px, */
  border-style: dashed;
  margin-top: 40px;
  margin-bottom: 5px;
  border-color: rgba(255, 255, 255, 0.5);
`;

export const ProductName = styled.Text`
  margin-top: 40px;
  font-size: 20px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-weight: 100;
  opacity: 0.8;
`;

export const ContentOff = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const OffText = styled.Text`
  color: #fff;
  opacity: 0.8;
  font-size: 14px;
`;

export const OffStoreName = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const ContentOldPrice = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const OldPrice = styled.Text`
  color: #fff;
  opacity: 0.8;
  font-size: 14px;
`;
export const Discount = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const PriceWithDiscount = styled.Text`
  margin-top: 30px;
  font-size: 40px;
  color: #fff;
  text-align: center;
`;

export const Warn = styled.Text`
  margin-top: 40px;
  font-size: 30px;
  text-align: center;
  color: #fff;
`;

export const TextWarn = styled.Text`
  margin-top: 20px;
  opacity: 0.6;
  font-size: 16px;
  color: #fff;
  text-align: center;
  line-height: 30px;
  margin-bottom: 40px;
`;

export const Footer = styled.View`
  height: 63px;
  width: 100%;
  background: #fff;

  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  justify-content: center;
  align-items: center;
`;

export const ConfirmButton = styled(RectButton)`
  height: 58px;
  width: 90%;
  background: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: #320061;
  font-size: 18px;
  font-weight: 100;
`;
