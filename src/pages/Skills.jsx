
import { Code, Database, Palette, Smartphone, Server, Cloud, Globe, Zap, Shield, Cpu, FileText, Terminal } from 'lucide-react';

// Skill Item Component
const SkillItem = ({ skillName, icon }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-white/20 hover:shadow-md transition-shadow duration-300">
      <div className="text-center">
        <div className="w-12 h-12 bg-gradient-to-r from-burgundy-100 to-maroon-100 rounded-lg flex items-center justify-center mx-auto mb-3 border border-burgundy-200">
          {icon}
        </div>
        <h4 className="text-sm font-semibold text-gray-900">{skillName}</h4>
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="w-8 h-8 text-burgundy-600" />,
      description: "Core programming languages and scripting",
      skills: [
        { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "TypeScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "JavaScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "C#", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "SQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Bash Script", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" className="w-6 h-6 text-burgundy-600" /> }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Server className="w-8 h-8 text-burgundy-600" />,
      description: "Modern frameworks and development libraries",
      skills: [
        { name: "React.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Next.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Node.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Django", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Nest.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Tailwind CSS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-6 h-6 text-burgundy-600" /> }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8 text-burgundy-600" />,
      description: "AWS services and infrastructure management",
      skills: [
        { name: "Amazon Web Services", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "AWS RDS", icon: <img src="https://static.cdnlogo.com/logos/a/66/aws-rds.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "DynamoDB", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Docker", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Vercel", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Terraform", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg" className="w-6 h-6 text-burgundy-600" /> },
      ]
    },
    {
      title: "Databases & ORM",
      icon: <Database className="w-8 h-8 text-burgundy-600" />,
      description: "Database management and object-relational mapping",
      skills: [
        { name: "PostgreSQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "MySQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Prisma ORM", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "MongoDB", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Redis", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" className="w-6 h-6 text-burgundy-600" /> },
      ]
    },
    {
      title: "Development Tools",
      icon: <Palette className="w-8 h-8 text-burgundy-600" />,
      description: "Essential tools for modern development",
      skills: [
        { name: "Git", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Postman", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Sentry", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sentry/sentry-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Stripe", icon: <img src="svg/stripe.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Notion", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg" className="w-6 h-6 text-burgundy-600" /> }
      ]
    },
    {
      title: "Desktop Development",
      icon: <Smartphone className="w-8 h-8 text-burgundy-600" />,
      description: "Desktop application development for Windows/Unix platform",
      skills: [
        { name: "C# Development", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: ".NET Framework", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Electron.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Real-Time Auditing", icon: <img src="svg/audit.svg" className="w-6 h-6 text-burgundy-600" /> },
        { name: "Linux", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" className="w-6 h-6 text-burgundy-600" /> },
      ]
    }
  ];



  return (
    <>
      {/* Hero Section */}
      <section id="skills" className="section-padding bg-gradient-to-br from-white/90 via-blue-50/50 to-purple-50/50 backdrop-blur-sm">
        <div className="container-custom">
          <div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-gradient">Skills</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="section-padding bg-gradient-to-br from-gray-50/80 via-blue-50/40 to-purple-50/40 backdrop-blur-sm">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">{category.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <SkillItem 
                        skillName={skill.name}
                        icon={skill.icon}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default Skills; 
