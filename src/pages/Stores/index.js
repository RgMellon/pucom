import React, { useState, useEffect } from 'react';

import { Keyboard, ActivityIndicator } from 'react-native';

import Icon, {
  FaPlus,
  FaSpinner,
} from 'react-native-vector-icons/MaterialIcons';

import { ListStore, Container, SubmitButton, Form, Input } from './styles';

import Background from '~/components/Background';

import Store from '~/components/Store';
import api from '~/services/api';

// const data = useEffect()

export default function Stores({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const [store, setStore] = useState([]);

  function handleSubmit() {}

  useEffect(() => {
    async function getShops() {
      try {
        const response = await api.get('shops');
        const { shops } = response.data;
        // console.tron.log(data);
        setStore(shops);
      } catch (e) {
        // console.tron.log(e);
      }
    }

    getShops();
  }, []);

  function handleNavigateStore(id) {
    navigation.navigate('DetailStore', { id });
  }

  return (
    <Background>
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuário"
            onChangeText={setTextSearch}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            {loading ? (
              <ActivityIndicator color="#FFF" />
            ) : (
              <Icon name="add" size={22} color="#FFF" />
            )}
          </SubmitButton>
        </Form>

        <ListStore
          numColumns={2}
          data={store}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Store
              image={item.image}
              name={item.fantasy_name}
              handleNavigateStore={() => handleNavigateStore(item.id)}
            />
          )}
        />
      </Container>
    </Background>
  );
}
