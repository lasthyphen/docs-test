import { useRouter } from 'next/router'
import { memo, useEffect } from 'react'
import { menuState, useMenuLevelId } from '~/hooks/useMenuState'
import NavigationMenuHome from './HomeMenu'
import NavigationMenuGuideList from './NavigationMenuGuideList'
import NavigationMenuRefList from './NavigationMenuRefList'

interface BaseMenu {
  id: string
  path: string
  type: string
}

interface HomeMenu extends BaseMenu {
  type: 'home'
}

interface GuideMenu extends BaseMenu {
  type: 'guide'
}

interface ReferenceMenu extends BaseMenu {
  type: 'reference'
  commonSectionsFile: string
  specFile?: string
}

type Menu = HomeMenu | GuideMenu | ReferenceMenu

const menus: Menu[] = [
  {
    id: 'home',
    path: '/',
    type: 'home',
  },
  {
    id: 'gettingstarted',
    path: '/guides/getting-started',
    type: 'guide',
  },
  {
    id: 'nodeapis',
    path: '/guides/node-apis',
    type: 'guide',
  },
  {
    id: 'nodes',
    path: '/guides/nodes',
    type: 'guide',
  },
  {
    id: 'dijetsjs',
    path: '/guides/dijetsjs',
    type: 'guide',
  },
  {
    id: 'developer_toolchains',
    path: '/guides/developer-toolchains',
    type: 'guide',
  },
]

function getMenuById(id: string) {
  return menus.find((menu) => menu.id === id)
}

function getMenuByUrl(basePath: string, url: string) {
  // If multiple matches, choose the menu with the longest path
  const [menu] = menus
    .filter(({ path }) => url.startsWith(`${basePath}${path}`))
    .sort((a, b) => b.path.length - a.path.length)

  return menu
}

function getMenuElement(menu: Menu) {
  const menuType = menu.type
  switch (menuType) {
    case 'home':
      return <NavigationMenuHome />
    case 'guide':
      return <NavigationMenuGuideList id={menu.id} />
    default:
      throw new Error(`Unknown menu type '${menuType}'`)
  }
}

const NavigationMenu = () => {
  const router = useRouter()

  function handleRouteChange(url: string) {
    const menu = getMenuByUrl(router.basePath, url)
    if (menu) {
      menuState.setMenuLevelId(menu.id)
    }
  }

  useEffect(() => {
    handleRouteChange(router.basePath + router.asPath)
    // Listen for page changes after a navigation or when the query changes
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const level = useMenuLevelId()
  const menu = getMenuById(level)

  return getMenuElement(menu)
}

export default memo(NavigationMenu)
