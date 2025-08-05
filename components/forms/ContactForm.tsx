"use client";

import { ContactFormValidation } from "@/lib/validations/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import CustomFormField from "../CustomFormField";
import { Form } from "../ui/form";
import { useForm } from "react-hook-form";
import CustomButton from "../shared/CustomButton";
import { useState } from "react";
import { useRouter } from "next/navigation";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
}

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof ContactFormValidation>>({
    resolver: zodResolver(ContactFormValidation),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ContactFormValidation>) {
    setIsLoading(true);
    try {
      const response = await fetch("/api/send-confirmation", {
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          subject: values.subject,
          message: values.message,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to send email");
      }

      // console.log("Emails sent successfully:", result);

      form.reset();
      router.push("/contact/success");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 lg:p-16 p-8 w-full"
      >
        <div className="text-center lg:text-left">
          <span className="sub-header lg:text-2xl">CONTACT US</span>
          <h1 className="lg:text-5xl text-3xl">Our Team Will Respond</h1>
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

        <div className="flex flex-col items-center lg:items-start">
          <CustomButton
            isLoading={isLoading}
            type="submit"
            text={"Submit"}
            arrow={false}
          />
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
