import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";
import { useAppliedFormTop } from "@/features/applied-form/hooks";
import { Controller } from "react-hook-form";

const foods = ["寿司", "カレー", "ピザ", "その他"];

export const AppliedFormTop = () => {
  const { register, onSubmit, errors, trigger, control } = useAppliedFormTop();
  return (
    <Container mt={12}>
      <Heading as={"h2"} mb={8}>
        応用的なフォーム
      </Heading>
      <form onSubmit={onSubmit}>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel htmlFor={"name"}>名前</FormLabel>
          <Input type={"text"} id={"name"} {...register("name")} />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mt={8}>
          <FormLabel htmlFor={"age"}>年齢</FormLabel>
          <Input type={"text"} id={"age"} {...register("age")} />
        </FormControl>

        <FormControl isInvalid={!!errors.password} mt={8}>
          <FormLabel htmlFor={"password"}>パスワード</FormLabel>
          <Input
            type={"password"}
            id={"password"}
            {...register("password")}
            onBlur={() => trigger("password")}
          />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl mt={8}>
          <FormLabel>好きな食べ物</FormLabel>
          <Controller
            name="foods"
            control={control}
            render={({ field }) => {
              return (
                <CheckboxGroup {...field}>
                  {foods.map((food) => {
                    return (
                      <Checkbox key={food} value={food} mr={8}>
                        {food}
                      </Checkbox>
                    );
                  })}
                </CheckboxGroup>
              );
            }}
          />
        </FormControl>

        <FormControl isInvalid={!!errors.other} mt={8}>
          <FormLabel htmlFor={"other"}>その他の好きな食べ物</FormLabel>
          <Input type={"text"} id={"other"} {...register("other")} />
          <FormErrorMessage>
            {errors.other && errors.other.message}
          </FormErrorMessage>
        </FormControl>

        <Button type="submit" mt={8}>
          送信
        </Button>
      </form>
    </Container>
  );
};
