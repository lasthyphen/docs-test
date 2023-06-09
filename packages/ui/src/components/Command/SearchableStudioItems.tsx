import { CommandGroup } from './Command.utils'
import SearchOnlyItem from './SearchOnlyItem'
import { useRouter } from 'next/router'

import sharedItems from './utils/shared-nav-items.json'

export default function SearchableStudioItems() {
  const router = useRouter()

  return (
    <CommandGroup heading="Find">
    </CommandGroup>
  )
}
