import React, { useState, useEffect, useMemo } from 'react';
import { Picker, ToastAndroid, Text } from 'react-native';
import axios from 'axios';
import Modal from 'react-native-modal';

import Icon from 'react-native-vector-icons/MaterialIcons';

import DateInput from '~/components/DateInput';

import api from '~/services/api';

import image from './avatar3.png';
import confirmAddress from './confirmAddress.png';

import {
  Container,
  Header,
  ImageRegister,
  Content,
  Title,
  RegisterInput,
  Label,
  ContainerPicker,
  ContentCep,
  ButtonSearchCep,
  TextButtonSearchCep,
  ContentModal,
  ImageConfirmAddress,
  TitleModal,
  TextAddress,
  ButtonSubmit,
  TextButtonSubmit,
  ContentRegisterInput,
} from './styles';

export default function RegisterInfos({ navigation }) {
  const id = navigation.getParam('id');

  const [date, setDate] = useState(new Date());
  const [gender, setGender] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [visible, setVisible] = useState(false);

  const [district, setDistrict] = useState('');
  const [address, setAdress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const [load, setLoad] = useState(false);
  const [loadSubmit, setLoadSubmit] = useState(false);

  const formatedCep = useMemo(() => {
    return postalCode.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2');
  }, [postalCode]);

  const formatedPhone = useMemo(() => {
    return phone
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1 $2')
      .replace(/(\d{5})(\d)/, '$1-$2');
  }, [phone]);

  async function handleSearchCep() {
    setLoad(true);
    if (postalCode.length < 7) {
      setLoad(false);
      ToastAndroid.show('Preencha corretamente o CEP', ToastAndroid.SHORT);
      return;
    }

    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${postalCode}/json/`
      );

      const { logradouro, bairro, localidade, uf } = response.data;

      setLoad(false);
      setVisible(true);

      setAdress(logradouro);
      setDistrict(bairro);
      setState(uf);
      setCity(localidade);

      // toast.success('Cep encontrado ');
    } catch (e) {
      ToastAndroid.show(
        'Ocorreu um erro ao buscar CEP, tente novamente',
        ToastAndroid.SHORT
      );
      // toast.error('Erro ao buscar cep');
    }
  }

  async function handleSubmit() {
    setLoadSubmit(true);

    const data = {
      gender,
      postal_code: postalCode,
      address,
      state,
      city,
      birthday: date,
      district,
      phone,
    };

    try {
      const response = await api.put('/users', data);
      if (response.data.status) {
        const res = await api.post(`coupons/${id}`);

        if (!res.data.status) {
          ToastAndroid.show(
            'Não foi possivel resgatar o cupom',
            ToastAndroid.SHORT
          );

          setLoadSubmit(false);
          return;
        }

        const { expirated_at: expiratedAt, coupon } = res.data;
        console.tron.log(response.data);
        navigation.navigate('ConfirmCupom', { expiratedAt, coupon });
        setLoadSubmit(false);
      }

      setLoadSubmit(false);
    } catch (e) {
      setLoadSubmit(false);
      ToastAndroid.show(
        'Falha ao enviar, tente novamente mais tarde',
        ToastAndroid.SHORT
      );
    }
  }

  return (
    <Container>
      <Header>
        <ImageRegister source={image} />
      </Header>
      <Content>
        <Title> Quase lá...</Title>

        <Label> Qual seu cep ? </Label>

        <ContentCep>
          <ContentRegisterInput>
            <RegisterInput
              icon="mail-outline"
              placeholder="CEP"
              autoCorrect={false}
              returnKeyType="next"
              keyboardType="numeric"
              // onSubmitEditing={() => passwordRef.current.focus()}
              onChangeText={setPostalCode}
              value={formatedCep}
              maxLength={9}
            />
          </ContentRegisterInput>

          <ButtonSearchCep onPress={handleSearchCep} loading={load}>
            <TextButtonSearchCep>
              <Icon name="search" size={20} color="rgba(255, 255, 255, 0.6)" />
            </TextButtonSearchCep>
          </ButtonSearchCep>
        </ContentCep>

        <Label> Precisamos do seu numero :D </Label>
        <RegisterInput
          icon="phone"
          placeholder="Telefone"
          autoCorrect={false}
          returnKeyType="next"
          keyboardType="numeric"
          onChangeText={setPhone}
          value={formatedPhone}
          maxLength={13}
        />

        <Label> Seu sexo seria ?</Label>
        <ContainerPicker
          selectedValue={gender}
          onValueChange={(itemValue, itemIndex) => {
            if (itemValue != 0) setGender(itemValue);
          }}
        >
          <Picker.Item value="0" label="Sexo" />
          <Picker.Item label="Masculino" value="masculine" />
          <Picker.Item label="Feminino" value="feminine" />
          <Picker.Item label="Não binario" value="non-binary" />
        </ContainerPicker>

        <Label> Data de nascimento </Label>
        <DateInput date={date} onChange={setDate} />

        <ButtonSubmit onPress={handleSubmit} loading={loadSubmit}>
          <TextButtonSubmit> Confirmar </TextButtonSubmit>
        </ButtonSubmit>
      </Content>

      <Modal
        style={{ margin: 0, flex: 1 }}
        onBackdropPress={() => setVisible(false)}
        isVisible={visible}
      >
        <ContentModal>
          <ImageConfirmAddress source={confirmAddress} />
          <TitleModal> Esse é seu endereço ?</TitleModal>
          <TextAddress>
            {city} - {state}
          </TextAddress>
          <TextAddress> {district}</TextAddress>
          <TextAddress> {address}</TextAddress>
        </ContentModal>
      </Modal>
    </Container>
  );
}
