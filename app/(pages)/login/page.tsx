import SigninForm from '@/app/components/SigninForm/SigninForm';
import AuthLayout from '@/app/Layouts/AuthLayout/AuthLayout';
import { options } from '@/app/lib/auth';
import { getServerSession } from 'next-auth';
import React from 'react';

const Page = async () => {
    const session = await getServerSession(options)
    console.log("SESSION" , session);
    
    return (
        <>
            <AuthLayout>
                <SigninForm/>
            </AuthLayout>
        </>
    );
}

export default Page;
