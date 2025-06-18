import { defineStore } from 'pinia'

// Import all images from src/assets/projects
const imageModules = import.meta.glob('@/assets/projects/*/*.{png,jpg}', {
    eager: true,
    import: 'default'
})

const imageDescriptions = {
    '1/1': 'Landing page preview',
    '1/2': 'Mobile version',
    '1/3': 'Desktop version',
    '1/4': 'Tablet version',
    '1/5': 'Dark mode',
    '1/6': 'Light mode',
    '1/7': 'Accessibility features',
    '2/1': 'Admin dashboard',
    '2/2': 'Analytics chart',
    '3/1': 'Product page',
    '3/2': 'Checkout screen',
}

const groupedImages = {}

for (const path in imageModules) {
    // path example: '/src/assets/projects/1/1.png'
    const match = path.match(/projects\/(\d+)\/(\d+)\.(png|jpg)$/)
    if (match) {
        const projectNum = match[1]
        const imageNum = match[2]
        const key = `${projectNum}/${imageNum}`
        if (!groupedImages[projectNum]) groupedImages[projectNum] = []
        groupedImages[projectNum].push({
            src: imageModules[path],
            description: imageDescriptions[key] || `Image ${imageNum}`
        })
    }
}

export const useProjectStore = defineStore('projectStore', {
    state: () => ({
        projects: Object.keys(groupedImages).map((projectId) => ({
            title: `Project ${projectId}`,
            slug: `project-${projectId}`,
            description: `Detailed description for Project ${projectId}.`,
            images: groupedImages[projectId]
        }))
    })
})