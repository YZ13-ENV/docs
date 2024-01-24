import Link from 'next/link'
import React from 'react'
import { BiChevronRight } from 'react-icons/bi'

type Props = {
  title?: string
  description?: string
  link: string
}
const NextPageLink = ({ link, description, title }: Props) => {
  return (
    <Link href={link}
    className='w-full no-effect h-fit border transition-colors rounded-lg gap-2 mb-6 flex flex-col p-4 hover:bg-card hover:border-primary cursor-pointer'>
        <div className="w-full h-fit flex items-center justify-between">
            <span className='font-semibold text-lg text-accent-foreground'>{ title }</span>
            <BiChevronRight size={24} />
        </div>
        <span className='text-muted-foreground text-sm'>{ description }</span>
    </Link>
  )
}

export default NextPageLink