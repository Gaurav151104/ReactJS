import React from "react";

import Card from "./components/Card";

const App = () => {
  const jobs = [
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=google.com&sz=128",
    name: "Google",
    datePosted: "10 weeks ago",
    post: "Software Engineer",
    tag: "Junior Level",
    pay: "$35/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128",
    name: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Frontend Developer",
    tag: "Senior Level",
    pay: "$40/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128",
    name: "Amazon",
    datePosted: "5 days ago",
    post: "Backend Developer",
    tag: "Junior Level",
    pay: "$32/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=meta.com&sz=128",
    name: "Meta",
    datePosted: "3 weeks ago",
    post: "React Developer",
    tag: "Mid Level",
    pay: "$38/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=apple.com&sz=128",
    name: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag: "Senior Level",
    pay: "$45/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=netflix.com&sz=128",
    name: "Netflix",
    datePosted: "6 weeks ago",
    post: "Full Stack Developer",
    tag: "Mid Level",
    pay: "$42/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=nvidia.com&sz=128",
    name: "NVIDIA",
    datePosted: "4 days ago",
    post: "Machine Learning Engineer",
    tag: "Senior Level",
    pay: "$50/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=adobe.com&sz=128",
    name: "Adobe",
    datePosted: "2 months ago",
    post: "UI Developer",
    tag: "Junior Level",
    pay: "$30/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=salesforce.com&sz=128",
    name: "Salesforce",
    datePosted: "3 weeks ago",
    post: "Cloud Engineer",
    tag: "Mid Level",
    pay: "$36/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?domain=uber.com&sz=128",
    name: "Uber",
    datePosted: "1 week ago",
    post: "Software Developer",
    tag: "Junior Level",
    pay: "$34/hour",
    location: "Bangalore, India"
  }
];

  
  return <div className="parent">
    {jobs.map(function(elem){
    return <Card company={elem.name} pos={elem.post} tag1={elem.tag} tag2={elem.datePosted} pr={elem.pay} loc={elem.location} logo={elem.brandLogo}/>
  })}
  </div>;
};

export default App;
