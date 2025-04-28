import React from "react"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "../ui/input"
import { cn } from "@/lib/tailwindUtils"
import { Path, UseFormReturn } from "react-hook-form"

type FormTextBoxType<T extends Record<string, any>> = {
  form: UseFormReturn<T>
  type: string
  label: string
  name: Path<T>
  labelClassName?: string
  inputClassName?: string
}

const FormTextBox = <T extends Record<string, any>>({
  name,
  form,
  type,
  label,
  labelClassName,
  inputClassName,
}: FormTextBoxType<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className={cn("block mt-8", labelClassName)}>{label}</FormLabel>
          <FormControl>
            <Input className={cn("mt-1", inputClassName)} type={type} {...field} />
          </FormControl>
          <FormMessage /> {/* フォーム固有エラー表示 */}
        </FormItem>
      )}
    />
  )
}

export { FormTextBox }
