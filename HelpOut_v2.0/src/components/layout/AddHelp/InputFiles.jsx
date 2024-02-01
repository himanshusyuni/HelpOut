import { Input } from "@/components/ui/input"

export function InputFile() {
  return (
    <div className="grid flex w-full items-center gap-1.5">
      <Input id="documents" type="file" />
    </div>
  )
}