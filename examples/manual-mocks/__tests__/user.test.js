// Copyright 2004-present Facebook. All Rights Reserved.
jest.mock('../../models/user');
import user from '../models/user';

test('if orginal user model', () => {
  expect(user.getAuthenticated()).toEqual({age: 26, name: 'Real name'});
});
