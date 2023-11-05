import Link from 'next/link'

export default function NavMenus() {
  return (
    <ul className="flex gap-6 text-[20px]">
      <li>
        <Link href="/">Profile</Link>
      </li>
      <li>
        <Link href="/experience">Experiences</Link>
      </li>
    </ul>
  )
}
