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
    year: "2021-22",
    at: "Accenture TH",
    city: "BKK",
    country: 'TH',
    position: "Software engineer",
    description: "Be a part of Paotang project as iOS engineer, contributed wallet relevant features. After 3 months pass, I was chosen by a manager to build Golang team, regarding of an upcoming project which’s Digital Lending, so I was the first one." +
      "<br />" +
      "<br />" +
      "I had opportunity to start the project from beginning. Other developers join later so guiding, code structuring, team building also was a part of my role."
  },
  {
    year: "2020",
    at: "Hive venture",
    city: "BKK",
    country: 'TH',
    position: "Fullstack",
    description: "Joined as a fullstack developers for start up company. Project was kind of Grab, Food panda. They were developing a core monolith service with nodejs as a backend, but their outsource consultant convinced to change to kotlint springboot." +
      "<br />" +
      "<br />" +
      "So I had to learn kotlint language and rewrite the legacy codebase as kotlint springboot; despite there’s a communication issue whether it’s WFH company, a team member had different working time." +
      "<br />" +
      "<br />" +
      "CEO requested me to solve. I helped work-flow setting, organized daily standup meeting and set communication time period. Issues were gradually start to improve."
  },
  {
    year: "2018",
    at: "KBTG",
    city: "BKK",
    country: 'TH,',
    position: "iOS Developer",
    description: "Exciting project K-Plus in that time called Victoria, I joined as an iOS engineer. Slip page, home menu with user bank accounts and bit of setting feature are all my hand." +
      "<br />" +
      "<br />",
  },
  {
    year: '2016-18',
    at: "Work from anywhere",
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
    "For this company i work as full-time freelance"
  },
  {
    year: '2014',
    at: "True Digital Plus",
    city: "BKK",
    country: "TH",
    position: "iOS Developer",
    description: "For this company I am just contractor, but I actually work at True Digital Plus company site. This company hire me as a consultant and create Framework for them. True Digital Plus(let’s call TDP) need Framework for their customer which customer are game develop company something. Let’s me explain about TDP, TDP is a game online and offline publisher that it. " + 
    "<br />" +
    "<br />" +
    "TDP Framework: make for game developer if developer want to join or publish game in TDP name. developer need to implement their game and plugin TDP Framework." +
    "<br />" +
    "<br />" +
    "TDP Framework feature: authentication for user and developer and this Framework offer Inapp-purchase that’s all I know in phase 1"
  },
  {
    year: '2013',
    at: "PromptNow Company Limited",
    city: "BKK",
    country: "TH",
    position: "iOS Developer",
    description: "First job is a big project about Financial service that create for purple bank in Thailand. I did not start earlier. I came to do next for 1.3 phase that’s form phase 3.0 – 4.3 which I do both iPhone and iPad because that time hasn’t developer enough for it. Finally, I was done." +
    "<br />" +
    "<br />" +
    "Mostly I do function call ATM/Branch that about searching ATM and Branch close your current-location and can search data for other city. This function will show data like a pin in your map. User can see detail for each data, Have enable AR function user can user this for seek ATM/Branch with camera device"
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
