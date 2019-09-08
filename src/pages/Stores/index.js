import React, { useState } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';

import Icon, {
  FaPlus,
  FaSpinner,
} from 'react-native-vector-icons/MaterialIcons';

import { ListStore, Container, SubmitButton, Form, Input } from './styles';

import Background from '~/components/Background';

import Store from '~/components/Store';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Stores({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [textSearch, setTextSearch] = useState('');

  function handleSubmit() {}

  function handleNavigateStore() {
    navigation.navigate('DetailStore');
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
          data={data}
          renderItem={({ item }) => (
            <Store handleNavigateStore={() => handleNavigateStore()} />
          )}
        />
      </Container>
    </Background>
  );
}
