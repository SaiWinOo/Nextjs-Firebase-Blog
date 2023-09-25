'use client';
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Button from "@/components/common/Button";
import {useRouter} from 'next/navigation'
import Input from "@/components/common/Input";
import {createUserWithEmailAndPassword} from "@firebase/auth";
import {auth} from "../../../config/firebase";


const Login = () => {

    const router = useRouter();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const login = async () => {
        setIsLoading(true);
        try {
            let res = await createUserWithEmailAndPassword(auth, email, password);
            localStorage.setItem('uid', res.user.uid);
            router.push('/');
        } catch (e) {
            console.error(e);
        }finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('uid')) {
            router.push('/');
        }
    }, []);

    return (
        <main className="flex flex-row items-center justify-center bg-white">
            <div className="h-screen w-11/12 overflow-y-scroll md:w-2/3 lg:w-1/2">
                <div className="flex min-h-screen flex-col items-center justify-center">
                    <div className="mx-auto w-full max-w-sm lg:w-[24rem]">
                        <div><a className="flex shrink-0 items-center h-16 w-auto" href="/">
                        </a><h2 className="mt-8 text-3xl font-extrabold text-gray-800"> Sign in to your
                            account </h2></div>
                        <div className="mt-6">
                            <div className="mt-4 space-y-6">
                                <div className="relative">
                                    <Input onChange={e=> setEmail(e.target.value)} label={'Email Address'}/>
                                </div>
                                <div>
                                    <Input onChange={e=> setPassword(e.target.value)} label={'Password'}/>
                                    <Button onClick={login} isLoading={isLoading} className={'mt-5 w-full'}>Sign in</Button>
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-8">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="mt-4 flex items-center justify-center text-sm text-gray-900"> Not yet a user?
                            <Link
                                className="ml-3 text-indigo-600 hover:text-indigo-500"
                                href="/register"> Sign up here </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Login;
