import Card from "./components/Card";
const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=google.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHourUSD: 95,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=apple.com",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHourUSD: 105,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    payPerHourUSD: 85,
    location: "Remote"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=amazon.com",
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    payPerHourUSD: 70,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=netflix.com",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Platform Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHourUSD: 120,
    location: "Remote"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHourUSD: 90,
    location: "Pune, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=tesla.com",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHourUSD: 110,
    location: "Austin, USA"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=uber.com",
    companyName: "Uber",
    datePosted: "8 days ago",
    post: "Data Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    payPerHourUSD: 88,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=airbnb.com",
    companyName: "Airbnb",
    datePosted: "2 days ago",
    post: "Full Stack Developer",
    tag1: "Contract",
    tag2: "Senior Level",
    payPerHourUSD: 100,
    location: "Remote"
  },
  {
    brandLogo: "https://www.google.com/s2/favicons?sz=128&domain=nvidia.com",
    companyName: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "AI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    payPerHourUSD: 130,
    location: "Santa Clara, USA"
  }
];

  return (
    <div className="parent">
      {jobOpenings.map((elem) => {
        return (
          <Card
            company={elem.companyName}
            post={elem.post}
            logo={elem.brandLogo}
            date={elem.datePosted}
            payment={elem.payPerHourUSD}
            location={elem.location}
            tag1={elem.tag1}
            tag2={elem.tag2}
          />
        );
      })}
    </div>
  );
};

export default App;
