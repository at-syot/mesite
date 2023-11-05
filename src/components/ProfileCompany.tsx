import { useScreenDevice } from "../useScreenDevice"

export default function ProfileCompany() {
  const screenDevice = useScreenDevice()

  return screenDevice === 'desktop' ? (
    <div className="flex flex-col items-center gap-6 max-w-[1024px] py-16">
      <div className="flex gap-6 items-baseline">
        <img src="/images/company/icon_accenture.svg"/>
        <img src="/images/company/icon_kbtg.svg"/>
      </div>

      <div className="flex gap-6 items-baseline">
        <img src="/images/company/icon_prodigy9.svg"/>
        <img src="/images/company/icon-hive.svg"/>
        <img src="/images/company/icon_dreamentum.svg"/>
        <img src="/images/company/icon-santora.svg"/>
        <img src="/images/company/icon_bananacode.svg"/>
        <img src="/images/company/icon-adi.svg"/>
        <img src="/images/company/icon-prompnow.svg"/>
      </div>
    </div>
  ) : null
}
