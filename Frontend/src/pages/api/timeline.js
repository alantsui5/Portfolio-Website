// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export const TimeLineData = [
    { year: 2017, text: 'Study as a computer engineer in Chinese University of Hong Kong', },
    { year: 2018, text: 'Landed internship in PCCW', },
    { year: 2019, text: 'Developed ASCII Render Engine in C#', },
    { year: 2020, text: 'Developed serverless full-stack application Shoppy. Space Shooter in C++', },
    { year: 2020, text: 'Landed internship in Just A Moment', },
    { year: 2021, text: 'Started my journey as a product manager in Tencent', },
    { year: 2022, text: 'Participated in internal ERP and App feature design and followed CRP project', },
  ];

export default (req, res) => {
    res.status(200).json(TimeLineData)
}