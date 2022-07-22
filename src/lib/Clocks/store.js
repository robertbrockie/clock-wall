import { writable } from 'svelte/store';
import { browser } from "$app/env"

const LS_KEY = "clocks";

const defaultData = [
	{
		name: '🇨🇦 Montreal',
		tz: 'America/Montreal'
	},
	{
		
		name: '🇩🇪 Berlin',
		tz: 'Europe/Berlin'
	},
	{
		name: '🇭🇷 Zagreb, Croatia',
		tz: 'Europe/Zagreb'
	}
];

const stored = browser ? localStorage.getItem(LS_KEY) : [];

function createClockList() {
    const { set, subscribe } = writable((browser && stored) ? JSON.parse(stored) : defaultData);

	return {
		subscribe,
		updateClockList: (l) => {
            set(l.length > 0 ? l : false);
            if (browser) {
                localStorage.setItem(LS_KEY, JSON.stringify(l));
            }
        }
	};
}

export const clockList = createClockList();
