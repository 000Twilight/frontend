import { defineStore } from 'pinia'

// Import all images from src/assets/projects
const imageModules = import.meta.glob('@/assets/projects/*/*.{png,jpg}', {
    eager: true,
    import: 'default'
})

const projectTitles = {
    '1': 'SMPK Mater Dei: E-Learning Platform',
    '2': 'KicksAtrium: Online Sneaker Marketplace',
    '3': 'UnionX: PPOB Financial Services Application',
    '4': "MeowTask: Interactive Family Planner & Kids' Reward System",
    '5': 'Dansons: UI/UX Prototype AI Dance Analysis',
    '6': 'NusaVision: Freelance Services Marketplace'
}

const projectDescriptions = {
    '1': `This e-learning platform for SMPK Mater Dei Pamulang modernizes education by providing dedicated portals for students, teachers, and administrators. It streamlines access to course materials, manages attendance, and simplifies administrative tasks, showcasing full-stack development skills and a focus on user-centric solutions.`,
    '2': `KicksAtrium is a modern e-commerce platform specializing in authentic sneakers and streetwear. Built with responsive design principles, it features product catalogs, secure checkout, user authentication, and an intuitive shopping experience that caters to sneaker enthusiasts and fashion-forward consumers.`,
    '3': `UnionX is a comprehensive mobile financial services application offering PPOB (Payment Point Online Bank) services. The app enables users to pay bills, purchase digital products, manage transactions, and access various financial services through an intuitive and secure mobile interface designed for Indonesian users.`,
    '4': `MeowTask is an innovative family planning application that gamifies household chores and tasks through a cat-themed reward system. Designed to encourage children's participation in family activities, it features task assignment, progress tracking, and virtual rewards that make household management fun and engaging for the whole family.`,
    '5': `Dansons is a cutting-edge UI/UX prototype for an AI-powered dance analysis application. This project showcases advanced interaction design, user flow optimization, and innovative features for dance performance evaluation. The prototype demonstrates modern design principles and user-centered design thinking for motion analysis technology.`,
    '6': `NusaVision is a comprehensive freelance marketplace connecting Indonesian creative professionals with clients worldwide. The platform features project management, secure payments, portfolio showcases, and communication tools, built with modern web technologies to support the growing freelance economy in Indonesia.`
}

const projectLinks = {
    '1': {
        github: 'https://github.com/000Twilight/elearning-materdei',
        website: null,
    },
    '2': {
        github: null,
        website: 'https://kicksatrium.netlify.app/',
    },
    '3': {
        github: null,
        website: null,
    },
    '4': {
        github: 'https://github.com/rosabelblank/MeowTask',
        website: null,
    },
    '5': {
        github: null,
        website: 'https://www.figma.com/proto/vQc0R7HY9B3CNTWXGykFFF/HCI?page-id=239%3A453&node-id=619-4156&p=f&viewport=476%2C175%2C0.02&t=QYTwLcZpPr2ObgI2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=439%3A1399',
    },
    '6': {
        github: 'https://github.com/Fluk00/WEB_NusaVision',
        website: 'https://nusavisioncreative.com/',
    }
}

const imageSubTitles = {
    '1/1': 'Login Page',
    '1/2': 'Student Dashboard',
    '1/3': 'Attendance Management',
    '1/4': 'Class Schedule',
    '1/5': 'Monthly Calendar',
    '1/6': 'Subject Details',
    '1/7': 'Student Profile',

    '2/1': 'Homepage',
    '2/2': 'Product Catalog',
    '2/3': 'Product Details',
    '2/4': 'Shopping Cart',
    '2/5': 'User Authentication',
    '2/6': 'Mobile Responsive Design',
    '2/7': 'Payment Confirmation',

    '3/1': 'Onboarding Screens',
    '3/2': 'Main Dashboard',
    '3/3': 'Bill Payment Interface',
    '3/4': 'Transaction History',
    '3/5': 'Digital Wallet Management',
    '3/6': 'User Profile Settings',
    '3/7': 'Payment Confirmation Screens',
    '3/8': 'Customer Support Integration',

    '4/1': 'Welcome Screen',
    '4/2': 'Family Dashboard',
    '4/3': 'Task Creation Interface',
    '4/4': "Children's Profile",
    '4/5': 'Task Completion Feedback',
    '4/6': 'Family Calendar View',
    '4/7': 'Reward Store',
    '4/8': "Parent Control Panel",

    '5/1': 'Onboarding Flow',
    '5/2': 'Video Upload Interface',
    '5/3': 'Motion Tracking Visualization',
    '5/4': 'Performance Analysis',
    '5/5': 'Progress Tracking Dashboard',
    '5/6': 'Social Sharing Features',
    '5/7': 'Settings and Calibration',

    '6/1': 'Freelancer Marketplace Homepage',
    '6/2': 'Freelancer Profiles',
    '6/3': 'Project Posting Interface',
    '6/4': 'Proposal Submission System',
    '6/5': 'In-app Messaging Tools',
    '6/6': 'Payment Escrow System',
    '6/7': 'Project Management Dashboard'
}

