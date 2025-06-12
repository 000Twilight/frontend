import { defineStore } from 'pinia'

// Auto-import all project images (png or jpg)
const imageModules = import.meta.glob('/projects/*/*.{png,jpg}', {
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
    const match = path.match(/projects\/(\d+)\/(\d+)\.(png|jpg)$/)
    if (match) {
        const [_, projectNum, imageNum] = match
        const key = `${projectNum}/${imageNum}`

        if (!groupedImages[projectNum]) {
            groupedImages[projectNum] = []
        }

        groupedImages[projectNum].push({
            src: imageModules[path],
            description: imageDescriptions[key] || `Image ${imageNum}`
        })
    }
}

Object.values(groupedImages).forEach(images =>
    images.sort((a, b) => a.src.localeCompare(b.src))
)

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