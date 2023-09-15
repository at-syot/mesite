// import logoWhite from "@assets/images/logo-white.svg";
// import closeIcon from "@assets/images/icon-close.svg";
// import profileButton from "@assets/images/botton-profile.svg";
// import expButton from "@assets/images/button-experiences.svg";

import {useStore} from "@nanostores/react";
import {$sidebarOpen, triggerSidebar} from "@/src/store/sidebar-ui";
import {useEffect, useRef} from "react";

function getCls(open: boolean) {
  let cls =
    "absolute top-0 bottom-0 left-0 h-full flex flex-col bg-black transition-[width] duration-200 ease-in";
  cls += open ? " " + "w-full" : " " + "w-0";
  return cls;
}

export default function () {
  const sidebarOpen = useStore($sidebarOpen);
  const navRef = useRef<HTMLDivElement>(null)
  const hrefButtonsRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const buttons = hrefButtonsRef.current
    const nav = navRef.current
    if (!buttons || !nav) return
    
    if (sidebarOpen) {
      setTimeout(() => {
        const navHeight = nav.clientHeight
        const { innerWidth, innerHeight } = window
        
        buttons.style.opacity = '1'
        buttons.style.width = innerWidth + 'px'
        buttons.style.height = (innerHeight - navHeight) + 'px'
      }, 200)
      return
    }
    
    buttons.style.opacity = '0'
    buttons.style.height = '0px'
    buttons.style.width = '0px'
  }, [sidebarOpen])
  
  return (
    <div className={getCls(sidebarOpen)}>
      <nav className="text-right flex justify-between items-center p-6" ref={navRef}>
        <img src="images/logo-white.svg"/>
        <a onClick={() => triggerSidebar(false)}>
          <img src="images/icon-close.svg" className="h-[35px] w-[35px]"/>
        </a>
      </nav>
      
      <div className="flex flex-col gap-3 justify-center items-center duration-100 transition-[opacity]" ref={hrefButtonsRef}>
        <a href="/">
          <img src="images/botton-profile.svg" className="h-[96px] w-[198px]"/>
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
