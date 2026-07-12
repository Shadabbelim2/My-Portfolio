<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index()
    {
        $data = [
            'name' => 'Shadab Belim',
            'title' => 'Software Engineer | Full Stack Developer | MCA Graduate',
            'email' => 'Shadabbelim008@gmail.com',
            'phone' => '+91 8827976129',
            'location' => 'Indore, Madhya Pradesh, India',
            'about' => 'I am a dedicated MCA graduate with a strong foundation in programming and software engineering. My expertise includes Java, Python, Django, PHP, Laravel, JavaScript, SQL, MongoDB and modern web technologies. I have worked on multiple real-world projects, ranging from responsive websites to machine learning applications.',
            'about_extra' => 'I am passionate about creating user-friendly applications, learning emerging technologies, and contributing to innovative software solutions. My experience in web development and project management has strengthened my problem-solving abilities and teamwork skills.',
            'education' => [
                [
                    'degree' => 'Master of Computer Applications (MCA)',
                    'institution' => 'Acropolis Institute of Technology and Research, Indore',
                    'year' => '2023 – 2025',
                    'grade' => '7.9 CGPA',
                    'icon' => 'fas fa-graduation-cap',
                ],
                [
                    'degree' => 'Bachelor of Science (Mathematics)',
                    'institution' => 'Savita Devi Smriti Jaiswal College, Shamgarh',
                    'year' => '2019 – 2022',
                    'grade' => '8.33 CGPA',
                    'icon' => 'fas fa-university',
                ],
            ],
            'experience' => [
                [
                    'role' => 'Web Developer',
                    'company' => 'Exaalgia',
                    'period' => 'Current',
                    'skills' => ['PHP', 'Laravel', 'WordPress', 'HTML', 'CSS', 'JavaScript'],
                    'responsibilities' => [],
                ],
                [
                    'role' => 'Web Development Intern',
                    'company' => 'ABS Softech Pvt. Ltd.',
                    'period' => 'May 2024 – January 2025',
                    'skills' => ['HTML', 'CSS', 'JavaScript', 'Python'],
                    'responsibilities' => [
                        'Developed websites using HTML, CSS, JavaScript, and Python.',
                        'Worked on frontend and backend development.',
                        'Built responsive and user-friendly interfaces.',
                        'Collaborated on live web projects.',
                    ],
                ],
            ],
            'skills' => [
                'Programming Languages' => [
                    ['name' => 'Python', 'icon' => 'fab fa-python', 'level' => 90],
                    ['name' => 'Java', 'icon' => 'fab fa-java', 'level' => 80],
                    ['name' => 'JavaScript', 'icon' => 'fab fa-js-square', 'level' => 85],
                    ['name' => 'PHP', 'icon' => 'fab fa-php', 'level' => 88],
                    ['name' => 'SQL', 'icon' => 'fas fa-database', 'level' => 82],
                    ['name' => 'C++', 'icon' => 'fas fa-code', 'level' => 75],
                ],
                'Frontend Development' => [
                    ['name' => 'HTML5', 'icon' => 'fab fa-html5', 'level' => 95],
                    ['name' => 'CSS3', 'icon' => 'fab fa-css3-alt', 'level' => 90],
                    ['name' => 'Bootstrap', 'icon' => 'fab fa-bootstrap', 'level' => 88],
                    ['name' => 'JavaScript', 'icon' => 'fab fa-js', 'level' => 85],
                ],
                'Backend Development' => [
                    ['name' => 'PHP', 'icon' => 'fab fa-php', 'level' => 88],
                    ['name' => 'Laravel', 'icon' => 'fab fa-laravel', 'level' => 85],
                    ['name' => 'Django', 'icon' => 'fab fa-python', 'level' => 80],
                    ['name' => 'Node.js', 'icon' => 'fab fa-node-js', 'level' => 70],
                ],
                'Database' => [
                    ['name' => 'MySQL', 'icon' => 'fas fa-database', 'level' => 85],
                    ['name' => 'SQL', 'icon' => 'fas fa-server', 'level' => 82],
                ],
                'Tools & Technologies' => [
                    ['name' => 'Git', 'icon' => 'fab fa-git-alt', 'level' => 85],
                    ['name' => 'GitHub', 'icon' => 'fab fa-github', 'level' => 88],
                    ['name' => 'WordPress', 'icon' => 'fab fa-wordpress', 'level' => 80],
                    ['name' => 'VS Code', 'icon' => 'fas fa-laptop-code', 'level' => 90],
                    ['name' => 'IntelliJ IDEA', 'icon' => 'fas fa-code', 'level' => 75],
                ],
            ],
            'projects' => [
                [
                    'title' => 'My Portfolio Website',
                    'description' => 'A fully responsive portfolio website built using HTML, CSS, JavaScript, and PHP.',
                    'features' => ['Responsive Design', 'Contact Form Integration', 'Project Showcase', 'Skills & Experience Display', 'Modern UI/UX'],
                    'icon' => 'fas fa-globe',
                    'color' => '#6C63FF',
                ],
                [
                    'title' => 'Smart Canteen System',
                    'description' => 'A web-based canteen management system developed using HTML, CSS, JavaScript, PHP, and MySQL.',
                    'features' => ['User Authentication', 'Online Food Ordering', 'Order History', 'Receipt Generation', 'OTP Verification', 'Forgot Password Functionality'],
                    'icon' => 'fas fa-utensils',
                    'color' => '#00C9A7',
                ],
                [
                    'title' => 'Saint Umar Academy Website',
                    'description' => 'Designed and developed an educational institution website with a focus on usability and user experience.',
                    'features' => ['Gallery Section', 'Classroom Information', 'Laboratory Information', 'Responsive Layout', 'Easy Navigation'],
                    'icon' => 'fas fa-school',
                    'color' => '#FF6B6B',
                ],
                [
                    'title' => 'Object Detection Fine-Tuning',
                    'description' => 'Machine Learning project focused on improving object detection accuracy using Python.',
                    'features' => ['Real-Time Detection', 'Model Fine-Tuning', 'Improved Recognition Accuracy', 'Custom Object Detection'],
                    'icon' => 'fas fa-robot',
                    'color' => '#FFA726',
                ],
            ],
            'achievements' => [
                [
                    'title' => 'Problem Solving',
                    'description' => 'Solved 400+ DSA problems on various coding platforms.',
                    'icon' => 'fas fa-brain',
                ],
                [
                    'title' => 'Sports Achievements',
                    'description' => 'Winner of Intercollege Cricket Tournament. District-Level Cricket Tournament Winner.',
                    'icon' => 'fas fa-trophy',
                ],
                [
                    'title' => 'Leadership & Management',
                    'description' => 'Team Leader at PickOne Consulting – Worked in audit operations and management activities.',
                    'icon' => 'fas fa-users',
                ],
            ],
            'interests' => [
                ['name' => 'Full Stack Development', 'icon' => 'fas fa-layer-group'],
                ['name' => 'Artificial Intelligence', 'icon' => 'fas fa-brain'],
                ['name' => 'Machine Learning', 'icon' => 'fas fa-robot'],
                ['name' => 'Software Development', 'icon' => 'fas fa-laptop-code'],
                ['name' => 'Cricket', 'icon' => 'fas fa-baseball-ball'],
                ['name' => 'Team Leadership', 'icon' => 'fas fa-users-cog'],
                ['name' => 'Problem Solving', 'icon' => 'fas fa-puzzle-piece'],
            ],
            'stats' => [
                ['value' => '400+', 'label' => 'DSA Problems Solved', 'icon' => 'fas fa-code'],
                ['value' => '4+', 'label' => 'Major Projects', 'icon' => 'fas fa-project-diagram'],
                ['value' => '2+', 'label' => 'Years Coding', 'icon' => 'fas fa-clock'],
                ['value' => '1+', 'label' => 'Year Web Dev', 'icon' => 'fas fa-globe'],
            ],
        ];

        return view('portfolio', compact('data'));
    }
}
