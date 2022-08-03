import React, { useState } from 'react';
import Image from "next/image";

export const LoginComponent = ({
                                   apiUrl,
                                   backUrl,
                                   buttonBackgroundColor,
                                   buttonColor,
                                   logo,
                               }) => {
    const [isBusy, setBusy] = useState(false);
    const [error, setError] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (isBusy) {
            return;
        }

        setBusy(true);
        setError('');

        try {
            const form = document.querySelector(
                '#password-form form',
            );

            const formData = new FormData(form);

            const res = await fetch(apiUrl || `/api/login`, {
                method: 'post',
                credentials: 'include',
                body: JSON.stringify({ password: formData.get('password') }),
                headers: { 'Content-Type': 'application/json' },
            });

            const { message } = await res.json();

            if (res.status === 200) {
                window.location.reload();
            } else {
                setError(message);
                setBusy(false);
            }
        } catch (e) {
            setError('An error has occured.');
            setBusy(false);
        }

        return false;
    };

    return (
        <div className={"bg-dark w-screen h-screen flex items-center justify-center"}>

            <div className={""}>
                <div className={"flex items-center justify-center space-x-2 -ml-8"}>
                    <div className={"w-12 md:w-16"}>
                        <Image
                            src={"/logo.png"}
                            alt={"Frisbee Logo"}
                            sizes={"100vw"}
                            width={"100%"}
                            height={"100%"}
                            layout={"responsive"}
                        />
                    </div>
                    <h1
                        className={
                            "font-semibold md:mt-1 text-3xl md:text-4xl text-white"
                        }
                    >
                        fRPC
                    </h1>
                </div>
                <div id="password-form" className={"my-8"}>
                    <form data-testid="form" onSubmit={onSubmit} className={"flex flex-col items-center justify-center space-y-4"}>
                        <input
                            className={`bg-code-dark-background text-white p-2 rounded-md text-xl ${error ? 'border border-red-600' : 'border-none'}`}
                            name="password"
                            type="password"
                            id="password"
                            placeholder="Enter Password..."
                            required
                        />
                        {!!error && (
                            <div className="bg-red-300 text-red-900 w-full p-2 rounded-md border border-red-600" data-testid="error">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isBusy}
                            className={"bg-code-dark-background text-white border-none px-4 py-2 rounded-md text-xl w-full"}
                        >
                            {isBusy ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};