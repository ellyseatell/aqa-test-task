import { truncateUsersAndTeams } from '../utils/db-utils';

(async () => {
  try {
    console.log('🚀 Starting DB truncate test...');
    await truncateUsersAndTeams(); // will use .env for credentials
    console.log('🎉 DB truncate test completed successfully!');
  } catch (err) {
    console.error('❌ Error during DB truncate test:', err);
  }
})();