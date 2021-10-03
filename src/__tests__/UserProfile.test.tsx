import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { render, screen } from '@testing-library/react';
import UserProfile from '@/components/UserProfile';

describe('<UserProfile />', () => {
  const mock = new MockAdapter(axios, { delayResponse: 200 }); // 200ms 딜레이 설정
  const user1 = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

  mock.onGet('https://jsonplaceholder.typicode.com/users/1').reply(200, user1);

  it('calls getUser API loads userdata properly', async () => {
    render(<UserProfile id={1} />);
    await screen.findByText('로딩중...');
    await screen.findByText('Bret');
  });
});
