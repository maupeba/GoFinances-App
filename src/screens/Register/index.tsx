import React, { useState } from 'react';
import { Button } from '../../components/Forms/Button';

import { Input } from '../../components/Forms/Input';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';

import {
   Container,
   Header,
   Title,
   Form,
   Fields,
   Transactiontypes
} from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactiontypeSelecte(type: 'up' | 'down') {
    setTransactionType(type);
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
    <Form>
      <Fields>
        <Input placeholder='Nome'/>
        <Input placeholder='Preço'/>

        <Transactiontypes>
          <TransactionTypeButton 
            type='up'
            title='Income'
            onPress={() => handleTransactiontypeSelecte('up')}
            isActive={transactionType === 'up'}
          />
          <TransactionTypeButton 
            type='down'
            title='Outcome'
            onPress={() => handleTransactiontypeSelecte('down')}
            isActive={transactionType === 'down'}
          />
        </Transactiontypes>
      </Fields>

      <Button title='Enviar' />
    </Form>

    </Container>
  )
}
