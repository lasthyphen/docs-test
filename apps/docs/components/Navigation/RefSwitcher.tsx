import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Badge, Dropdown, GlassPanel, IconChevronDown, IconChevronRight, Popover } from 'ui'


const RefSwitcher = () => {
  const router = useRouter()
  const [currentRef, setCurrentRef] = useState()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [router.pathname])

  return (
    <div className="px-10 flex items-center -space-x-px">
    </div>
  )
}

const VersionOverlay = () => {
  return (
    <>
      <Dropdown.Label>Stable releases</Dropdown.Label>
      <Dropdown.Item>
        version 2.0
        <Dropdown.RightSlot>
          <Badge size="small">Latest</Badge>
        </Dropdown.RightSlot>
      </Dropdown.Item>
      <Dropdown.Item>Version 1.0 </Dropdown.Item>
      <Dropdown.Separator />
      <Dropdown.Label>Alpha releases</Dropdown.Label>
      <Dropdown.Misc>
        <p className="text-scale-900 text-xs">Currently no alpha releases</p>
      </Dropdown.Misc>
    </>
  )
}
export default RefSwitcher
