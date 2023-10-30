import { ReactElement } from "react";
import Layout from "../src/components/layout";
import ProfileTechSection from "../src/components/profile-tech-section";
import ProfileICare from "../src/components/ProfileICare";
import ProfileProfessionalSkill from "../src/components/ProfileProfessionalSkill";
import ContactActions from "../src/components/ContactActions";

export default function Profile() {
  return (
    <main className="flex flex-col items-center gap-10 text-[20px]">
      <section className="flex flex-col items-center">
        <img src="images/todsapon_profilepage.png" alt="Todsapon's name" />
        <p className="text-[12px] text-[#547387] font-thin">
          Located in Toronto, ON Canada
        </p>
        <a href="OatResumeCA.pdf" download className="text-white bg-black font-bold p-2 pr-4 pl-4 rounded-3xl mt-6 hover:bg-[#547387] cursor-pointer">
          VISIT MY RESUME
        </a>
      </section>

      <section>
        <p>
          Hi, I am a software engineer who recently relocated to Toronto, ON, with a background in fullstack development. Currently engaged part-time with a Thai company, I am actively seeking opportunities to contribute my skills and expertise to the local tech community. Eager to bring a fresh perspective and dedication to excellence in software development.
        </p>
        <br />
        <p>
        I have 5 years of expertise in mobile development. I transitioned to backend development with 2 years of hands-on experience. Finding a newfound passion in backend work, I am committed to exclusively pursuing and expanding my career in this domain. I leverage my mobile development insights to design robust backend systems. Excited about contributing to dynamic backend environments. Looking forward to continued growth and impact in the backend development landscape.
          </p>
          <br />
          <p>
          Focused on improving skills in current backend development and gaining insights into functional programming, I am committed to continuous learning to stay updated on emerging technologies.
          </p>
      </section>

      <ProfileTechSection />
      <ProfileICare />
      <ProfileProfessionalSkill />
      <ContactActions />
    </main>
  );
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="PROFILE" gradientCls="from-[#FAFDFF] to-[#547387]">
      {page}
    </Layout>
  );
};
