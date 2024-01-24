import { BiChevronRight, BiUser, BiUserPlus } from 'react-icons/bi'
import MDXRemote from "@/components/shared/mdx-remote"
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

const BeforeStart = () => {
    return (
        <div className='w-full h-fit flex flex-col md-layout'>
            <MDXRemote>
                {`
                    # Перед тем как вы начнете
                    Вам необходим аккаунт **DM Family**
                `}
            </MDXRemote>
            <div className="w-full h-fit flex md:flex-row flex-col items-center justify-center gap-2">
                <div className='w-full h-fit border transition-colors rounded-lg gap-2 flex flex-col p-4 hover:bg-card hover:border-primary cursor-pointer'>
                    <BiUserPlus size={24} />
                    <span className='font-semibold text-accent-foreground'>Зарегистрироваться</span>
                    <span className='text-muted-foreground'>
                        Если у вас ещё нет аккаунта DM Family, <br />
                        создайте новый
                    </span>
                </div>
                <div className='w-full h-fit border transition-colors rounded-lg gap-2 flex flex-col p-4 hover:bg-card hover:border-primary cursor-pointer'>
                    <BiUser size={24} />
                    <span className='font-semibold text-accent-foreground'>Войти</span>
                    <span className='text-muted-foreground'>
                        Если у вас уже есть аккаунт DM Family, войдите в аккаунт для продолжения
                    </span>
                </div>
                {/* <Button variant='outline' className='w-1/2'>Войти</Button> */}
                {/* <Button className='w-1/2'>Зарегистрироваться</Button> */}
            </div>
            <MDXRemote>
                {`
                    Аккаунт DM Family, предоставляет доступ ко всем сервисам DM, под одним аккаунтом, так что вам не придется создавать новый для каждого сервиса.

                    ### Начните с рекомендуемых проектов

                `}
            </MDXRemote>
            <div className="w-full flex md:flex-row flex-col md:h-48 h-fit gap-3">
                <div className="md:w-1/3 w-full h-full rounded-lg bg-card border p-5 flex flex-col gap-2 cursor-pointer hover:border-primary transition-colors">
                    <div className='w-9 h-9 rounded-full bg-muted shrink-0 mb-auto' />
                    <span className='text-lg font-semibold'>DM Family</span>
                    <span className='text-xs text-muted-foreground'>Главное приложение, которое также выступает место управления аккаунтом.</span>
                </div>
                <div className="md:w-1/3 w-full h-full rounded-lg bg-card border p-5 flex flex-col gap-2 cursor-pointer hover:border-primary transition-colors">
                    <div className='w-9 h-9 rounded-full bg-muted shrink-0 mb-auto' />
                    <span className='text-lg font-semibold'>YZ13</span>
                    <span className='text-xs text-muted-foreground'>В YZ13 вы можете найти анонсы, новости и посты от комьюнити.</span>
                </div>
                <div className="md:w-1/3 w-full h-full rounded-lg bg-card border p-5 flex flex-col gap-2 cursor-pointer hover:border-primary transition-colors">
                    <div className='w-9 h-9 rounded-full bg-muted shrink-0 mb-auto' />
                    <span className='text-lg font-semibold'>Frame</span>
                    <span className='text-xs text-muted-foreground'>Место для дизайнеров, где профиль играет роль портфолио.</span>
                </div>
            </div>
            <Separator className='my-12' />
            <Link href='/docs/fundamentals/projects' className='w-full no-effect h-fit border transition-colors rounded-lg gap-2 mb-6 flex flex-col p-4 hover:bg-card hover:border-primary cursor-pointer'>
                <div className="w-full h-fit flex items-center justify-between">
                    <span className='font-semibold text-lg text-accent-foreground'>Проекты</span>
                    <BiChevronRight size={18} />
                </div>
                <span className='text-muted-foreground text-sm'>Рассмотрите подробнее проекты DM Family</span>
            </Link>
        </div>
    )
}

export default BeforeStart