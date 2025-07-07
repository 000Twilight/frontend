import { defineStore } from 'pinia';

export const useExperienceStore = defineStore('experience', {
    state: () => ({
        experiences: [
            {
                title: 'Internal Application Developer',
                company: 'PT Nusantara Compnet Integrator',
                dates: 'February 2025 – August 2025',
                type: 'Internship',
                description: 'Developed comprehensive full-stack web applications to streamline internal company processes and boost employee engagement.',
                details: [
                    'Boosted employee engagement: Designed and developed a real-time web-based team quiz game app with Socket.IO, supporting interactive quizzes for internal company events, receiving over 90% positive feedback from participants.',
                    'Automated equipment requests: Developed a comprehensive full-stack resource management system (Laravel, PHP, MySQL) with digital borrowing form request and admin-managed approval workflows, which improved efficiency by 50% by digitizing manual request processes for protective equipment across multiple divisions.',
                    'Optimized meeting room booking: Developing a web-based meeting room booking system, enabling users to digitally reserve and manage meeting spaces rather than manually with a receptionist, improving scheduling efficiency by approximately 40%.',
                ],
                technologies: ['Laravel', 'PHP', 'React', 'MySQL', 'Socket.IO', 'JavaScript', 'HTML/CSS']
            },
        ]
    })
})