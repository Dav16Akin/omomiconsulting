"use client";

import { ContactFormValidation } from "@/lib/validations/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import CustomFormField from "../CustomFormField";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import CustomButton from "../shared/CustomButton";
import { useState } from "react";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
}

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof ContactFormValidation>>({
    resolver: zodResolver(ContactFormValidation),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof ContactFormValidation>) {
    setIsLoading(true);
    try {
      form.reset()
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-8 w-full">
        <div className="text-center">
          <span className="sub-header">CONTACT US</span>
          <h1>Our Team Will Respond</h1>
        </div>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="name"
          label="Name"
          placeholder="Enter your name"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="email"
          label="Email"
          placeholder="me@yourmail.com"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="subject"
          label="Subject"
          placeholder="Enter the title of your message here..."
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.TEXTAREA}
          name="message"
          label="Message"
          placeholder="Type your message here."
        />

        <div className="flex flex-col items-center">
          <CustomButton
            isLoading={isLoading}
            type="submit"
            text={"Submit"}
            arrow={false}
            classname="w-full"
          />
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
