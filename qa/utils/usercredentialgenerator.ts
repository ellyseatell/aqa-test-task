export interface TestUser {
  username: string;
  email: string;
  password: string;
}

export function generateUser(): TestUser {
  const timestamp = Date.now();

  return {
    username: `Automation_${timestamp}`,
    email: `auto_${timestamp}@live.com`,
    password: 'Welcome@!23'
  };
}