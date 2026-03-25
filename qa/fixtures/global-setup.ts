import { writeFileSync } from 'fs';
import { join } from 'path';

export default async function globalSetup() {
  const timestamp = Date.now();

  const globalData = {
    createdteam: { teamname: `team-${timestamp}` },
    createdUser: {
      email: `test${timestamp}@mail.com`,
      username: `user${timestamp}`,
      password: 'Welcome@123',
    },
  };

  const filePath = join(__dirname, 'globalData.json'); // same path as globalData.ts reads
  writeFileSync(filePath, JSON.stringify(globalData, null, 2));

  console.log('✅ Global team/user generated before tests:', globalData);
}