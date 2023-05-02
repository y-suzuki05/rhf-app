import { useForm } from "react-hook-form";
import {
  appliedFormSchema,
  AppliedFormSchemaType,
} from "@/features/applied-form/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const useAppliedFormTop = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppliedFormSchemaType>({
    resolver: zodResolver(appliedFormSchema),
  });

  const onSubmit = (data: AppliedFormSchemaType) => {
    console.log(data);
  };

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
  };
};
