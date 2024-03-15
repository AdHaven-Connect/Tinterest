import { API_BASE_URL } from "/src/constants.js"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Login = () => {

    const [dialogMessage, setDialogMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const handle_login = async () => {
        
        setIsLoading(true);

        const email = document.getElementById("user_email_input").value;
        const password = document.getElementById("user_password_input").value;
    
        if(email == undefined || email == null || email == ''){
            setDialogMessage("Пожалуйста, введите свой адрес электронной почты");
            setShowModal(true);
            setIsLoading(false);
            return;
        }
    
    
        if(password == undefined || password == null || password == ''){
            setDialogMessage("Пожалуйста, введите свой пароль");
            setShowModal(true);
            setIsLoading(false);
            return;
        }

        const req = await fetch(API_BASE_URL + "/auth/login/", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "username" : email,
                "password" : password
            })
        });
        if(req.ok && req.status === 200){
            const res = await req.json();
            const token = res.token;

            const vreq = await fetch(API_BASE_URL + "/auth/login/validate/", {
                method : "GET",
                headers : {
                    "Content-Type" : "application/json",
                    "Authorization" : "Token " + token
                }
            });
            if(vreq.ok && vreq.status === 200){
                const vres = await vreq.json();
                const profile_id = vres.profile_id;


                localStorage.setItem("token", token);
                localStorage.setItem("profile_id", profile_id);

                window.location.href = "/";
                setIsLoading(false);
                return;
            }else{
                setDialogMessage("Что-то пошло не так");
                setShowModal(true);
                setIsLoading(false);
                return;
            }

        }else{
            setDialogMessage("Электронная почта или пароль неверны");
            setShowModal(true);
            setIsLoading(false);
            return;
        }
    }


    return (
        <main className='grid grid-cols-12 gap-8 h-screen overflow-y-hidden'>
            { showModal &&
                <dialog id="dialog_for_message" open
                    className="space-y-4 flex flex-col self-center justify-between p-5 rounded-2xl border w-[500px] border-yellow-300"
                >
                    <p className="font-semibold border-left-1">{dialogMessage}</p>
                    <button className="bg-yellow-300 text-dark font-semibold rounded-3xl px-6 py-2" type="button" onClick={() => setShowModal(false)}>Хорошо</button>
                </dialog>
            }
            <section className='col-span-6 bg-[#999999]/[.1] h-screen flex flex-col items-start justify-between p-5'>
                <div id='header'>
                    <header className=" grid grid-cols-12 md:grid-cols-8 sm:grid-cols-4 gap-8 md:gap-4">
                        <nav className="col-span-12 md:col-span-8 sm:col-span-4 flex items-center justify-between p-5">
                            <section className="flex items-center gap-2">
                                <img className="h-16" src="/src/assets/images/tinkoff.svg" alt=""/>
                                    <p className="text-sm font-inter font-lead w-[20px] ">Tinterest</p>
                            </section>

                        </nav>
                    </header>
                </div>
                <div id='footer'>
                    <footer className="grid grid-cols-12">
                        <p className="col-span-6 w-[531px]">
                        Tinterest позволяет вам общаться с единомышленниками и расширять свою сеть контактов. Здесь вы можете следить за темами, которые вам нравятся, быть в курсе последних публикаций ваших друзей и коллег. Вступайте сегодня.
                        </p>
                    </footer>
                </div>
            </section>
            <section className='col-span-6 flex flex-col p-5'>
                <Link to='/register' className='flex text-wrap bg-yellow-300 w-[190px] self-end py-1 px-2 rounded hover:opacity-70'>
                    Создать новый аккаунт
                </Link>
                <div className='flex justify-center h-screen items-center'>
                    <section className="col-span-12 flex flex-col right-0 justify-center items-center space-y-5">

                        <h3 className="font-bold text-xl">Войдите в аккаунт</h3>
                        <br />
                        <input id="user_email_input" name="user_email_input" type="email" placeholder="Электронная почта" 
                        className="bg-primary outline bg-opacity-[.04] p-2 w-[280px] h-[40px] outline-yellow-300 outline-1"/>
                        
                        <input id="user_password_input" name="user_password_input" type="password" placeholder="Пароль" 
                        className="bg-primary outline bg-opacity-[.04] p-2 w-[280px] h-[40px] outline-yellow-300 outline-1"/>

                        <button onClick={() => handle_login() } type="button"
                            className="bg-yellow-300 px-4 py-2 w-[280px] font-semibold outline-red-300 rounded hover:bg-opacity-70"
                        >{isLoading ? 'Загрузка...' : 'Входить'}</button>

                        <Link to="/reset-password" className="text-sm hover:text-blue-600 text-blue-500 self-end font-inter">Забыли пароль?</Link>

                    </section>
                </div>
            </section>
        </main>
    )
}

export default Login;