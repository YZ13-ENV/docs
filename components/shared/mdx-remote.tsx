import { MDXRemote as MDXRemoteComponent } from 'next-mdx-remote/rsc'
import remarkBreaks from 'remark-breaks'

type Props = {
    scope?: Record<string, unknown>
    children?: string
}
const MDXRemote = ({ scope, children='' }: Props) => {
    return <MDXRemoteComponent
        options={{
            scope: scope,
            mdxOptions: { remarkPlugins: [ remarkBreaks ] },
        }}
        source={children.trimStart()} />
}

export default MDXRemote