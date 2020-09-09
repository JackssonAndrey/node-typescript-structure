import User from '@models/User';

test('it should be ok', () => {
  const user = new User();

  user.name = 'Andrey';

  expect(user.name).toEqual('Andrey');
});
