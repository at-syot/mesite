import { useScreenDevice } from "../useScreenDevice";


export default function ProfileProfessionalSkill() {
  return (
    <div className="grid grid-rows-[repeat(7,_60px)]
    grid-cols-[repeat(7,_60px)] md:grid-rows-[repeat(7,_70px)]
    md:grid-cols-[repeat(7,_70px)]">
      <div className="row-start-1 row-end-3 col-start-3 col-span-3 flex
      flex-col items-center justify-center">
        <SkillBox img="images/Icon-communication.svg" title="COMMUNICATION" />
      </div>
      <div className="row-start-3 row-span-2 col-span-2 flex flex-col items-center justify-center">
        <SkillBox
          img="images/Icon-problem solving.svg"
          title="PROBLEM SOLVING"
        />
      </div>

      {/* center */}
      <div className="row-start-3 row-span-3 bg-blue-50 bg--[#FFFFFF]
      col-span-3 text-[#547387] font-semibold flex justify-center items-center
      text-center rounded-[50%]">
        PROFESSIONAL
        <br />
        SKILL
      </div>

      <div className="row-start-3 row-span-2 col-span-2 flex items-center justify-center">
        <SkillBox img="images/Icon-collaboration.svg" title="COLLABORATION" />
      </div>
      <div className="row-start-5 row-span-2 col-span-2 flex justify-end">
        <SkillBox img="images/Icon-self learning.svg" title="SELF LEARNING" />
      </div>
      <div className="row-start-6 row-span-2 col-span-3 flex justify-center">
        <SkillBox img="images/Icon-srlf motivated.svg" title="SELF MOTIVATED" />
      </div>
      <div className="row-start-5 row-span-2 col-span-2 flex items-center">
        <SkillBox
          img="images/Icon-time management.svg"
          title="TIME MENAGEMENT"
        />
      </div>
    </div>
  );
}

function SkillBox(props: { img: string; title: string }) {
  return (
    <aside className="flex flex-col items-center justify-center">
      <img src={props.img} className="h-[50px] w-[50px]" />
      <label className="text-[9px] md:text-[16px] font-semibold">{props.title}</label>
    </aside>
  );
}
