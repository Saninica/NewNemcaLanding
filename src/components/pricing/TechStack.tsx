import { FaReact, FaNodeJs, FaDocker, FaPython, FaPhp, FaGithub, FaLaravel, FaBitbucket, FaUbuntu, FaAws} from 'react-icons/fa';
import { SiTypescript, SiMysql, SiPostgresql, SiFlutter, SiFastapi, SiNestjs, SiExpress, SiRabbitmq, SiApachekafka, SiQt , SiTailwindcss } from 'react-icons/si';
import { DiDjango, DiRedis } from 'react-icons/di';
import { IconType } from 'react-icons';

export default function TechStack() {
    interface Tech {
        name: string;
        icon: IconType;
        description?: string;
      }
      
      const techIcons: Tech[] = [
        { name: 'React.js', icon: FaReact, description: 'A JavaScript library for building user interfaces' },
        { name: 'TypeScript', icon: SiTypescript, description: 'A superset of JavaScript that adds static typing' },
        { name: 'Node.js', icon: FaNodeJs, description: 'JavaScript runtime built on Chrome\'s V8 engine' },
        { name: 'Docker', icon: FaDocker, description: 'Containerization platform for developing and deploying applications' },
        { name: 'PostgreSQL', icon: SiPostgresql, description: 'A powerful, open source object-relational database system' },
        { name: 'MySQL', icon: SiMysql, description: 'A powerful, open source object-relational database system' },
        { name: 'Python', icon: FaPython, description: 'A powerful scripting language.' },
        { name: 'PHP', icon: FaPhp, description: 'A powerful scripting language.' },
        { name: 'Laravel', icon: FaLaravel, description: 'A powerful framework robust web development.' },
        { name: 'Github', icon: FaGithub, description: 'Repository storage.' },
        { name: 'BitBucket', icon: FaBitbucket, description: 'Repository storage.' },
        { name: 'Flutter', icon: SiFlutter, description: 'Powerful framework for mobile application development.' },
        { name: 'Django', icon: DiDjango, description: 'Powerful framework for restful api development.' },
        { name: 'FastAPI', icon: SiFastapi, description: 'Fastest framework for restful api development.' },
        { name: 'NestJS', icon: SiNestjs, description: 'Javascript framework for restful api development.' },
        { name: 'ExpressJS', icon: SiExpress, description: 'Javascript framework for restful api development.' },
        { name: 'Redis', icon: DiRedis, description: 'Cache system.' },
        { name: 'RabbitMq', icon: SiRabbitmq, description: 'Quque and messaging system.' },
        { name: 'Kafka', icon: SiApachekafka, description: 'Quque, messaging and streaming system.' },
        { name: 'Qt', icon: SiQt, description: 'Qt Framework' },
        { name: 'TailwindCss', icon: SiTailwindcss, description: 'Css Framework' },
        { name: 'AWS', icon: FaAws, description: 'Cloud Tech' },
        { name: 'Ubuntu Server', icon: FaUbuntu, description: 'Ubuntu Server' },
      
      ];
      
    return (
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mx-auto mb-4 max-w-4xl text-balance text-center text-5xl font-semibold tracking-tight text-white sm:text-6xl"> Our Tech Stack </h2>
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            {techIcons.map((tech, index) => (
                <div key={index} className="bg-white/5 p-8 ">
                    <tech.icon className="text-white w-12 h-12" />
                    <p className='text-white font-medium'> {tech.name} </p>
                </div>
             ))}
            
          </div>
        </div>
      </div>
    )
  }
  