import { defineStore } from 'pinia'
import Indonesia from '@/assets/indonesia.svg'

export const useProjectStore = defineStore('projectStore', {
    state: () => ({
        projects: [
            {
                title: 'Project 1',
                image: Indonesia,
                slug: 'project-1',
                description: 'Detailed description for Project 1.'
            },
            {
                title: 'Project 2',
                image: Indonesia,
                slug: 'project-2',
                description: 'Detailed description for Project 2.'
            },
            {
                title: 'Project 3',
                image: Indonesia,
                slug: 'project-3',
                description: 'Detailed description for Project 3.'
            }
            // Add more projects as needed
        ]
    })
})
