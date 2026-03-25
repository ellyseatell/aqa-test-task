import { APIRequestContext } from '@playwright/test';
import { v4 as uuidv4 } from 'uuid';


export type UserCredentials = {
  username: string;
  email: string;
  password: string;
};

/**
 * Registers a new user dynamically using the API and returns credentials.
 * @param request Playwright APIRequestContext
 * @param baseUrl Base URL of the environment (e.g., http://localhost:8080)
 */
export async function registerUser(
  request: APIRequestContext,
  baseUrl: string
): Promise<UserCredentials> {
  const uniqueId = uuidv4().split('-')[0]; // generate short unique string
  const username = `user_${uniqueId}`;
  const email = `user_${uniqueId}@example.com`;
  const password = `Welcome@123`;

  const response = await request.post(`${baseUrl}/api/v1/register`, {
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Accept-Language': 'en-GB,en;q=0.9,ar-LB;q=0.8,ar;q=0.7,en-US;q=0.6',
      'Connection': 'keep-alive',
      'Content-Type': 'application/json',
      'Origin': baseUrl,
      'Referer': `${baseUrl}/register`,
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36',
      'sec-ch-ua': `"Chromium";v="146", "Not-A.Brand";v="24", "Google Chrome";v="146"`,
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
    },
    data: {
      username,
      email,
      password,
      language: 'en'
    }
  });

  if (!response.ok()) {
    const errorText = await response.text();
    throw new Error(`Failed to register user: ${errorText}`);
  }

  return { username, email, password };
}