import { test, expect } from '@playwright/test';

test('Assert error message for empty username in Sign up form', async ({ page }) => {
 await page.goto('https://conduit.mate.academy/user/register');

 await page.getByPlaceholder('Email').fill('test@gmail.com');
 await page.getByPlaceholder('Password').fill('newpass123!');
 await page.getByRole('button', { name: 'Sign up' }).click();

 await expect(
   page.getByRole('list').nth(1)
 ).toContainText(`username:Username must start with a letter, have no spaces, and be 2 - 40 characters.`);
});

test('Assert error message for empty email in Sign up form', async ({ page }) => {
 await page.goto('https://conduit.mate.academy/user/register');

 await page.getByPlaceholder('Username').fill('newuser');
 await page.getByPlaceholder('Password').fill('newpass123!');
 await page.getByRole('button', { name: 'Sign up' }).click();

 await expect(page.getByRole('list').nth(1)).toContainText(`email:This email does not seem valid.`);
});

test('Assert error message for empty password in Sign up form', async ({ page }) => {
 await page.goto('https://conduit.mate.academy/user/register');

 await page.getByPlaceholder('Username').fill('newuser');
 await page.getByPlaceholder('Email').fill('test@gmail.com');
 await page.getByRole('button', { name: 'Sign up' }).click();

 await expect(page.getByRole('list').nth(1)).toContainText(`password:can't be blank`);
});