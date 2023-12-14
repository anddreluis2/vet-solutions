"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  companyStatus: z.enum(["yes", "no", "selfEmployed"]),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});

export default function FormExample() {
  const { register, handleSubmit, control, formState } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome</label>
        <input {...register("name")} />
      </div>

      <div>
        <label>E-mail</label>
        <input {...register("email")} />
      </div>
      <div>
        <label>Você possui empresa formalizada?</label>
        <div>
          <label>
            <input type="radio" value="yes" {...register("companyStatus")} />
            Sim
          </label>
        </div>
        <div>
          <label>
            <input type="radio" value="no" {...register("companyStatus")} />
            Não
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="selfEmployed"
              {...register("companyStatus")}
            />
            Sou autônomo
          </label>
        </div>
      </div>
      <div>
        <button type="submit" disabled={formState.isSubmitting}>
          Enviar
        </button>
      </div>
    </form>
  );
}
