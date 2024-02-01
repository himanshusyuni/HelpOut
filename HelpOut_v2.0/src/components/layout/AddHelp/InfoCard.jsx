import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Info } from 'lucide-react';


export function InfoCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Info />
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">Disclaimer</h4>
            <p className="text-sm">
              These documents will be available to whovever accepts. Please do not attach any sensitive information.
            </p>
            <div className="flex items-center pt-2">
              <span className="text-xs text-muted-foreground">
                Jk jo daalna hai daalo
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
