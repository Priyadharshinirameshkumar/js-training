import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Allows tests to run in parallel to reduce execution time.
  fullyParallel: true,

  // Retry failed tests only in CI environments.
  retries: process.env.CI ? 2 : 0,

  // Use one worker in CI for stability.
  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  timeout: 30000,

use: {
  baseURL: 'http://localhost:5173',
  trace: 'on-first-retry',
  screenshot: 'only-on-failure',
},
// Desktop Chrome provides a predefined browser configuration,
// including viewport size, user agent, and device pixel ratio.
//
// Other available device presets include:
// - iPhone 14
// - Pixel 7
projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },

  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
  },

  {
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
  },
],
  // Starts the Vite dev server automatically before running tests.
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});