import { useScreenDevice } from "../useScreenDevice";


export default function ProfileProfessionalSkill() {
  const screenDevice = useScreenDevice()
  function containerCls() {
    const size = screenDevice === 'mobile' ? '_60px' : '_70px'
    return `grid grid-rows-[repeat(7,_minmax(0,${size}))] grid-cols-[repeat(7,${size})]`
  }

  return (
    <div className={containerCls()}>
      <div className="row-start-1 row-end-3 col-start-3 col-span-3 flex flex-col items-center justify-center">
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
  const screenDevice = useScreenDevice()
  const textSize = screenDevice === 'mobile' ? "9px" : "16px"

  return (
    <aside className="flex flex-col items-center justify-center">
      <img src={props.img} className="h-[50px] w-[50px]" />
      <label className={`text-[${textSize}] font-semibold`}>{props.title}</label>
    </aside>
  );
}
