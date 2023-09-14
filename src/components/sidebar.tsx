// import logoWhite from "@assets/images/logo-white.svg";
// import closeIcon from "@assets/images/icon-close.svg";
// import profileButton from "@assets/images/botton-profile.svg";
// import expButton from "@assets/images/button-experiences.svg";

import { useStore } from "@nanostores/react";
import { $sidebarOpen, triggerSidebar } from "@/src/store/sidebar-ui";

function getCls(open: boolean) {
  let cls =
    "absolute top-0 left-0 h-full flex flex-col bg-black transition-[width] duration-200 ease-in";
  cls += open ? " " + "w-full" : " " + "w-0";
  return cls;
}

export default function () {
  const sidebarOpen = useStore($sidebarOpen);
  return (
    <div className={getCls(sidebarOpen)}>
      <nav className="text-right flex justify-between items-center p-6">
        <img src="images/logo-white.svg" />
        <a onClick={() => triggerSidebar(false)}>
          <img src="images/icon-close.svg" className="h-[35px] w-[35px]" />
        </a>
      </nav>

      <div className="grow flex flex-col gap-3 justify-center items-center">
        <a href="/">
          <img src="images/botton-profile.svg" className="h-[96px] w-[198px]" />
        </a>
        <a href="/experience">
          <img
            src="images/button-experiences.svg"
            className="h-[96px] w-[198px]"
          />
        </a>
      </div>
    </div>
  );
}
