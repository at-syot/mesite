import { useScreenDevice } from "../useScreenDevice"


export default function ProfileICare() {
  const screenDevice = useScreenDevice()
  function titleCls() {
    let cls = " font-bold text-[#547387]"
    cls += screenDevice === 'desktop' ? " text-[34px]" : ' text-[24px]'
    return cls
  }

  return (
    <section className="flex gap-4 w-full max-w-[860px] items-baseline">
      <p className={titleCls()}>WHAT'S I CARE</p>

      {screenDevice === 'desktop' ? <span className="w-[170px] h-[3px] bg-[#A9C3D6] rounded"></span> : null}
      
      <div className="text-[16px]">
        <p className="font-bold">QUALITY OF CODE</p>
        <p className="font-bold">TRANSPARENCY</p>
        <p className="font-bold">EMPATHY</p>
        <p className="font-bold">RESPECT INDIVIDUAL</p>
      </div>
    </section>
  )
}
