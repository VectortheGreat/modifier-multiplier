"use client"
import type { Control, FieldValues } from "react-hook-form"
import { Controller } from "react-hook-form"
type InputProps<T extends FieldValues> = {
  label: string
  formName: keyof T
  control: Control<T>
} & React.HTMLProps<HTMLTextAreaElement>

export default function Input<T extends FieldValues>(props: InputProps<T>) {
  return (
    <div className="flex flex-col gap-5 w-full">
      <Controller<FieldValues>
        name={props.formName as string}
        control={props.control as unknown as Control<FieldValues>}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <label className="block text-white">{props.label}</label>
            <textarea
              className="text-black"
              onChange={onChange}
              value={value}
              {...props}
            />
            {error && <span className="text-red-500">{error.message}</span>}
          </>
        )}
      />
    </div>
  )
}
