import { triggerSidebar } from "@/src/store/sidebar-ui";

export default function Hamburger() {
  return (
    <a onClick={() => triggerSidebar(true)}>
      <img
        src="images/nav-hamburger.png"
        alt="site hamburger"
        className="h-[36px] w-[36px]"
      />
    </a>
  );
}
