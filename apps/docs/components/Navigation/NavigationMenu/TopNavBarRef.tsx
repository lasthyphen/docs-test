import { useTheme } from 'common/Providers'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { IconHal } from './HomeMenuIcons'
import HelpPopover from './HelpOver'
import { Button, IconCommand, IconGitHub, IconMoon, IconSearch, IconSun, SearchButton } from 'ui'

import { getPageType } from '~/lib/helpers'
import { dijetsjs, references } from './NavigationMenu.constants'

const TopNavBarRef: FC = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { asPath, push } = useRouter()
  const pathSegments = asPath.split('/')

  const library = pathSegments.length >= 3 ? pathSegments[2] : undefined
  const libraryMeta = references?.[library] ?? undefined
  const versions = libraryMeta?.versions ?? []

  const version = versions.includes(pathSegments[pathSegments.indexOf(library) + 1])
    ? pathSegments[pathSegments.indexOf(library) + 1]
    : versions[0]

  const pageType = getPageType(asPath)

  useEffect(() => {
    setMounted(true)
  }, [isDarkMode])

  const pageLinks = [
    { text: 'Guides', key: 'docs', link: '/' },
    { text: 'Reference', key: 'reference', link: '/reference' },
  ]

  const onSelectVersion = (version: string) => {
    // [Joshen] Ideally we use <Link> but this works for now
    if (!library) return
    if (version === versions[0]) {
      push(`/reference/${library}`)
    } else {
      push(`/reference/${library}/${version}`)
    }
  }

  // [Joshen] Kaizen: Use UI library's SidePanel for this
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    const sidebar = document.querySelector('.sidebar-menu-container')
    const contentPane = document.querySelector('.main-content-pane')

    sidebar.classList.toggle('hidden')
    contentPane.classList.toggle('hidden')
  }

  return (
    <nav className="h-[60px] border-b backdrop-blur backdrop-filter bg-white-1200 dark:bg-scale-200/90">
      <div className="px-5 max-w-7xl mx-auto flex gap-3 justify-between items-center h-full">
        <div className={['lg:hidden'].join(' ')}>
          <Link href="/">
            <a className=" flex items-center gap-2">
              <Image
                className="cursor-pointer"
                src={isDarkMode ? '/docs/dijets-dark.svg' : '/docs/dijets-light.svg'}
                width={96}
                height={24}
                alt="Dijets Logo"
              />
              <span className="font-mono text-sm font-medium text-brand-900">DOCS</span>
            </a>
          </Link>
          {/* {router.asPath.includes('/reference/') && <RefSwitcher />} */}
        </div>

        <div className="flex items-center gap-6">
          <SearchButton className="md:w-full lg:w-96 order-2 lg:order-1">
            <div
              className="
              flex
              group
              items-center
              justify-between
              bg-scaleA-200
              border
              transition
              hover:border-scale-600
              hover:bg-scaleA-300
              border-scale-500 pl-1.5 md:pl-3 pr-1.5 w-full h-[32px] rounded"
            >
              <div className="flex items-center space-x-2">
                <IconHal />
                <p className="hidden md:flex text-[#8585857d] text-[0.7em] tracking-[0.04em] group-hover:text-[#858585b8] transition">
                  ASK HAL ANYTHING ABOUT DIJETS...
                </p>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <div className="text-[#858585b8] md:flex items-center justify-center h-5 w-10 border rounded bg-scale-500 border-scale-700 gap-1">
                  <IconCommand size={12} strokeWidth={1.5} />
                  <span className="text-[11px] text-[#858585b8]">K</span>
                </div>
              </div>
            </div>
          </SearchButton>
        </div>
        <div className="hidden lg:flex grow items-center justify-end gap-3">
        <HelpPopover />
          <Button
            type="text"
            as="a"
            // @ts-ignore
            href="https://forum.dijets.io"
            target="_blank"
            rel="noreferrer noopener"
          >
           Forum
          </Button>
          <ul className="flex items-center">
            <li className="px-4">
              <div className="cursor-pointer" onClick={() => toggleTheme()}>
                {isDarkMode ? (
                  <IconMoon
                    size={16}
                    strokeWidth={1}
                    className="text-scale-1100 hover:text-scale-1200 transition"
                  />
                ) : (
                  <IconSun
                    size={16}
                    strokeWidth={1}
                    className="text-scale-1100 hover:text-scale-1200 transition"
                  />
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default TopNavBarRef
