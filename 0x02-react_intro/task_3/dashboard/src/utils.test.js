import { render, screen } from '@testing-library/react';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear() returns the correct year.', () => {
  expect(getFullYear()).toEqual(new Date().getFullYear());
});

test('getFooterCopy() returns the correct string when the argument is true', () => { 
  expect(getFooterCopy(true)).toEqual('Holberton School');
});

test('getFooterCopy() returns the correct string when the argument is false', () => { 
  expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
});

test('getLatestNotification() returned string is correct.', () => {
  expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
});
