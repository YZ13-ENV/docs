
const RecommendedProjects = () => {
  return (
    <div className="w-full flex md:flex-row flex-col md:h-48 h-fit my-6 gap-3">
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
  )
}

export default RecommendedProjects