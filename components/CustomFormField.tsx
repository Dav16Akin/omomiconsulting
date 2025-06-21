import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormTypes } from "@/types";
import { FormFieldType } from "./forms/ContactForm";
import { Textarea } from "./ui/textarea";

const RenderField = ({ field, props }: { field: any; props: FormTypes }) => {
  const { placeholder, fieldType } = props;
  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <FormControl className="h-full">
          <Input
            placeholder={placeholder}
            {...field}
            className=" p-4 rounded-xl"
          />
        </FormControl>
      );
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={placeholder}
            className=" p-4 rounded-xl"
            {...field}
          />
        </FormControl>
      );
  }
};

const CustomFormField = (props: FormTypes) => {
  const { control, name, fieldType, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType && label && <FormLabel>{label}</FormLabel>}

          <RenderField field={field} props={props} />

          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
