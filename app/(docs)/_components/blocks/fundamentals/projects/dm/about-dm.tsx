import MDXRemote from "@/components/shared/mdx-remote"

const AboutProjectDM = () => {
    return (
        <div className='w-full h-fit md-layout'>
            <MDXRemote>
                {`
                    ## DM (DarkMaterial)

                    Полное название - **DarkMaterial**, далее **DM**.

                    Главное приложение семейства DM, где происходит управление аккаунтом пользователя, где также можно легко перейти к другим приложениям DM Family.

                    ## Обновление от 12 Января 2024

                    Обновление логотипа DM
                    <div className='flex items-center gap-4 mb-6'>
                        <img src="/DM-dark-old.svg" width={48} height={48} />
                        <span>></span>
                        <img src="/DM-dark.svg" width={48} height={48} />
                    </div>
                    - Перенос документации с /docs на [docs.darkmaterial.space](https://docs.darkmaterial.space)
                    - Добавлена форма обратной связи
                    - Добавлена возможность обновить аватар профиля
                    - Добавлена возможность обновить профессию
                `}
            </MDXRemote>
        </div>
    )
}

export default AboutProjectDM