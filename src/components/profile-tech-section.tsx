import techPlatformImg from "../assets/images/tech-platform.svg";
import techLangImg from "../assets/images/tech-lang.svg";
import techFrameworkImg_0 from "../assets/images/tech-framwork0.svg";
import techFrameworkImg_1 from "../assets/images/tech-framwork1.svg";
import techInfrastructureImg from "../assets/images/tech-infra.svg";
import techToolImg from "../assets/images/tech-tool.svg";

const contents: { title: string; pics: string[] }[] = [
  { title: "PLATFORM", pics: ["images/tech-platform.svg"] },
  { title: "PROGRAMING LANG", pics: ["images/tech-lang.svg"] },
  {
    title: "FRAMEWORK",
    pics: ["images/tech-framwork0.svg", "images/tech-framwork1.svg"],
  },
  { title: "INFRASTRUCTURE", pics: ["images/tech-infra.svg"] },
  { title: "TOOL", pics: ["images/tech-tool.svg"] },
];

export default function ProfileTechSection() {
  return (
    <section className="relative flex w-full">
      <p className="rotate-[-90deg] absolute top-[73px] left-[-75px] text-[24px] font-bold text-[#547387]">
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
