import { unstable_cache as nextCache } from "next/cache" //for dealing with data cache
import { cache as reactCache } from "react" //for request memoization

type Callback = (...args: any[]) => Promise<any>

export function cache<T extends Callback>(
  cb: T,
  keyParts: string[],
  options: { revalidate?: number | false; tags?: string[] } = {}
) {
  return nextCache(reactCache(cb), keyParts, options)
}
