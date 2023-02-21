
const signup = async (userData) => {
    const response = await fetch('/api/user/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })

    const data = await response.json();

    if(response.ok) {
        localStorage.setItem('user', JSON.stringify(data));
    }

    return data;
}

const login = async(userData) => {
    const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userData)
    })

    const data = await response.json();

    if(response.ok) {
        localStorage.setItem('user', JSON.stringify(data));
    }

    return data;
}


const authService = {
    signup,
    login,
}

export default authService;