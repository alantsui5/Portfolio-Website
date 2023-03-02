// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const projects = [
    {
      title: "Pizza Inventory Manager",
      description: "A asp.net application for managing Pizza inventory, includes asp.net version and .net api version",
      image: '/images/3.png',
      tags: ['ASP.NET 6', 'Monolith', 'REST API', ],
      source:'https://github.com/alantsui5/dotnetProject',
      visit: 'https://github.com/alantsui5/dotnetProject',
      id: 0,
    },
    {
      title: "Express TypeScript JWT Project",
      description: "Provide a light TypeScript implementation on JWT",
      image: '/images/expressts-1.png',
      tags: ["NodeJS8", 'ExpressTS', "JWT", "TypeORM", "Postgres"],
      source:'https://github.com/alantsui5/express-template',
      visit: 'https://github.com/alantsui5/express-template',
      id: 1,
    },
    {
      title: "Java Spring Project Lab",
      description: "Coffee shop and book researvation RESTAPI application backend written in Java",
      image: '/images/2.png',
      tags: ["Java", "Spring Boot"],
      source: 'https://github.com/alantsui5/javaProjects/',
      visit: 'https://github.com/alantsui5/javaProjects/',
      id: 2,
    },
    {
      title: 'Shoppy',
      description: "A serverless fullstack E-Commerse Website powered Angular and Firebase",
      image: '/images/1.png',
      tags: ['Angular', 'GCP Firebase', 'TypeScript', 'Node'],
      source: 'https://github.com/alantsui5/Shoppy',
      visit: 'https://practice-f4c73.firebaseapp.com/',
      id: 3,
    },
    {
      title: "Cat Sheet Blog V2.0",
      description: "My new personal full stack blog application in Golang and JavaScript",
      image: '/images/4.png',
      tags: ["Go", "Hugo", "JavaScript"],
      source:'https://github.com/alantsui5/CatSheet',
      visit: 'https://cat-sheet.netlify.app/',
      id: 4,
    }
    /*
    {
      C# ASCII image generator
    },
    {
      title: 'I am Calm',
      description: "This is a cross-platform app which have React and Flutter version",
        image: '/images/3.jpg',
        tags: ['React', 'Flutter'],
      source: 'https://google.com',
      visit: 'https://google.com',
      id: 2,
    },
    {
      title: 'Video download Engine',
      description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
      image: '/images/4.jpg',
      tags: ['Youtube API', 'React', 'Python'],
      source: 'https://google.com',
      visit: 'https://google.com',
      id: 3,
    },*/
  ];

  export default (req, res) => {
    res.status(200).json(projects)
}