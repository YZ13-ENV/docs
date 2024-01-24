'use client'
import { docFinder } from "@/helpers/docFinder"
import SideGroup from "./side/side-group"
import SideElement from "./side/side-element"
import { useMediaQuery } from "react-responsive"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { useEffect, useMemo, useState } from "react"
import { BiLoaderAlt } from "react-icons/bi"
import { maps } from "./docs-maps"
import { usePathname, useRouter } from "next/navigation"

type Props = {
}
const Side = ({  }: Props) => {
    const prefix = '/docs/'
    const [loading, setLoading] = useState(true)
    const path = usePathname()
    const currentSection = useMemo(() => { return path.replace(prefix, '') },[path])
    const documentation = docFinder(currentSection)
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [selected, setSelected] = useState<string>(currentSection)
    const { push } = useRouter()
    useEffect(() => {
        setLoading(false)
    },[])
    useEffect(() => {
        console.log(selected, currentSection)
        if (selected !== currentSection) {
            const withPrefix = prefix + selected
            push(withPrefix)
        }
    },[currentSection, selected])
    if (loading) return (
        <aside className='px-6 shrink-0 lg:w-64 w-full lg:h-full h-fit gap-4 flex flex-col'>
            <BiLoaderAlt size={36} className="animate-spin mx-auto my-auto" />
        </aside>
    )
    if (isMobile) {
        return (
            <aside className='px-6 shrink-0 w-full h-fit gap-4 flex flex-col'>
                <Select value={selected} onValueChange={value => setSelected(value)}>
                    <SelectTrigger>{maps.find(item => selected === item.id)?.name || 'Не найдено'}</SelectTrigger>
                    <SelectContent>
                        {
                            maps.map(item =>
                                <SelectItem key={item.id} value={item.id}>{item.name}</SelectItem>
                            )
                        }
                    </SelectContent>
                </Select>
            </aside>
        )
    }
    return (
        <aside className='px-6 shrink-0 w-64 h-full gap-4 flex flex-col'>
            {
                documentation &&
                documentation.side.map((item, index) => {
                    if (item.type === 'group') return <SideGroup providedId={currentSection} key={'group-' + index} group={item} />
                    if (item.type === 'single') return <SideElement key={'single-' + index} element={item} />
                    return null
                })
            }
        </aside>
    )
}

export default Side