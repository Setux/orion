interface UserData {
    email: string,
    password: string,
    isRemember: boolean
}

export default class AuthService {
    static async login(user: UserData) {
        const data = {email: user.email, password: user.password}
        const res = await fetch('https://authservice.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
                body: JSON.stringify({ data })
            }
        );
        const returnedData = await res.json();
        if (user.isRemember) {
            localStorage.setItem('token', returnedData.accessToken)
        }
        return returnedData.accessToken
    }
    static getUser() {
        const token = localStorage.getItem('token')
        if (token) {
            return token
        }
    }
}
