import { PropsWithChildren } from "react";
import Hamburger from "@/src/components/hamburger";
import Sidebar from "@/src/components/sidebar";

type Props = { title: string; gradientCls: string };
export default function Layout(props: PropsWithChildren<Props>) {
  function getContainerCls() {
    return "h-full flex flex-col bg-gradient-to-b " + props.gradientCls;
  }

  return (
    <div id="container" className={getContainerCls()}>
      <nav className="flex flex-row p-6 justify-between items-center">
        <img src="images/logo-black.png" className="h-[69px] w-[79px]" />
        <Hamburger />
      </nav>

      <p className="w-[200px] h-[54px] bg-black text-white flex items-center justify-center rounded-r-3xl font-bold text-[19px] shrink-0">
        {props.title}
      </p>

      <div className="grow p-6">
        {props.children}
        <Sidebar />
      </div>
    </div>
  );
}
