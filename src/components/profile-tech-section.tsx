import { useScreenDevice } from "../useScreenDevice";

const contents: { title: string; pics: string[] }[] = [
  { title: "PLATFORM", pics: ["images/tech-platform.svg"] },
  { title: "PROGRAMING LANGUAGES", pics: ["images/tech-lang.svg"] },
  {
    title: "FRAMEWORK",
    pics: ["images/tech-framwork0.svg", "images/tech-framwork1.svg"],
  },
  { title: "INFRASTRUCTURE", pics: ["images/tech-infra.svg"] },
  { title: "TOOL", pics: ["images/tech-tool.svg"] },
];

export default function ProfileTechSection() {
  const screenDevice = useScreenDevice()
  return screenDevice === 'mobile' ? 
    <ProfileTechSectionMobile /> :
    <ProfileTechSectionDesktop />
}
 
function ProfileTechSectionMobile() {
  return (
    <section className="relative flex w-full">
      <p className="rotate-[-90deg] absolute top-[73px] left-[-75px]
      text-[24px] font-bold text-[#547387]">
        TECHNOLOGIES
      </p>
      <div className="basis-[50px]" />

      <div className="flex flex-col gap-3">
        {contents.map(({ title, pics }, i) => (
          <aside key={i}>
            <h4 className="font-semibold text-[14px]">{title}</h4>
            {pics.map((pic, i) => (
              <img key={i} src={pic} alt="" className="pt-2 pb-2 h-[50px]" />
            ))}
          </aside>
        ))}
      </div>
    </section>
  );
}
 
function ProfileTechSectionDesktop() {
  return (
    <section className="flex gap-4 w-[80svw] max-w-[860px]">
      <h3 className="text-[#547387] text-[34px]">TECHNOLOGIES</h3>
      <div className="flex gap-6 flex-wrap">
        {contents.map(({ title, pics }) => (
          <aside>
            <label className="text-[12px]">{title}</label>
            {pics.map((pic, i) => (
              <img key={i} src={pic} alt="" className="pt-2 pb-2 h-[50px]" />
            ))}
          </aside>
        ))}
      </div>
    </section>
  )
}
