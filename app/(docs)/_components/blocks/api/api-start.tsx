import CodeBlock from "@/components/shared/code-block"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkBreaks from "remark-breaks"

const ApiStart = () => {
    return (
        <div className='w-full h-fit'>
            <MDXRemote
            options={{
                scope: {
                    name: 'DM',
                    api_domain: 'https://api.darkmaterial.space'
                },
                mdxOptions: { remarkPlugins: [remarkBreaks] },
            }}
            source={`
                ## {name} REST API
                
                {name} REST API позволяет разработчикам программно взаимодействовать со своей учетной записью и службами {name} с помощью HTTP-запросов.

                С помощью API разработчики могут развертывать новые версии веб-приложений, управлять личными доменами, получать информацию о развертываниях, а также управлять секретами и переменными среды для проектов.
                
                API поддерживает любой язык программирования или платформу, которая может отправлять HTTP-запросы.


                ### Основы API

                Наш API представлен как служба HTTP/1 и HTTP/2 через SSL. Все конечные точки находятся по URL-адресу <code className='code-line'>{api_domain}</code> и обычно следуют архитектуре REST.
            

            `
            .replace(/\n/gi, "&nbsp; \n")
            } />
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