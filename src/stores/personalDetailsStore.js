import { ref } from 'vue'
import Instagram from '../assets/social-media/instagram.svg'
import LinkedIn from '../assets/social-media/linkedin.svg'
import GitHub from '../assets/social-media/github.svg'
import Email from '../assets/social-media/mail.svg'

export const usePersonalDetails = () => {
    const socialMedia = ref([
        {
            link: 'https://github.com/000Twilight',
            image_file: GitHub,
            alt_text: 'GitHub'
        },
        {
            link: 'https://linkedin.com/in/mario-richie-lim',
            image_file: LinkedIn,
            alt_text: 'LinkedIn'
        },
        {
            link: 'https://instagram.com/mario_r_lim',
            image_file: Instagram,
            alt_text: 'Instagram'
        }
    ])

    return { socialMedia }
}
