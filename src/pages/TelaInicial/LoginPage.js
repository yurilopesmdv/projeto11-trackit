import axios from "axios"
import { useContext, useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/img/logo-completa.svg"
import { UserContext } from "../../context/authUser"
import { ContentInicial, FormInicial } from "./styleInicial"
import { useEffect } from "react"
export default function LoginPage() {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)
    
    useEffect(() => {
        const userInfoSerializado = localStorage.getItem("user");
        const userInfo = JSON.parse(userInfoSerializado)
        if(userInfo) {
            setUser(userInfo)
            navigate("/hoje")
        }
    }, [])
    
    
    function entrar(e) {
        e.preventDefault()
        setLoading(true)
        const urlPost = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
        const body = { email, password }
        const promise = axios.post(urlPost, body)
        promise.then( (res) => {
            const userInfo = res.data
            const userInfoSerializado = JSON.stringify(userInfo)
            localStorage.setItem("user", userInfoSerializado)
            navigate("/hoje")
        })
        promise.catch( (err) => {
            alert(err.response.data.message)
            setLoading(false)
            setEmail("")
            setPassword("")
        })
    }
    
    return (
        <ContentInicial>
            <img src={logo} alt="logo" />
            <FormInicial onSubmit={entrar}>
                <input disabled={loading} onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="email" required />
                <input disabled={loading} onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="senha" required />
                <button disabled={loading}>{loading ? <ThreeDots
                    height="15"
                    width="60"
                    radius="9"
                    color="#FFFFFF"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                /> : 'Entrar'}</button>
            </FormInicial>
            <Link to="/cadastro" >
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </ContentInicial>
    )
}
