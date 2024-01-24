import DocsNav from "@/app/(docs)/_components/docs-nav"
import Header from "@/components/widgets/header"
import Side from "../../_components/side"

type Props = {
    children: JSX.Element | JSX.Element[]
}
const layout = ({ children }: Props) => {
    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <Header />
            </div>
            <DocsNav />
            <div className='max-w-7xl w-full min-h-screen mx-auto h-full flex lg:flex-row flex-col items-start py-6'>
                <Side />
                <div className="w-full h-fit p-6 md-layout">
                    { children }
                </div>
                <div className='w-64 shrink-0 lg:flex hidden h-full px-6'></div>
            </div>
            <footer className="py-12 border-t bg-card">

            </footer>
        </>
    )
}

export default layout