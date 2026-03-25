
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';



// Load env based on NODE_ENV or fallback to development
const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env.development';
dotenv.config({ path: envFile });


const testDir = defineBddConfig ({
paths: [

  'qa/tests/features/**/*.feature'
],

steps: [
  'qa/fixtures/testContext.ts',      // fixture
  'qa/tests/step-definitions/**/*.ts' ,    // all step files
  'qa/fixtures/globaldata.ts'
],
//require : ['qa/tests/step-definitions/steps.ts']
require: ['qa/tests/step-definitions/**/*.ts'], // ✅ load ALL step files

});


export default defineConfig({
  // Folder where your test files are located
  testDir,
  grepInvert: /@skip/, //run everything except the features tagged with @skip

  // Timeout per test
  timeout: 30000, // 30 seconds

  // Retries in CI
  retries: process.env.CI ? 2 : 0,

  // Run tests in parallel
  //workers: process.env.CI ? 1 : undefined,
workers: 1,

  // Reporter setup: console, HTML, JUnit (for CI), JSON (optional)
  reporter: [
    ['list'], // console-friendly output
    ['html', { open: 'never', outputFolder: 'reports/html' }], // interactive HTML
    ['junit', { outputFile: 'reports/results.xml' }], // CI pipelines
    ['json', { outputFile: 'reports/results.json' }] // optional for custom reporting
  ],

  // Shared settings for all tests
  use: {
    headless: false,                // run in headless mode
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure', // capture screenshot on failure
    video: 'retain-on-failure',    // capture video only on failure
    trace: 'on-first-retry',       // capture trace for debugging failed tests
    baseURL: process.env.BASE_URL || 'http://localhost:8080', // environment-dependent fallback
    
  },

  projects: [
    // Desktop Chrome using Playwright device emulation
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },

    // Microsoft Edge
    // {
    //   name: 'Desktop Edge',
    //   use: {
    //     browserName: 'chromium',  // Chromium engine
    //     channel: 'msedge',        // specifically Edge
    //     headless: false,          // optional: show browser
    //   },
    // },
  ],

  // Output folder for test artifacts (screenshots, videos, traces)
  outputDir: 'test-results/',
});