import { Input } from "@/components/ui/input"

export function InputFile() {
  return (
    <div className="grid flex w-full items-center gap-1.5">
    <Input type="file" id="file" name="file" multiple />
    </div>
  )
}