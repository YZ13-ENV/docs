import MDXRemote from "@/components/shared/mdx-remote"
import Link from "next/link"
import { BiChevronRight } from "react-icons/bi"

const AboutProjects = () => {
    return (
        <div className='w-full h-fit md-layout'>
            <MDXRemote>
                {`
                    # Проекты
                    ## Перед тем как перейти к проектам 

                    Все проекты были созданы для демонстрации навыков, не для коммерческого пользования, подписка не распространяется за деньги. Далее при переходе к проектам вы увидите их описание и их назначение, какую проблему они решают, или по какой причине были созданы.

                    ### Исходный код
                    Большинство проектов открыты для просмотра [Тут](https://github.com/yz13-env)

                `}
            </MDXRemote>
            <Link href='/docs/fundamentals/projects/dm' className='w-full no-effect h-fit border transition-colors rounded-lg gap-2 mb-6 flex flex-col p-4 hover:bg-card hover:border-primary cursor-pointer'>
                <div className="w-full h-fit flex items-center justify-between">
                    <span className='font-semibold text-lg text-accent-foreground'>DM</span>
                    <BiChevronRight size={18} />
                </div>
                <span className='text-muted-foreground text-sm'>Главное приложение, которое также выступает место управления аккаунтом.</span>
            </Link>
        </div>
    )
}

export default AboutProjects