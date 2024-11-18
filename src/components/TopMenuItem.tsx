import Link from "next/link"

export default function TopMenuItem({title,pageRef}:{title:string, pageRef:string}) {
  return (
    <Link className="text-sm md:text-base text-white" href={pageRef}>
     {title}
     </Link>
  )
}
