import { test, expect } from '@playwright/test';

test('submit contact form successfully', async ({ page }) => {
  await page.goto( 'https://automationintesting.online/');
  await page.waitForTimeout( 3000 );

  await page.getByLabel( 'Name' ).fill( 'Super Tester' );
  await page.getByLabel( 'Email' ).fill( 'super@fakeemail.com' );
  await page.getByLabel( 'Phone' ).fill( '18655555555' );
  await page.getByTestId( 'ContactSubject' ).fill( 'I want to stay here!' );
  await page.locator( '.description' ).fill( 'I want to come visit, when are\
    you open and can I bring my pet iguana? ');
  await page.getByRole( 'button', { name: 'Submit' } ).click();
});

test('submit contact form unsuccessfully', async ({ page }) => {
  await page.goto( 'https://automationintesting.online/');
  await page.waitForTimeout( 3000 );

  await page.getByLabel( 'Name' ).fill( 'Super Tester' );
  await page.getByLabel( 'Email' ).fill( 'super@fakeemail.com' );
  await page.getByLabel( 'Phone' ).fill( '8655555555' );
  await page.getByTestId( 'ContactSubject' ).fill( 'I want to stay here!' );
  await page.locator( '.description' ).fill( 'I want to visit' );
  await page.getByRole( 'button', { name: 'Submit' } ).click();
});
