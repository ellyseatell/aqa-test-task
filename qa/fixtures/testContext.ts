// qa/tests/fixtures/testContext.ts
import { test as base } from 'playwright-bdd';

type TestContext = {
  email: string;
  username: string;
  password: string;
  teamname: string
};

export const test = base.extend<TestContext>({
  email: async ({}, use) => {
    const timestamp = Date.now();
    await use(`test${timestamp}@mail.com`);
  },

  username: async ({}, use) => {
    const timestamp = Date.now();
    await use(`user${timestamp}`);
  },

  password: async ({}, use) => {
    await use('Welcome@123');
  },
 
//   teamname: async ({}, use) => {
//     const timestamp = Date.now();
//     await use(`team${timestamp}`);
//   },
  
});
