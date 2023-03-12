// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const commerseProjects = [
  {
    title: 'Promotion Website Dashboard',
    description: "",
    image: '/images/1.png',
    tags: ['Vue', 'ERP', 'Spring Boot API'],
    id: 0,
  },
  {
    title: 'Messaging System Upgrade',
    description: "",
    image: '/images/1.png',
    tags: ['Vue', 'ERP', 'Spring Boot API', 'Mail Server']
  },
  {
    title: 'CRP',
    description:'',
    image: '/images/1.png',
    tags: ['Spring Boot API', 'Documentation', 'ERP']
  },
  {
    title: 'Tax Loan Report Generation',
    description: '',
    image: '',
    tags: ['Python', 'Metabase', 'Elastic Search', "LogStash", "Click House"]
  }
]

export default (req, res) => {
  res.status(200).json(commerseProjects)
}