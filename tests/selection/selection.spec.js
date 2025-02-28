import { test, expect } from '@playwright/test';


test('drag from top right (-100) to bottom left (-100)', async ({ page }) => {
    // Get viewport dimensions
    await page.goto('http://127.0.0.1:5500/');

    const { width, height } = page.viewportSize();
    
    // Locate the draggable element and calculate its center
    const startX =  width - 100;
    const startY =  100;
    
    // Define the target: bottom left offset by 100 pixels
    const targetX = 100;
    const targetY = height - 100;
    
    // Perform drag and drop
    await page.mouse.move(startX, startY);
    await page.mouse.down();
    await page.mouse.move(targetX, targetY, { steps: 10 });
    await page.mouse.up();

    const editButton = page.getByRole('button', { name: '✏️' });
    await editButton.hover();
    

    // await editButton.hover({ force: true });

    // Assuming your tooltip appears with a class like `.action-btn-tooltip`
    const tooltip = page.locator('.action-btn-tooltip');
    await expect(tooltip).toHaveText('Edit skills');

  });