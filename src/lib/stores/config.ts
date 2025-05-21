import { writable } from 'svelte/store';

export const config = writable({
  colors: ['', '', '', '', '', ''],
  duration: 3,
  random: false,
  started: false
});
