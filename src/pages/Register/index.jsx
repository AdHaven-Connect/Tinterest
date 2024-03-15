import { API_BASE_URL } from "/src/constants.js"
import { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {

    const [dialogMessage, setDialogMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [signUpStep, setSignUpStep] = useState(1);


    const handle_register = async () => {
        
        setIsLoading(true);
        
        const email = document.getElementById("user_email_input").value;
        const password = document.getElementById("user_password_input").value;
        const confirm_password = document.getElementById("user_confirm_password_input").value;
    
        if(email == undefined || email == null || email == ''){
            setIsLoading(false);
            setDialogMessage("Пожалуйста, введите свой адрес электронной почты");
            setShowModal(true);
            return;
        }
    
    
        if(password == undefined || password == null || password == ''){
            setIsLoading(false);
            setDialogMessage("Пожалуйста, введите свой пароль");
            setShowModal(true);
            return;
        }

        if(confirm_password == undefined || confirm_password == null || confirm_password == ''){
            setIsLoading(false);
            setDialogMessage("Пожалуйста, введите пароль еще раз");
            setShowModal(true);
            return;
        }

        if(password !== confirm_password) {
            setIsLoading(false);
            setDialogMessage("Пароли не совпадают");
            setShowModal(true);
            return;
        }

        const req = await fetch(API_BASE_URL + "/auth/signup/", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "email" : email,
                "password" : password,
                "confirm_password" : confirm_password
            })
        });
        if(req.ok && req.status === 201){
            const res = await req.json();
            setIsLoading(false);

            const token = res.token;
            const profile_id = res.profile_id;

            localStorage.setItem("token", token);
            localStorage.setItem("profile_id", profile_id);
            localStorage.setItem("signup_user_email", email);
            setSignUpStep(2);
   
        }else{
            setIsLoading(false);
            setDialogMessage("Невозможно создать новую учетную запись с этим адресом электронной почты.");
            setShowModal(true);
            return;
        }
    }

    const handle_otp_verify = async () => {
        
        setIsLoading(true);
        
        const code = document.getElementById("user_otp_input").value;
        const email = localStorage.getItem("signup_user_email")
        
        if(email == undefined || email == null || email == ''){
            setIsLoading(false);
            setDialogMessage("Попробуйте еще раз");
            setShowModal(true);
            return;
        }
    
        if(code == undefined || code == null || code == ''){
            setIsLoading(false);
            setDialogMessage("Пожалуйста, введите код из письма");
            setShowModal(true);
            return;
        }      

        const req = await fetch(API_BASE_URL + "/auth/otp/verify/", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "email" : email,
                "email_otp" : code
            })
        });
        if(req.ok && req.status === 200){
            const res = await req.json();
            setIsLoading(false);
            window.location.href = "/account";
        }else{
            setIsLoading(false);
            setDialogMessage("Неверный код");
            setShowModal(true);
            return;
        }
    }

    const handle_resend_otp = async () => {
        setIsLoading(true);
        
        const email = localStorage.getItem("signup_user_email")
        
        if(email == undefined || email == null || email == ''){
            setIsLoading(false);
            setDialogMessage("Попробуйте еще раз");
            setShowModal(true);
            return;
        }
    
        const req = await fetch(API_BASE_URL + "/auth/otp/send/", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "email" : email
            })
        });
        if(req.ok && req.status === 200){
            setIsLoading(false);
            setDialogMessage("Код отправлен");
            setShowModal(true);
            return;   
        }else{
            setIsLoading(false);
            setDialogMessage("Попробуйте еще раз");
            setShowModal(true);
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
                <Link to='/login' className='flex text-wrap bg-yellow-300 justify-center w-[160px] self-end py-1 px-2 rounded hover:opacity-70'>
                    Войдите в аккаунт
                </Link>
                {
                    
                    (signUpStep == 1) ?
                        <div className='flex justify-center h-screen items-center'>
                            <section className="col-span-12 flex flex-col right-0 justify-center items-center space-y-4">
                                <h3 className="font-bold text-xl">Создать новый аккаунт</h3>
                                <br />
                                <input id="user_email_input" name="user_email_input" type="email" placeholder="Электронная почта" 
                                className="bg-primary outline bg-opacity-[.04] p-2 w-[280px] h-[40px] outline-yellow-300 outline-[1px]"/>
                                
                                <input id="user_password_input" name="user_password_input" type="password" placeholder="Пароль" 
                                className="bg-primary outline bg-opacity-[.04] p-2 w-[280px] h-[40px] outline-yellow-300 outline-[1px]"/>

                                <input id="user_confirm_password_input" name="user_confirm_password_input" type="password" placeholder="Введите пароль еще раз" 
                                    className="bg-primary outline bg-opacity-[.04] p-2 w-[280px] h-[40px] outline-yellow-300 outline-[1px]"/>


                                <button onClick={() => handle_register() } type="button"
                                    className="bg-yellow-300 px-4 py-2 w-[280px] font-semibold outline-red-300 rounded hover:bg-opacity-70"
                                >{isLoading ? 'Загрузка...' : 'Регистр'}</button>

                                <Link to="/reset-password" className="text-sm hover:text-blue-600 text-blue-500 self-end font-inter">Забыли пароль?</Link>

                            </section>
                        </div>
                    :
                        <div className='flex justify-center h-screen items-center'>
                        <section className="col-span-12 flex flex-col right-0 justify-center items-center space-y-4">
                            <h3 className="font-bold text-xl">Создать новый аккаунт</h3>
                            <br />
                            <span>
                                письмо с кодом было отправлено на {localStorage.getItem("signup_user_email")}
                            </span>
                            <button onClick={() => setSignUpStep(1)} className="text-sm hover:text-blue-600 text-blue-500 self-start font-inter">Изменить e-mail</button>
                            <input id="user_otp_input" name="user_otp_input" type="number" placeholder="Код" 
                            className="bg-primary outline bg-opacity-[.04] p-2 w-[280px] h-[40px] outline-yellow-300 outline-[1px]"/>
                            

                            <button onClick={() => handle_otp_verify() } type="button"
                                className="bg-yellow-300 px-4 py-2 w-[280px] font-semibold outline-red-300 rounded hover:bg-opacity-70"
                            >{isLoading ? 'Загрузка...' : 'Проверять'}</button>
                            <button onClick={() => handle_resend_otp()} className="text-sm hover:text-blue-600 text-blue-500 self-end font-inter">Отправить</button>


                        </section>
                    </div>
                }
            </section>
        </main>
    )
}

export default Register;