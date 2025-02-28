import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5500/');

  // await page.getByRole('button', { name: '⚙️ Options' }).click();
  // await page.getByRole('button', { name: 'Upload Background' }).click();
  // await page.getByRole('button', { name: 'Upload Background' }).setInputFiles('1604214-compte-article_m-1.jpg');
  // await expect(page.locator('#app')).toMatchAriaSnapshot(`
  //   - img "Earth Bolt"
  //   - text: 1/5
  //   - img "Stone Skin"
  //   - text: 3/5
  //   - img "Earthquake"
  //   - text: 1/5
  //   - img "Nature's Blessing"
  //   - text: 1/5await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3D127.0.0%253A5500%26oq%3D127.0.0%253A5500%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDcyNTNqMGoyqAIAsAIB%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DS_65Z77SIN_ekPIP4Zy3sQY&q=EhAmA4CAcwDpR_meGta6WQEoGMv8570GIjCR7yNl7vjZvA8zhUg4eaRjYVqjlAED4JnfiNlzEMlBNlIH_ROyiQSFUTdHakQtFUwyAXJaAUM');
  //   - img "Terraform"
  //   - text: 0/5
  //   - img "Summon Earth Elemental"
  //   - text: 0/5
  //   - img "Molten Fury"
  //   - text: 0/5
  //   - img "Earthen Barrier"
  //   - text: 0/5
  //   - img "Skill 9"
  //   - text: 0/5
  //   - img /Skill \\d+/
  //   - text: 0/5
  //   - img /Skill \\d+/
  //   - text: 0/5
  //   - button "✏️"
  //   - button "❌"
  //   - button "🔗"
  //   `);
  // await expect(page.locator('#app')).toMatchAriaSnapshot(`
  //   - text: Background Image
  //   - button "Upload Background"
  //   `);
});