import CodeBlock from "@/components/shared/code-block"
import MDXRemote from "@/components/shared/mdx-remote"

const ApiStart = () => {
    return (
        <div className='w-full h-fit'>
            <MDXRemote>
                {`
                    
                ## REST API

                DM REST API позволяет разработчикам программно взаимодействовать со своей учетной записью и службами DM с помощью HTTP-запросов.


                `}
            </MDXRemote>
            <div className="w-full h-fit flex flex-col gap-4">
                <CodeBlock filename="endpoint" language="text">{'https://api.darkmaterial.space'}</CodeBlock>
                <CodeBlock filename="error-response" showLineNumber>{`
{
    error: {
        code: "forbidden",
        message: "Not authorized"
    }
}
    `.trim()
                }</CodeBlock>
            </div>

        </div>
    )
}

export default ApiStart