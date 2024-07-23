import { Loader2 } from "lucide-react";

//avoid caching by forcing all admin pages to be dynamic
export const dynamic = "force-dynamic"

export default function AdminLoading() {
    return <div className="flex justify-center">
        <Loader2 className="size-24 animate-spin" />
    </div>
}