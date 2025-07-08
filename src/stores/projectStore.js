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
    '2': `KicksAtrium is a modern e-commerce platform specializing in authentic sneakers and streetwear. Built with responsive design principles, it features product catalogs, checkouts, user authentication, and an intuitive shopping experience that caters to sneaker enthusiasts and fashion-forward consumers.`,
    '3': `UnionX is a comprehensive mobile financial services application offering PPOB (Payment Point Online Bank) services. The app enables users to pay bills, purchase digital products, manage transactions, and access various financial services through an intuitive and secure mobile interface designed for Indonesian users.`,
    '4': `MeowTask is an innovative family todo-list mobile app that gamifies household chores and tasks through a cat-themed reward system. Designed to encourage children's participation in family activities, it features task assignment, progress tracking, and virtual rewards that make household management fun and engaging for the whole family.`,
    '5': `Dansons is a cutting-edge mobile UI/UX prototype for an AI-powered dance analysis application, developed entirely in Figma. This project showcases advanced interaction design, user flow optimization, and innovative features for dance performance evaluation. The prototype demonstrates modern design principles and user-centered design thinking for motion analysis technology.`,
    '6': `NusaVision is a client-commissioned frontend project that meticulously simulates a comprehensive freelance marketplace, connecting creative professionals with clients. Built with dummy data for features like user accounts and billing, it fully demonstrates the intricate UI/UX and client-side logic of a real-world freelance platform, showcasing robust frontend development capabilities.`,
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

    '2/1': 'Parallax Landing Page',
    '2/2': 'Homepage Hero Section',
    '2/3': 'Homepage Product Catalog',
    '2/4': 'Homepage About Us',
    '2/5': 'Product Catalog Page',
    '2/6': 'Product Detail Page',
    '2/7': 'Shopping Cart',

    '3/1': 'Homepage Onboarding',
    '3/2': 'Top-up Data Plans',
    '3/3': 'Payment Confirmation',
    '3/4': 'Payment Successful',
    '3/5': 'Transaction History',
    '3/6': 'Electricity Payment Plans',
    '3/7': 'BPJS Plans',
    '3/8': 'BPJS Payment Confirmation',

    '4/1': 'Welcome Screen',
    '4/2': 'Pet Shower Animation',
    '4/3': 'Pet Eating Animation',
    '4/4': 'Pet Hat Shop',
    '4/5': "Pet Wearing A Hat",
    '4/6': 'Todo List Page',
    '4/7': 'New Todo Page',
    '4/8': 'Edit Todo Page',

    '5/1': 'Onboarding Flow',
    '5/2': 'Homepage Interface',
    '5/3': 'Dance Styles Page',
    '5/4': 'Dances Page',
    '5/5': 'Artist Detail Page',
    '5/6': 'Video Analysis Page',
    '5/7': 'Profile Page',

    '6/1': 'Freelancer Marketplace Homepage',
    '6/2': 'Chatbot on Homepage',
    '6/3': 'Freelance Programs',
    '6/4': 'Services Offered',
    '6/5': 'Service Freelance Details',
    '6/6': 'Membership Plans',
    '6/7': 'Sign In Page',
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
    '2/1': 'A visually appealing landing page with a parallax effect, showcasing the brand logo.',
    '2/2': 'The homepage featuring the main navigation, brand logo, and a prominent hero banner.',
    '2/3': 'A dedicated section on the homepage displaying a curated selection of popular or new sneaker products.',
    '2/4': 'The "About Us" section integrated into the homepage, providing information about the brand and its mission.',
    '2/5': 'The comprehensive product catalog page, allowing users to browse and filter a wide range of sneakers.',
    '2/6': 'A detailed view of an individual product page, presenting high-resolution images, specifications, and purchase options.',
    '2/7': 'The shopping cart interface, where users can review selected items, adjust quantities, and proceed to checkout.',

    // UnionX PPOB Financial Services
    '3/1': 'Onboarding flow for the UnionX app, introducing users to its features and benefits.',
    '3/2': 'Top-up data plans and service option plans for users, showcasing available packages and pricing.',
    '3/3': 'Payment confirmation screen, displaying transaction details and confirmation for payment.',
    '3/4': 'Payment successful screen, indicating a successful transaction with the amount paid.',
    '3/5': 'Transaction history of a past payment, showing details of previous transactions.',
    '3/6': 'Electricity payment plans and options, allowing users to select and pay for their electricity bills.',
    '3/7': 'BPJS plans and payment options, providing users with health insurance payment choices.',
    '3/8': 'BPJS payment confirmation screen, confirming the payment of health insurance.',

    // MeowTask Family Planner
    '4/1': 'Welcome screen with playful cat-themed design and app introduction.',
    '4/2': 'Pet shower animation on the family dashboard, showing a cat being bathed as a fun interaction.',
    '4/3': 'Pet eating animation on the family dashboard, depicting a cat enjoying its meal.',
    '4/4': 'Pet hat shop interface, allowing users to browse and purchase virtual hats for their pets.',
    '4/5': 'Pet wearing a hat animation, showcasing the pet with a selected hat from the shop.',
    '4/6': 'Todo list page for family tasks, featuring a clean layout for managing household chores.',
    '4/7': 'New todo page for adding tasks, with options for setting deadlines and assigning to family members.',
    '4/8': 'Edit todo page for modifying existing tasks, allowing updates to task details and status.',

    // Dansons AI Dance Analysis
    '5/1': 'Onboarding flow introducing Dansons app features, with a focus on dance analysis.',
    '5/2': 'Homepage interface for Dansons, featuring a video upload section for dance performances.',
    '5/3': 'Dance styles page showcasing various dance styles available for analysis.',
    '5/4': 'Dances page displaying a list of dances with options and filters.',
    '5/5': 'Artist detail page with information about dance artists and their performances.',
    '5/6': 'Video analysis page where users can view AI-generated feedback on their dance performance.',
    '5/7': 'Profile page for users to manage their account settings and preferences.',

    // NusaVision Freelance Marketplace
    '6/1': 'Freelancer marketplace homepage, featuring a chatbot and a search bar for easy navigation.',
    '6/2': 'Chatbot interface on the homepage, providing instant assistance to users.',
    '6/3': 'Freelance programs page, showcasing various freelance opportunities and projects.',
    '6/4': 'Services offered page, detailing the range of services available for freelancers and clients.',
    '6/5': 'Service freelance details page, providing in-depth information about specific freelance services.',
    '6/6': 'Membership plans page, outlining different subscription options for users.',
    '6/7': 'Sign-in page for users to access their accounts and manage their profiles.'
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
    '2/1': ['Parallax Effect', 'Brand Logo', 'Visual Design'],
    '2/2': ['Homepage', 'Hero Section', 'Navigation'],
    '2/3': ['Sneaker Showcase', 'E-commerce', 'Product Display'],
    '2/4': ['About Us', 'Brand Story', 'Company Info'],
    '2/5': ['Product Catalog', 'Shopping', 'Browse'],
    '2/6': ['Product Detail', 'Specifications', 'Purchase Options'],
    '2/7': ['Shopping Cart', 'Payment', 'Checkout'],

    // UnionX PPOB Financial Services
    '3/1': ['Onboarding', 'Introduction', 'User Experience'],
    '3/2': ['Data Plans', 'Service Options', 'User Choices'],
    '3/3': ['Payment Confirmation', 'Transaction', 'Security'],
    '3/4': ['Payment Success', 'Transaction Complete', 'User Feedback'],
    '3/5': ['Transaction History', 'Past Payments', 'Records'],
    '3/6': ['Electricity Payment', 'Plans', 'Options'],
    '3/7': ['BPJS Plans', 'Health Insurance', 'Payment Options'],
    '3/8': ['BPJS Confirmation', 'Health Payment', 'User Notification'],

    // MeowTask Family Planner
    '4/1': ['Welcome', 'Onboarding', 'Cat Theme'],
    '4/2': ['Pet Shower', 'Animation', 'Family Interaction'],
    '4/3': ['Pet Eating', 'Animation', 'Family Interaction'],
    '4/4': ['Pet Hat Shop', 'Virtual Goods', 'Shopping'],
    '4/5': ['Pet Wearing Hat', 'Animation', 'Fun'],
    '4/6': ['Todo List', 'Task Management', 'Family Chores'],
    '4/7': ['New Todo', 'Task Creation', 'User Input'],
    '4/8': ['Edit Todo', 'Task Modification', 'User Control'],

    // Dansons AI Dance Analysis
    '5/1': ['Onboarding', 'Dance Analysis', 'User Introduction'],
    '5/2': ['Homepage', 'Video Upload', 'Dance Performance'],
    '5/3': ['Dance Styles', 'Catalog', 'User Selection'],
    '5/4': ['Dances Page', 'List View', 'User Interaction'],
    '5/5': ['Artist Detail', 'Information', 'Performance Showcase'],
    '5/6': ['Video Analysis', 'AI Feedback', 'Performance Review'],
    '5/7': ['Profile Page', 'User Settings', 'Account Management'],

    // NusaVision Freelance Marketplace
    '6/1': ['Marketplace Homepage', 'Chatbot', 'User Navigation'],
    '6/2': ['Chatbot Interface', 'User Assistance', 'Instant Help'],
    '6/3': ['Freelance Programs', 'Opportunities', 'Project Listings'],
    '6/4': ['Services Offered', 'Freelancer Options', 'Service Details'],
    '6/5': ['Service Freelance Details', 'In-depth Info', 'User Engagement'],
    '6/6': ['Membership Plans', 'Subscription Options', 'User Benefits'],
    '6/7': ['Sign In Page', 'User Access', 'Account Management']
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