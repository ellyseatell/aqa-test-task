1-Project Structure & Framework:
A new folder qa/ has been added, containing all test-related files.
Framework: Playwright + TypeScript + BDD.
Page Object Model (POM): All page objects and reusable functions are located in the pages/ folder.
Step Definitions and Feature Files follow BDD standards.
Some tests are temporarily tagged with @skip due to API call limits – these can be removed when limits are lifted.
Features that are commented out are work-in-progress (WIP).

2-Environment & Configuration:
Using dotenv to load the Vikunja URL from environment files, supporting multiple profiles and environments.
Modified docker-compose for MariaDB:
Added port binding for local access.
Allows querying the database with tools like DBVisualizer.
Database cleanup utilities exist in the utils folder (TS file), but connection issues are being investigated.

3-Global Test Setup:
A global team name is generated before tests run and stored in globalData.json for use across all CRUD operations.
Similarly, a global user is generated for account creation and login tests.
Microsoft Edge browser is commented out in playwright.config.ts due to API request limitations.
Tests are executed using 1 worker for stability.

4-Running the Tests:
First Install dependencies using the following command: npm install
Generate global data before running tests using the following command: npx bddgen
Set environment (example for development/localhost) and run the tests.
$env:NODE_ENV="development"
npx playwright test --reporter=html


5-Reports: HTML test reports are generated automatically.

6-Test Coverage:
User Registration test cases
User login test cases
CRUD on team ( create - get =edit descripton and delete)
