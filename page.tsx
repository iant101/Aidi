import "./globals.css"
import Image from "next/image"
import { AcademicCapIcon, MapPinIcon, ClockIcon } from "@heroicons/react/24/solid"

const skills = [
  { title: "Web Development", description: "Proficient in HTML, CSS, JavaScript, and React" },
  { title: "Database Management", description: "Experienced with SQL and NoSQL databases" },
  { title: "Network Administration", description: "Familiar with network protocols and security" },
  { title: "Cloud Computing", description: "Worked with AWS and Azure cloud platforms" },
]

const projects = [
  { name: "E-commerce Platform", description: "Developed a full-stack e-commerce website using MERN stack", link: "#" },
  { name: "IoT Home Automation", description: "Created a Raspberry Pi-based smart home system", link: "#" },
  {
    name: "Machine Learning Model",
    description: "Implemented a predictive model for stock prices using Python",
    link: "#",
  },
]

const education = [
  { degree: "Bachelor of Science in ICT", institution: "Tech University", year: "2020 - 2024" },
  { degree: "AWS Certified Cloud Practitioner", institution: "Amazon Web Services", year: "2023" },
  { degree: "Cisco Certified Network Associate (CCNA)", institution: "Cisco", year: "2022" },
]

const galleryImages = [
  { src: "/placeholder.svg?height=200&width=300", alt: "Project 1 screenshot" },
  { src: "/placeholder.svg?height=200&width=300", alt: "Hackathon participation" },
  { src: "/placeholder.svg?height=200&width=300", alt: "University campus" },
  { src: "/placeholder.svg?height=200&width=300", alt: "Internship at Tech Company" },
  { src: "/placeholder.svg?height=200&width=300", alt: "Coding workshop" },
  { src: "/placeholder.svg?height=200&width=300", alt: "Team project presentation" },
  { src: "/placeholder.svg?height=200&width=300", alt: "Tech conference attendance" },
  { src: "/placeholder.svg?height=200&width=300", alt: "Robotics competition" },
  { src: "/placeholder.svg?height=200&width=300", alt: "Study abroad program" },
  { src: "/placeholder.svg?height=200&width=300", alt: "Networking event" },
  { src: "/placeholder.svg?height=200&width=300", alt: "Cybersecurity workshop" },
  { src: "/placeholder.svg?height=200&width=300", alt: "AI research project" },
  { src: "/placeholder.svg?height=200&width=300", alt: "Startup weekend" },
  { src: "/placeholder.svg?height=200&width=300", alt: "Open source contribution" },
  { src: "/placeholder.svg?height=200&width=300", alt: "Tech meetup" },
  { src: "/placeholder.svg?height=200&width=300", alt: "Graduation day" },
  { src: "/placeholder.svg?height=200&width=300", alt: "First day at internship" },
  { src: "/placeholder.svg?height=200&width=300", alt: "Volunteer work at local STEM fair" },
]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="animate-logo">
              <Image src="/avatar-placeholder.svg" alt="John Doe" width={40} height={40} className="rounded-full" />
            </div>
            <span className="text-xl font-bold text-gray-800">John Doe</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#skills" className="text-gray-600 hover:text-gray-800">
              Skills
            </a>
            <a href="#projects" className="text-gray-600 hover:text-gray-800">
              Projects
            </a>
            <a href="#education" className="text-gray-600 hover:text-gray-800">
              Education
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-800">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Hire Me
          </a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">John Doe</h1>
            <p className="text-xl mb-8">ICT Student & Aspiring Software Developer</p>
            <a
              href="#contact"
              className="bg-white text-blue-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get In Touch
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-gray-600">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a href={project.link} className="text-blue-500 hover:underline">
                    View Project
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Education & Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {education.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <AcademicCapIcon className="h-8 w-8 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                  <p className="text-gray-600">{item.institution}</p>
                  <p className="text-sm text-gray-500">{item.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery, Location, and History Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Photo Gallery</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {galleryImages.map((image, index) => (
                    <div key={index} className="relative group">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={300}
                        height={200}
                        className="rounded-lg object-cover w-full h-40 transition-transform duration-300 transform group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                        <p className="text-white text-sm text-center px-2">{image.alt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold mb-4">Location</h3>
                  <div className="flex items-center mb-2">
                    <MapPinIcon className="h-5 w-5 text-blue-500 mr-2" />
                    <p>New York City, NY, USA</p>
                  </div>
                  <p className="text-gray-600">
                    Based in the heart of the tech industry, I'm always connected to the latest trends and innovations
                    in ICT.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                  <div className="flex items-start mb-2">
                    <ClockIcon className="h-5 w-5 text-blue-500 mr-2 mt-1" />
                    <p className="text-gray-600">
                      My passion for technology started at a young age when I built my first computer. Since then, I've
                      been on an exciting journey in the world of ICT:
                    </p>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 ml-7">
                    <li>2018: Enrolled in Computer Science program</li>
                    <li>2020: Completed first internship at a local tech startup</li>
                    <li>2021: Led a team in a national hackathon, securing 2nd place</li>
                    <li>2022: Studied abroad in Silicon Valley for a semester</li>
                    <li>2023: Currently working on my final year project in AI and Machine Learning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl mb-8">I'm always open to new opportunities and collaborations.</p>
            <a
              href="mailto:johndoe@example.com"
              className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#skills" className="hover:text-gray-300">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-gray-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#education" className="hover:text-gray-300">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-gray-300">
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>Email: johndoe@example.com</li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>Location: New York, NY</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <span className="sr-only">Bluesky</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-13v6h2V7h-2zm0 8v2h2v-2h-2z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <span className="sr-only">Boxid</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
                    <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-sm text-gray-400">
            <p>&copy; 2025 John Doe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

