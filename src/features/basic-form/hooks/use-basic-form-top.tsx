import { useForm } from "react-hook-form";
import {
  basicFormSchema,
  BasicFormSchemaType,
} from "@/features/basic-form/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useBasicFormTop = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicFormSchemaType>({
    resolver: zodResolver(basicFormSchema),
  });

  const onSubmit = (data: BasicFormSchemaType) => {
    console.log(data);
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
  };
};
