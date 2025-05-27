import { defineStore } from 'pinia'

import htmlImage from '@/assets/skills/html.svg'
import cssImage from '@/assets/skills/css.svg'
import javascriptImage from '@/assets/skills/javascript.svg'
import vueImage from '@/assets/skills/vue.svg'
import githubImage from '@/assets/skills/github.svg'
import figmaImage from '@/assets/skills/figma.svg'
import phpImage from '@/assets/skills/php.svg'
import laravelImage from '@/assets/skills/laravel.svg'
import reactImage from '@/assets/skills/react.svg'
import tailwindImage from '@/assets/skills/tailwind.svg'
import typescriptImage from '@/assets/skills/typescript.svg'
import mysqlImage from '@/assets/skills/mysql.svg'
import androidImage from '@/assets/skills/android.svg'
import kotlinImage from '@/assets/skills/kotlin.svg'
import expoImage from '@/assets/skills/expo.svg'

export const useSkillsStore = defineStore('skills', {
    state: () => ({
        skills: [
            { name: 'HTML5', image: htmlImage },
            { name: 'CSS3', image: cssImage },
            { name: 'JavaScript', image: javascriptImage },
            { name: 'Vue.js', image: vueImage },
            { name: 'Git', image: githubImage },
            { name: 'Figma', image: figmaImage },
            { name: 'PHP', image: phpImage },
            { name: 'Laravel', image: laravelImage },
            { name: 'React', image: reactImage },
            { name: 'Tailwind CSS', image: tailwindImage },
            { name: 'TypeScript', image: typescriptImage },
            { name: 'MySQL', image: mysqlImage },
            { name: 'Android Studio', image: androidImage },
            { name: 'Kotlin', image: kotlinImage },
            { name: 'Expo', image: expoImage }
        ]
    }),
    getters: {
        getSkills(state) {
            return state.skills
        }
    }
})