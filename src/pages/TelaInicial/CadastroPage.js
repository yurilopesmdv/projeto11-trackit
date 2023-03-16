import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../../assets/img/logo-completa.svg"
import { ContentInicial, FormInicial } from "./styleInicial"
import { ThreeDots } from 'react-loader-spinner'

export default function CadastroPage() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function cadastrar(e) {
        setLoading(true)
        e.preventDefault()
        const urlPost = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
        const body = { email, name, image, password }
        const promise = axios.post(urlPost, body)
        promise.then((res) => {
            navigate("/")
        })
        promise.catch((err) => {
            alert(err.response.data.message)
            setLoading(false)
        })
    }
    return (
        <ContentInicial>
            <img src={logo} alt="logo" />
            <FormInicial onSubmit={cadastrar}>
                <input data-test="email-input" disabled={loading} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" value={email} required />
                <input data-test="password-input" disabled={loading} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="senha" value={password} required />
                <input data-test="user-name-input" disabled={loading} onChange={(e) => setName(e.target.value)} type="text" placeholder="nome" value={name} required />
                <input data-test="user-image-input" disabled={loading} onChange={(e) => setImage(e.target.value)} type="text" placeholder="foto" value={image} required />
                <button data-test="signup-btn"
                    disabled={loading} >{loading ? <ThreeDots
                    height="15"
                    width="60"
                    radius="9"
                    color="#FFFFFF"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                /> : "Cadastrar"}</button>
            </FormInicial>
            <Link data-test="login-link" to="/" >
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </ContentInicial>
    )
}
