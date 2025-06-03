import { defineStore } from 'pinia'

export const useAboutStore = defineStore('about', {
    state: () => ({
        stats: [
            { label: 'Projects Completed', value: 7 },
            { label: 'Years of Experience', value: 2 },
            { label: 'Technologies Used', value: 18 },
            { label: 'Lines of Code Written', value: '14041' }
        ],
    }),
})