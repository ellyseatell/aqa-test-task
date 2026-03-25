import { test } from '@playwright/test';
import { queryDb } from '../utils/dbconnection';

test('get all users', async () => {
  const users = await queryDb('SELECT * FROM users');
  console.log(users);
});