import {PropsWithChildren} from "react";
import Hamburger from "@/src/components/hamburger";
import Sidebar from "@/src/components/sidebar";
import { expressway } from "../font";
import { useScreenDevice } from "../useScreenDevice";
import NavMenus from "./NavMenus";

type Props = { title: string; gradientCls: string };
export default function Layout(props: PropsWithChildren<Props>) {
  const screenDevice = useScreenDevice()

  function getContainerCls() {
    let cls = "relative h-full w-full overflow-hidden flex flex-col bg-gradient-to-b" 
    cls += " " + props.gradientCls;
    cls += " " + expressway.className
    return cls 
  }

  return (
    <div className={getContainerCls()}>
      <nav className="flex flex-row p-6 justify-between items-center">
        <a href="/">
          <img src="images/logo-black.png" className="h-[69px] w-[79px]" />
        </a>
        {screenDevice === 'mobile' ? <Hamburger /> : <NavMenus />}
      </nav>

      <p className="w-[200px] h-[54px] bg-black text-white flex items-center
      justify-center rounded-r-3xl font-bold text-[19px] shrink-0">
        {props.title}
      </p>
  
      {/* content */}
      <div className="grow p-6 md:px-24 md:max-w-[1024px] md:mx-auto">
        {props.children}
      </div>
      
      <Sidebar />
    </div>
  );
}

