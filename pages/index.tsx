import { ReactElement } from "react";
import Layout from "../src/components/layout";
import ProfileTechSection from "../src/components/profile-tech-section";
import ProfileICare from "../src/components/ProfileICare";
import ProfileProfessionalSkill from "../src/components/ProfileProfessionalSkill";
import ContactActions from "../src/components/ContactActions";

export default function Profile() {
  return (
    <main className="flex flex-col items-center gap-10">
      <section className="flex flex-col items-center">
        <img src="images/name.svg" alt="Todsapon's name" />
        <p className="text-[12px] text-[#547387] font-thin">
          Located in Toronto, ON Canada
        </p>
        <a href="resume_as_story_telling.pdf" download className="text-white bg-black font-bold p-2 pr-4 pl-4 rounded-3xl mt-6 hover:bg-[#547387] cursor-pointer">
          VISIT MY RESUME
        </a>
      </section>

      <section>
        <p>
          Passioned in quality of code, more focus on programming paradigms & software design Software is software ... make it soft.
        </p>
        <br />
        <p>
          Not much talking with new people, unnecessary funny with close one. Coding, Sport, Music are needed.</p>
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