const imageDescriptions = {
    // SMPK Mater Dei E-Learning Platform
    '1/1': 'Login page for students, teachers, and administrators, featuring the school\'s facade.',
    '1/2': 'Student dashboard displaying an overview of available subjects, allowing easy navigation to course materials.',
    '1/3': 'Student attendance page, indicating current attendance status and allowed submission times.',
    '1/4': 'Student\'s weekly class schedule, providing a clear overview of daily lessons and breaks.',
    '1/5': 'Monthly calendar view for students, highlighting scheduled classes and events.',
    '1/6': 'Detailed subject page for students, listing specific topics and learning modules within a course.',
    '1/7': 'Student profile page displaying personal and academic information.',

    // KicksAtrium E-commerce
    '2/1': 'Homepage featuring hero section with trending sneakers and brand highlights.',
    '2/2': 'Product catalog page with filtering options and grid layout for easy browsing.',
    '2/3': 'Detailed product page showing sneaker specifications, images, and purchase options.',
    '2/4': 'Shopping cart interface with item management and checkout process.',
    '2/5': 'User authentication and registration forms with modern design.',
    '2/6': 'Mobile-responsive design showcasing optimal viewing on various devices.',
    '2/7': 'Payment and order confirmation screens with secure checkout flow.',

    // UnionX PPOB Financial Services
    '3/1': 'Mobile app onboarding screens introducing key features and services.',
    '3/2': 'Main dashboard showing available PPOB services and quick actions.',
    '3/3': 'Bill payment interface with service provider selection and amount entry.',
    '3/4': 'Transaction history with detailed records and filtering options.',
    '3/5': 'Digital wallet management and top-up functionality.',
    '3/6': 'User profile and account settings with security features.',
    '3/7': 'Payment confirmation and receipt generation screens.',
    '3/8': 'Customer support and help center integration.',

    // MeowTask Family Planner
    '4/1': 'Welcome screen with playful cat-themed design and app introduction.',
    '4/2': 'Family dashboard showing assigned tasks and reward progress.',
    '4/3': 'Task creation interface with difficulty levels and reward points.',
    '4/4': 'Children\'s profile with achievement badges and collected rewards.',
    '4/5': 'Interactive task completion with animated feedback and celebrations.',
    '4/6': 'Family calendar view integrating tasks and family events.',
    '4/7': 'Reward store where children can redeem points for prizes.',
    '4/8': 'Parent control panel for managing family members and tasks.',

    // Dansons AI Dance Analysis
    '5/1': 'Onboarding flow explaining AI dance analysis features.',
    '5/2': 'Main interface for uploading dance videos and selecting analysis types.',
    '5/3': 'Real-time motion tracking and pose detection visualization.',
    '5/4': 'Detailed performance analysis with scoring and improvement suggestions.',
    '5/5': 'Progress tracking dashboard showing improvement over time.',
    '5/6': 'Social features for sharing performances and competing with friends.',
    '5/7': 'Settings and calibration options for optimal motion detection.',

    // NusaVision Freelance Marketplace
    '6/1': 'Homepage showcasing featured freelancers and popular service categories.',
    '6/2': 'Freelancer profile pages with portfolio, skills, and client reviews.',
    '6/3': 'Project posting interface for clients to describe their requirements.',
    '6/4': 'Proposal submission system with milestone-based pricing.',
    '6/5': 'In-app messaging and collaboration tools for project communication.',
    '6/6': 'Payment escrow system ensuring secure transactions for both parties.',
    '6/7': 'Dashboard for managing ongoing projects and tracking deliverables.'
}

