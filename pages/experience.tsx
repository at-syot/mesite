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
    year: "2021 - 2022",
    at: "Accenture TH",
    city: "BKK",
    country: 'TH',
    position: "SWE",
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
  }
]

export default function Experience() {
  return (
    <main className="flex flex-col gap-10">
      {
        experiences.map((exp, i) => {
          return (
            <aside className="flex flex-row gap-4 text-[14px]" key={i}>
              <div className="flex flex-col items-end font-bold basis-[110px] shrink-0">
                <p>{exp.year}</p>
                <p>{exp.at}</p>
                <p>{exp.city}, {exp.country}</p>
              </div>
              
              <div className="flex flex-col items-start gap-2">
                <h4 className="font-bold">Position: {exp.position}</h4>
                <div dangerouslySetInnerHTML={{ __html: exp.description }}>
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
