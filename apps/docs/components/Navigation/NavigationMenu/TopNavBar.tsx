import { useTheme } from 'common/Providers'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import {
  Button,
  IconCommand,
  IconMenu,
  IconMoon,
  IconSearch,
  IconSun,
  Listbox,
  SearchButton,
} from 'ui'

const TopNavBar: FC = () => {
  const { isDarkMode, toggleTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { asPath, push } = useRouter()
  const pathSegments = asPath.split('/')

  const library = pathSegments.length >= 3 ? pathSegments[2] : undefined

  useEffect(() => {
    setMounted(true)
  }, [isDarkMode])


  // [Joshen] Kaizen: Use UI library's SidePanel for this
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    const sidebar = document.querySelector('.sidebar-menu-container')
    const contentPane = document.querySelector('.main-content-pane')

    sidebar.classList.toggle('hidden')
    contentPane.classList.toggle('hidden')
  }

  return (
    <nav className="h-[60px] border-b px-4 backdrop-blur backdrop-filter bg-white-1200 bg-scale-200/90">
      <div className="max-w-[1400px] grid grid-cols-12 mx-auto gap-4 px-5 h-full">
        <div className="col-span-3 flex items-center">
          <button className="mr-4 block stroke-2 lg:hidden" onClick={toggleMobileMenu}>
            <IconMenu className="text-scale-1100" />
          </button>
          {mounted && (
            <Link href="/">
              <a className="flex items-center">
                <Image
                  className="cursor-pointer"
                  src={isDarkMode ? 'https://whitelist.dijets.io/dijets-dark.svg' : 'https://whitelist.dijets.io/dijets-light.svg'}
                  width={124}
                  height={24}
                  alt="Dijets Logo"
                />
              </a>
            </Link>
          )}
        </div>
        <div className="col-span-5 flex items-center">
          <div className="max-w-xl grow">
            <SearchButton className="w-full">
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
              border-scale-500 pl-3 pr-1.5 w-full h-[32px] rounded"
              >
                <div className="flex items-center space-x-2">
                  <IconSearch className="text-scale-1100" size={18} strokeWidth={2} />
                  <p className="text-scale-1100 text-sm group-hover:text-scale-1200 transition">
                    Search docs...
                  </p>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="text-scale-1200 md:flex items-center justify-center h-5 w-10 border rounded bg-scale-500 border-scale-700 gap-1">
                    <IconCommand size={12} strokeWidth={1.5} />
                    <span className="text-[12px]">K</span>
                  </div>
                </div>
              </div>
            </SearchButton>
          </div>
        </div>
        <div className="col-span-4 flex items-center justify-end gap-3">
          <Button
            type="outline"
            as="a"
            // @ts-ignore
            href="https://dijets.io"
            className="text-scale-1100 text-sm"
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
export default TopNavBar