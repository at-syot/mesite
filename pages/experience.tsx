import {ReactElement} from "react";
import Layout from "../src/components/layout";
import ContactActions from "@/src/components/ContactActions";

type Placement = {
  year: string
  at: string
  city: string
  country: string
}
type Info = { position: string; description: string }
type Experience = Placement & Info
const experiences: Experience[] = [
  {
    year: "now",
    at: "ZXSport",
    city: "-",
    country: 'TH',
    position: "Software Engineer",
    description: "Managed a Vue.js frontend team of three to successfully develop a bidding web application, achieving the launch of a 20-page project size within two months." +
    "<br />" + 
    "<br />" + 
    "Implemented functional programming to enhance the development experience, fostering a more enjoyable and error-resistant coding environment."
  },
  {
    year: "2021-22",
    at: "Accenture TH",
    city: "BKK",
    country: 'TH',
    position: "Software Engineer",
    description: "I started my journey with the Paotang project as an iOS engineer, focusing on developing wallet-related features. After three months, my manager entrusted me with the task of building a Golang team for an upcoming Digital Lending project. I was the first team member to come on board." +
      "<br />" +
      "<br />" +
      "This opportunity allowed me to lay the project's foundation from scratch. As other developers joined later, I took on the responsibility of guiding them, structuring the codebase, and fostering a cohesive team environment."
  },
  {
    year: "2020",
    at: "Hive venture",
    city: "BKK",
    country: 'TH',
    position: "Fullstack Developer",
    description: "I joined a startup company as a full-stack developer, and they were working on a project similar to Grab or Food Panda. Initially, they were building a core monolithic service with Node.js as the backend. However, due to the influence of an outsourced consultant, the decision was made to switch to Kotlin with Spring Boot." +
      "<br />" +
      "<br />" +
      "This change meant that I had to learn Kotlin and rewrite the existing legacy codebase using Spring Boot. This process was challenging, especially given the communication difficulties, as the company operated in a remote work-from-home environment, and team members had varying working hours." +
      "<br />" +
      "<br />" +
      "Upon the CEO's request, I took the initiative to address these communication issues. I implemented a structured workflow, organized daily stand-up meetings, and established designated communication time slots. Over time, these measures led to a gradual improvement in addressing the communication challenges within the team."
  },
  {
    year: "2019",
    at: "KBTG",
    city: "BKK",
    country: 'TH,',
    position: "iOS Developer",
    description: "I joined the Victoria project, codenamed K-Plus, as an iOS engineer. I played a key role in designing and developing the home menu, which includes user bank account features and a set of essential settings." +
      "<br />" +
      "<br />" +
      "Built the K-Plus banking application serving 60 million users." +
      "<br />" +
      "<br />" +
      "Optimized the slip screen feature for seamless rendering and introduced a user-friendly home menu with account features"
  },
  {
    year: '2018',
    at: "Santora Nakama",
    city: "BKK",
    country: "TH",
    position: "Senior IOS Developer",
    description: "Designed and developed an interactive live game show application while actively maintaining the codebase for ongoing improvements and stability" +
    "<br />" +
    "<br />" +
    "Took a leadership role in mentoring and steering the existing iOS development team towards writing cleaner and more reusable code."
  },
  {
    year: '2016-18',
    at: "Self Employed",
    city: "-",
    country: "TH",
    position: "Fulltime-freelance Developer",
    description: "I transitioned from a full-time job to full-time freelancing to diversify my experience, moving beyond iOS development. I engaged in a variety of projects, particularly focusing on smaller to medium-sized ones. This allowed me to gain insights into my preferences and strengths, helping me better understand my career path.",
   },
  {
    year: '2015',
    at: "BananaCode",
    city: "BKK",
    country: "TH",
    position: "iOS Developer",
    description: "BananaCode want me to become one of team's member. Job: \"KLeasing\" i work is implement, code, fixing bug and publish new version to app store" +
    "<br />" + 
    "<br />" +
    "For this company i work as Full-time freelance"
  },
  {
    year: '2014',
    at: "True Digital Plus",
    city: "BKK",
    country: "TH",
    position: "iOS Developer",
    description: "BananaCode has offered me a position as a team member. In this role for the 'KLeasing' project, I am responsible for implementing, coding, resolving issues, and releasing new versions on the app store." + 
    "<br />" +
    "<br />" +
    "In Phase 1, I focused on a feature within the TDP Framework, which included user and developer authentication. Additionally, this framework provided support for in-app purchases."
  },
  {
    year: '2013',
    at: "PromptNow Company Limited",
    city: "BKK",
    country: "TH",
    position: "iOS Developer",
    description: "In my initial project, I undertook a substantial assignment related to financial services for Purple Bank in Thailand. I joined the project from Phase 3.0 and continued through Phase 4.3, where I worked on both the iPhone and iPad applications due to a shortage of developers at the time. Eventually, I successfully completed my part of the project." +
    "<br />" +
    "<br />" +
    "My primary responsibility involves developing the ATM/Branch function, which allows users to search for nearby ATM and branch locations, as well as access data for locations in different cities. This function displays location details on a map, and users can access more information for each location. Additionally, I've worked on implementing an Augmented Reality (AR) feature, enabling users to use their device's camera for real-time location searches of ATM and branch locations."
  }
]

export default function Experience() {
  return (
    <main className="flex flex-col gap-10">
      {
        experiences.map((exp, i) => {
          return (
            <aside className="flex flex-col text-[22px]" key={i}>
              <div className="flex items-baseline justify-between font-bold">
                <p>{exp.at} </p>
                <p className="font-thin italic text-[16px] pr-1">{exp.city}, {exp.country} {exp.year}</p>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h4 className="font-bold text-[22px]">Position: {exp.position}</h4>
                <div dangerouslySetInnerHTML={{ __html: exp.description }} className="text-[20px]">
                </div>
              </div>
            </aside>
          )
        })
      }
    
      <div className="flex justify-center">
        <ContactActions></ContactActions>
      </div>
    </main>
  );
}

Experience.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="EXPERIENCE" gradientCls="from-[#FAFDFF] to-[#C5F2E6]">
      {page}
    </Layout>
  );
};
