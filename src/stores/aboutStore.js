import { defineStore } from 'pinia'

export const useAboutStore = defineStore('about', {
    state: () => ({
        stats: [
            { label: 'Projects Completed', value: 28 },
            { label: 'Years of Experience', value: 3 },
            { label: 'Technologies Used', value: 18 },
            { label: 'Satisfied Clients', value: 12 },
        ],
    }),
})