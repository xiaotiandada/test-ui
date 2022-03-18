import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Length, Min, IsEmail } from 'class-validator';

type Inputs = {
  example: string,
  exampleRequired: string,
  username: string
};

class User {
  @Length(2, 30)
  username: string;

  @IsEmail()
  email: string;
}

const resolver = classValidatorResolver(User);

function ClassValidator() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({ resolver });

  console.log('errors', errors)

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input type="text" {...register('username')} />
      {errors.username && <span>{errors.username.message}</span>}
      <input type="text" {...register('email')} />
      {errors.email && <span>{errors.email.message}</span>}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default function APP() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log('onSubmit', data);

  console.log('watch', watch("example")) // watch input value by passing the name of it
  console.log('errors', errors)

  return (
    <>
      <h2>react-hook-form class-validator</h2>
      <ClassValidator />
      <h2>react-hook-form</h2>
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="test" {...register("example")} />

        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input {...register("username", { required: 'required username' })} />
        {/* errors will return when field validation fails  */}
        {errors.username && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
}