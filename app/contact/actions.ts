'use server'

import { z } from 'zod';

//import { sendMail } from "@/lib/sendgrid";
import { sendMail } from '@/lib/nodemailer';

import { redirect } from 'next/navigation';

const schema = z.object({
    email: z.string({
        invalid_type_error: 'Invalid Email',
    }).email().min(3).max(255),
    name: z.string({
        invalid_type_error: 'Invalid Name',
    }).min(2).max(255),
    message: z.string({
        invalid_type_error: 'Invalid Message',
    }).min(2).max(1500)
});

export async function submitForm(formData: FormData){
    const validatedFields = schema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });
    if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    try{
        const rawFormData = {
            name: validatedFields.data.name,
            email: validatedFields.data.email,
            message: validatedFields.data.message,
        };
        const msg = {
            to: 'truff@blazed.work, contact@blazed.space',
            from: '"Blazed Labs LLC" <hello@blazed.space>', // Use the email address or domain you verified above
            subject: 'New Contact Message',
            text: `
        Submitted to Ruff Management (ruff-manage.com) \n
        Name: ${rawFormData.name} \n
        Reply Email: ${rawFormData.email} \n
        Message: \n 
        ${rawFormData.message} \n
            `,
        };
        const result = await sendMail(msg);
        return redirect('/success');
    } catch (error) {

    }
}