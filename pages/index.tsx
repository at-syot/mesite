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
        <a className="text-white bg-black font-bold p-2 pr-4 pl-4 rounded-3xl mt-6 hover:bg-[#547387] cursor-pointer">
          VISIT MY RESUME
        </a>
      </section>

      <section>
        <p>
          Voluptatum debitis sint corporis et omnis ab molestias vel. Et dolorem
          recusandae vero est in libero voluptatem perspiciatis expedita. Odit
          exercitationem non esse quisquam eligendi dolores autem quia omnis.
          Eos eligendi distinctio labore esse architecto asperiores
          reprehenderit. Neque impedit sit ea. Sint autem qui doloremque beatae
          dignissimos quas occaecati voluptate. Est voluptatum nisi placeat.
          Omnis aut iure et. Voluptatum debitis sint corporis et omnis ab
          molestias vel. Et dolorem recusandae vero est in libero voluptatem
          perspiciatis expedita. Odit exercitationem non esse quisquam eligendi
          dolores autem quia omnis. Eos eligendi distinctio labore esse
          architecto asperiores reprehenderit. Neque impedit sit ea. Sint autem
          qui doloremque beatae dignissimos quas occaecati voluptate. Est
          voluptatum nisi placeat. Omnis aut iure et.
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
