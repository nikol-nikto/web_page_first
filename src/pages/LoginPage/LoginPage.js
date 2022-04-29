import './LoginPage.css'

export const LoginPage = ({ setIsLoggedIn }) => {
    const logIn = () => {
        setIsLoggedIn(true)
    }

    return(
        <div className="loginPageBody">
            <form onSubmit={logIn} className="LoginForm">
                <h1>Вход</h1>
                <div>
                    <input type="text" placeholder="Логин" name="login"/>
                </div>
                <div>
                    <input type="password" placeholder="Пароль" name="password"/>                
                </div>
                <div>
                    <button type='submit'>Войти</button>
                </div>
            </form>            
        </div>

    )
}