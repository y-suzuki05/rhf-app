import {
  Container,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";
import { useAppliedFormTop } from "../hooks";

export const AppliedFormTop = () => {
  const { register, onSubmit, errors } = useAppliedFormTop();
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
          <Input type={"password"} id={"password"} {...register("password")} />
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <Button type="submit" mt={8}>
          送信
        </Button>
      </form>
    </Container>
  );
};
