import { docFinder } from "@/helpers/docFinder"
import { parseDocId } from "@/helpers/docs"

type Props = {
    docId: string[]
}
const Content = ({ docId }: Props) => {
    const parsedDocId = parseDocId(docId)
    const documentation = docFinder(parsedDocId.sideValue)
    return (
        <section className='w-full h-full p-6 flex flex-col gap-6'>
            { documentation && documentation.blocks }
        </section>
    )
}

export default Content