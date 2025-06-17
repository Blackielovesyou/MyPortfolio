import { ArrowRight, ExternalLink } from "lucide-react";
import { Github } from "lucide-react";


const projects=[
    {
        id: 1,
        title: "Caleb's Kitchen",
        discription: "It is an Android Studio project designed as a food ordering system that allows users to order meals, reserve tables, and request catering services.",
        image: "/projects/project2.png",
        tags:["Android Studio", "Java"],
        demoUrl: "#",
        githubUrl: "https://github.com/Blackielovesyou/Calebs_Name"
},
    {
        id: 2,
        title: "Car Game",
        discription: "It is a Python game that allows the user to overtake other cars without bumping into them, and as time goes by, the game gets faster and faster.",
        image: "/projects/project3.png",
        tags:["Pycharm", "Python", "Pygame"],
        demoUrl: "#",
        githubUrl: "https://github.com/Blackielovesyou/CarGame"
},
    {
        id: 3,
        title: "SaaS Landing Page",
        discription: "A modern SaaS landing page built with React and Tailwind CSS.",
        image: "/projects/project1.png",
        tags:["React", "Tailwind CSS", "SaaS"],
        demoUrl: "#",
        githubUrl: "#"
}


]

export const ProjectsSection = () => {

    return <section id="project" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-3xl font-bold mb-4 text-center">
                Featured<span className="text-primary">Projects
                </span> 
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto" >
                Explore my latest projects that showcase my skills in web development. 
                Each project is a testament to my passion for creating innovative and user-friendly applications.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) =>(
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title}className="w-full h-full object-cover transition-transform-duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag)=>(
                                       <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>
                           

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.discription}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary ttransition-colors duration-300"> 
                                        <ExternalLink size={20}/>
                                    </a>

                                     <a href={project.githubUrl}
                                      target="_blank"
                                     className="text-foreground/80 hover:text-primary ttransition-colors duration-300"> 
                                        <Github size={20}/>
                                    </a>
                                </div>
                                 </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 ">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    href="https://github.com/Blackielovesyou"
                     target="_blank">
                    
                        Check My Github <ArrowRight size={16}/>
                        </a>
                </div>
        </div>
    </section>
};