// Portfolio Data — Rutvej Waghela
// Edit this file to update all portfolio content

const PORTFOLIO_DATA = {
  personal: {
    name: 'Rutvej Waghela',
    displayName: 'Rutvej',
    title: 'Senior Software Engineer',
    tagline: 'Backend · Cloud · AI Systems',
    subtitles: [
      'Backend Engineer',
      'Distributed Systems Builder',
      'AI Systems Engineer',
      'Cloud Infrastructure Architect',
      'Open Source Builder'
    ],
    bio: `I'm a Senior Software Engineer with 6+ years of experience specializing in backend architecture, distributed systems, and production AI engineering. I build scalable backend services, event-driven pipelines, and open-source developer tooling with a focus on system resilience, performance, and clean design.`,
    email: 'waghela.rutvej1@gmail.com',
    location: 'India',
    socials: {
      github: 'https://github.com/rutvej',
      linkedin: 'https://in.linkedin.com/in/rutvej-waghela-409244198',
      blog: 'https://medium.com/@waghela.rutvej1',
      email: 'mailto:waghela.rutvej1@gmail.com'
    },
    resumeUrl: './assets/resume.pdf',
    stats: [
      { number: '6+', label: 'Years Experience' },
      { number: 'Backend', label: 'Core Architecture' },
      { number: 'AI & Cloud', label: 'Production Systems' },
      { number: 'Open Source', label: 'Tools & Systems' }
    ]
  },

  skills: [
    {
      category: 'Languages',
      items: ['Python', 'Go', 'JavaScript', 'SQL', 'PHP']
    },
    {
      category: 'Backend & APIs',
      items: ['FastAPI', 'Django', 'Flask', 'Node.js', 'Laravel', 'REST APIs', 'Microservices', 'gRPC']
    },
    {
      category: 'AI Engineering',
      items: ['LLMs', 'RAG', 'Vertex AI', 'Gemini', 'OpenAI', 'MCP', 'LanceDB', 'DuckDB', 'Embedding Models', 'Prompt Engineering', 'Agentic Workflows']
    },
    {
      category: 'Messaging & Streaming',
      items: ['Kafka', 'RabbitMQ', 'Google Pub/Sub', 'AmazonMQ', 'Celery', 'Apache Airflow']
    },
    {
      category: 'Databases & Storage',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'BigQuery', 'Looker Studio']
    },
    {
      category: 'Cloud — GCP & AWS',
      items: ['Cloud Run', 'App Engine', 'Vertex AI', 'Pub/Sub', 'Lambda', 'ECS', 'Fargate', 'Athena', 'Glue', 'S3']
    },
    {
      category: 'Infrastructure & DevOps',
      items: ['Docker', 'Terraform', 'GitHub Actions', 'GitLab CI/CD', 'Distributed Systems', 'Event-Driven Architecture']
    }
  ],

  projects: [
    {
      name: 'DAA — Developer AI Assistant',
      description: 'Serverless, stateless, event-driven platform that turns production errors into automated investigations. Error logs trigger AI root-cause analysis, which automatically generates GitHub PRs, postmortems, and potential fixes — with Docker-first, self-hosted deployment.',
      tech: ['Python', 'Docker', 'GitHub API', 'LLMs', 'Event-Driven', 'Serverless'],
      githubUrl: 'https://github.com/rutvej/daa',
      liveUrl: null,
      featured: true,
      type: 'Open Source · Founder & Maintainer'
    }
  ],

  education: [
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'University of Mumbai',
      period: 'June 2016 – May 2019',
      year: '2019',
      cgpa: '7.6 / 10',
      details: 'Computer Science & IT fundamentals'
    }
  ],

  blog: [
    {
      title: 'What a Sharing Rickshaw Driver Taught Me About Trust in UPI Payments',
      date: '2026-06-28',
      excerpt: 'A thought experiment on offline-first payment verification inspired by a simple conversation. How would you build trust into the exception flow without changing the normal payment experience?',
      url: 'https://medium.com/@waghela.rutvej1/what-a-sharing-rickshaw-driver-taught-me-about-trust-in-upi-payments-7a6ad2e98df8'
    },
    {
      title: 'JSON Packages to Go',
      date: '2022-03-09',
      excerpt: 'JSON is a well known and preferred data format among API developers. Yet being a simple data format, it can be tricky to manipulate in Go. Here are two packages that make it easy.',
      url: 'https://medium.com/@waghela.rutvej1/json-packages-to-go-e03c68f37993'
    }
  ]
};
