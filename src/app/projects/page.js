import Projects from "./projectsClient";


export const metadata = {
    title: "Projects | My Portfolio",
    description:
      "Check out my projects built with modern web technologies including Next.js, React, and Tailwind CSS. Explore various applications, websites, and experiments that showcase my skills and creativity.",
    keywords: [
      "projects",
      "portfolio",
      "web development",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript",
      "Frontend",
    ],
    openGraph: {
      title: "Projects | My Portfolio",
      description:
        "Explore my projects showcasing my skills in web development and design. Built using Next.js, React, and Tailwind CSS.",
      url: "https://yourdomain.com/projects",
      type: "website",
      images: [
        {
          url: "https://yourdomain.com/images/portfolio-cover.png",
          width: 1200,
          height: 630,
          alt: "Portfolio Projects Cover",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@yourTwitterHandle",
      title: "Projects | My Portfolio",
      description:
        "A collection of projects I've worked on, built with cutting-edge web technologies like Next.js, React, and Tailwind CSS.",
      image: "https://yourdomain.com/images/portfolio-cover.png",
    },
  };
  

function ProjectsPage(){
    return(
        <div>
            <Projects/>
        </div>
    )

}

export default ProjectsPage