const imageFeatures = {
    // SMPK Mater Dei E-Learning Platform
    '1/1': ['Authentication', 'Login', 'Security'],
    '1/2': ['Dashboard', 'User Interface', 'Navigation'],
    '1/3': ['Tracking', 'Attendance', 'Management'],
    '1/4': ['Scheduling', 'Calendar', 'Time Management'],
    '1/5': ['Calendar', 'Events', 'Monthly View'],
    '1/6': ['Education', 'Course Content', 'Learning'],
    '1/7': ['Profile', 'User Management', 'Personal Info'],

    // KicksAtrium E-commerce
    '2/1': ['Homepage', 'Hero Section', 'Branding'],
    '2/2': ['Product Catalog', 'Filtering', 'E-commerce'],
    '2/3': ['Product Details', 'Specifications', 'Shopping'],
    '2/4': ['Shopping Cart', 'Checkout', 'Payment'],
    '2/5': ['Authentication', 'Registration', 'User Account'],
    '2/6': ['Responsive Design', 'Mobile', 'Cross-Platform'],
    '2/7': ['Payment', 'Confirmation', 'Order Processing'],

    // UnionX PPOB Financial Services
    '3/1': ['Onboarding', 'Mobile App', 'Introduction'],
    '3/2': ['Dashboard', 'Financial Services', 'PPOB'],
    '3/3': ['Bill Payment', 'Finance', 'Transaction'],
    '3/4': ['Transaction History', 'Records', 'Tracking'],
    '3/5': ['Digital Wallet', 'Money Management', 'Top-up'],
    '3/6': ['Profile', 'Settings', 'Security'],
    '3/7': ['Payment Confirmation', 'Receipt', 'Transaction'],
    '3/8': ['Customer Support', 'Help Center', 'Assistance'],

    // MeowTask Family Planner
    '4/1': ['Welcome', 'Onboarding', 'Cat Theme'],
    '4/2': ['Family Dashboard', 'Task Management', 'Progress'],
    '4/3': ['Task Creation', 'Gamification', 'Rewards'],
    '4/4': ['Profile', 'Children', 'Achievements'],
    '4/5': ['Task Completion', 'Feedback', 'Animation'],
    '4/6': ['Calendar', 'Family Events', 'Schedule'],
    '4/7': ['Reward Store', 'Points', 'Prizes'],
    '4/8': ['Parent Control', 'Management', 'Administration'],

    // Dansons AI Dance Analysis
    '5/1': ['Onboarding', 'AI Features', 'Introduction'],
    '5/2': ['Video Upload', 'Interface', 'Analysis'],
    '5/3': ['Motion Tracking', 'Visualization', 'AI'],
    '5/4': ['Performance Analysis', 'Scoring', 'Feedback'],
    '5/5': ['Progress Tracking', 'Dashboard', 'Improvement'],
    '5/6': ['Social Features', 'Sharing', 'Competition'],
    '5/7': ['Settings', 'Calibration', 'Configuration'],

    // NusaVision Freelance Marketplace
    '6/1': ['Marketplace', 'Homepage', 'Freelancers'],
    '6/2': ['Profile', 'Portfolio', 'Skills'],
    '6/3': ['Project Posting', 'Requirements', 'Clients'],
    '6/4': ['Proposal System', 'Pricing', 'Milestones'],
    '6/5': ['Messaging', 'Communication', 'Collaboration'],
    '6/6': ['Payment System', 'Escrow', 'Security'],
    '6/7': ['Project Management', 'Dashboard', 'Deliverables']
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
            subtitle: imageSubTitles[key] || `Image ${imageNum}`,
            description: imageDescriptions[key] || `Image ${imageNum}`,
            features: imageFeatures[key] || ['Feature', 'Interface']
        })
    }
}

export const useProjectStore = defineStore('projectStore', {
    state: () => ({
        projects: Object.keys(groupedImages).map((projectId) => ({
            title: projectTitles[projectId] || `Project ${projectId}`,
            slug: `project-${projectId}`,
            subtitle: imageSubTitles[`${projectId}`] || `Subtitle for Project ${projectId}`,
            description: projectDescriptions[projectId] || `Detailed description for Project ${projectId}.`,
            images: groupedImages[projectId],
            links: projectLinks[projectId] || {}
        }))
    })
})