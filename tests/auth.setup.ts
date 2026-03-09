  import { test as setup } from '@playwright/test';
  import { ListingPage } from './pages/listing.page';
  import { LoginPage } from './pages/login.page';

  setup('authenticate', async ({ page }) => {
    const listingPage = new ListingPage(page)
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(process.env.REDDIT_USERNAME!, process.env.REDDIT_PASSWORD!);
    await listingPage.assertPageLoaded()
    await page.context().storageState({ path: '.auth/user.json' });
  });