import { BiUser, BiUserPlus } from "react-icons/bi"

const AuthBlock = () => {
  return (
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
    </div>
  )
}

export default AuthBlock