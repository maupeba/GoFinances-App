import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import { 
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard(){
  const data: DataListProps[] = [{
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount: '12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign'
    },
    date: '13/04/2020'
  },{
    id: '2',
    type: 'negative',
    title: 'Hamburgueria Pizzy',
    amount: '59,00',
    category: {
      name: 'Alimentação',
      icon: 'coffee'
    },
    date: '13/04/2020'
  },{
    id: '3',
    type: 'negative',
    title: 'Aluguel',
    amount: '2.000,00',
    category: {
      name: 'Casa',
      icon: 'shopping-bag'
    },
    date: '13/04/2020'
  }]

  return(
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/33472260?v=4' }}/>
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Maurício</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard 
          type='up'
          title='Entradas'
          amount='17.400,00' 
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightCard
          type='down'
          title='Saídas' 
          amount='1.259,00' 
          lastTransaction='Última saída dia 03 de abril'
        />
        <HighlightCard 
          type='total'
          title='Total'
          amount='16.141,00'
          lastTransaction='01 à 06 de abril'
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionList 
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => <TransactionCard data={item} />}
        />

      </Transactions>
    </Container>
  )
}