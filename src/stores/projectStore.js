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
            },
            {
                title: 'Project 4',
                image: Indonesia,
                slug: 'project-4',
                description: 'Detailed description for Project 4.'
            },
            {
                title: 'Project 5',
                image: Indonesia,
                slug: 'project-5',
                description: 'Detailed description for Project 5.'
            },
            {
                title: 'Project 6',
                image: Indonesia,
                slug: 'project-6',
                description: 'Detailed description for Project 6.'
            },
            {
                title: 'Project 7',
                image: Indonesia,
                slug: 'project-7',
                description: 'Detailed description for Project 7.'
            },
            {
                title: 'Project 8',
                image: Indonesia,
                slug: 'project-8',
                description: 'Detailed description for Project 8.'
            },
            {
                title: 'Project 9',
                image: Indonesia,
                slug: 'project-9',
                description: 'Detailed description for Project 9.'
            },
            {
                title: 'Project 10',
                image: Indonesia,
                slug: 'project-10',
                description: 'Detailed description for Project 10.'
            }
        ]
    })
})
