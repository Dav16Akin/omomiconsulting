import { FormFieldType } from "@/components/forms/ContactForm";

declare type FormTypes = {
  control: Control<any>;
  name: string;
  label: string;
  placeholder: string;
  fieldType: FormFieldType;
};

declare type ButtonProps = {
  text: string;
  classname?: string;
  arrow: boolean;
  type?: "submit" | "normal";
  isLoading?: boolean;
};
