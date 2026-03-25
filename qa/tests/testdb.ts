import { queryDb } from '../utils/dbconnection';

(async () => {
  try {
    const result = await queryDb('SELECT 1 AS test');
    console.log('DB test successful:', result);
  } catch (err) {
    console.error('DB test failed:', err);
  }
})();