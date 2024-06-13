import React from 'react'
import {
  IconMenuApi,
  IconMenuAuth,
  IconMenuCli,
  IconMenuCsharp,
  IconMenuDatabase,
  IconMenuEdgeFunctions,
  IconMenuFlutter,
  IconMenuGettingStarted,
  IconMenuApii,
  IconMenuHome,
  IconMenuIntegrations,
  IconMenuJavascript,
  IconMenuPlatform,
  IconMenuPython,
  IconMenuRealtime,
  IconMenuResources,
  IconMenuSelfHosting,
  IconMenuTool,
  IconMenuTerminal,
  IconMenuRadio,
  IconMenuBlock,
  IconMenuServerlessApis,
  IconMenuStorage,
  IconMenuSwift,
  IconMenuFile,
  IconMenuStatus,
  IconMenuKotlin,
  IconMenuAI,
  IconMenuPostman,
  IconMenuSerials,
} from './HomeMenuIcons'

function getMenuIcon(menuKey: string, width: number = 16, height: number = 16) {
  switch (menuKey) {
    case 'home':
      return <IconMenuHome width={width} height={height} />
    case 'getting-started':
      return <IconMenuGettingStarted width={width} height={height} />
    case 'node-apis':
      return <IconMenuAuth width={width} height={height} />
    case 'nodes':
      return <IconMenuAI width={width} height={height} />
    case 'dijetsjs':
        return <IconMenuEdgeFunctions width={width} height={height} />
    case 'database':
      return <IconMenuDatabase width={width} height={height} />
    case 'serverless-apis':
      return <IconMenuServerlessApis width={width} height={height} />
    case 'terminal':
      return <IconMenuTerminal width={width} height={height} />
    case 'postman':
      return <IconMenuPostman width={width} height={height} />
    case 'block':
      return <IconMenuBlock width={width} height={height} />
    case 'radio':
     return <IconMenuApi width={width} height={height} />
    case 'auth':
      return <IconMenuAuth width={width} height={height} />
    case 'dapps':
        return <IconMenuFile width={width} height={height} />
    case 'edge-functions':
      return <IconMenuEdgeFunctions width={width} height={height} />
    case 'realtime':
      return <IconMenuRealtime width={width} height={height} />
    case 'storage':
      return <IconMenuStorage width={width} height={height} />
    case 'tool':
        return <IconMenuTool width={width} height={height} />
    case 'ai':
      return <IconMenuAI width={width} height={height} />
    case 'public-apii':
    return <IconMenuApii width={width} height={height} />
    case 'platform':
      return <IconMenuPlatform width={width} height={height} />
    case 'nodes':
        return <IconMenuPlatform width={width} height={height} />
    case 'resources':
      return <IconMenuResources width={width} height={height} />
    case 'self-hosting':
      return <IconMenuSelfHosting width={width} height={height} />
    case 'serialisation':
        return <IconMenuSerials width={width} height={height} />
    case 'integrations':
      return <IconMenuIntegrations width={width} height={height} />
    case 'reference-javascript':
      return <IconMenuJavascript width={width} height={height} />
    case 'reference-dart':
      return <IconMenuFlutter width={width} height={height} />
    case 'reference-python':
      return <IconMenuPython width={width} height={height} />
    case 'reference-csharp':
      return <IconMenuCsharp width={width} height={height} />
    case 'reference-swift':
      return <IconMenuSwift width={width} height={height} />
    case 'reference-kotlin':
      return <IconMenuKotlin width={width} height={height} />
    case 'reference-api':
      return <IconMenuApi width={width} height={height} />
    case 'reference-cli':
      return <IconMenuCli width={width} height={height} />
    case 'status':
      return <IconMenuStatus width={width} height={height} />
    default:
      return <IconMenuPlatform width={width} height={height} />
  }
}

type HomeMenuIconPickerProps = {
  icon: string
  width?: number
  height?: number
}

export default function HomeMenuIconPicker({
  icon,
  width = 16,
  height = 16,
}: HomeMenuIconPickerProps) {
  return getMenuIcon(icon, width, height)
}
