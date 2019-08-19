import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background: #320060;
  padding: 10px;
`;

export const ListCategories = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ListCoupons = styled.FlatList.attrs({
  horizontal: false,
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
  margin-top: 20px;
  margin-bottom: 20px;
`;
