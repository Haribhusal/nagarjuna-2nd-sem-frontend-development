import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function RegisterPage() {

  const registerSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters")
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema)
  })

  const onSubmit = async (data) => {
    console.log(data)
  }
  return (
    <div className="py-10">
      <div className="container max-w-xl mx-auto">
        <h3 className="text-2xl font-bold mb-5">Register Now</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="p-5 border">
          <div className="flex flex-col">
            <label htmlFor="">Full Name</label>
            <input placeholder="Enter your name" type="text" {...register('name')} />

            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

    </div>
  )
}