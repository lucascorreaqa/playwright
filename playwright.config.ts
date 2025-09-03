import { defineConfig, devices } from '@playwright/test';
import path from 'path';

const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 8,
  globalSetup: './tests/auth.setup.ts',
  use: {
    baseURL: 'https://www.saucedemo.com/',
    storageState: path.join(__dirname, 'playwright/.auth/user.json'),
    screenshot: 'on',
    video: 'on',
    trace: 'on',
  },
  reporter: [
    ['html', { outputFolder: `playwright-report/report-${timestamp}`, open: 'never' }]
  ],
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
