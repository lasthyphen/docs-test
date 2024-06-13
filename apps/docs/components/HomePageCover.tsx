import Link from 'next/link'
import { IconBackground, IconPanel, IconCpu } from 'ui'
import { useBreakpoint } from 'common'
import DocsCoverLogo from './DocsCoverLogo'

const HomePageCover = (props) => {
  const isXs = useBreakpoint(639)
  const iconSize = isXs ? 'sm' : 'lg'

  const GettingStarted = () => (
    <div
      className="
        border border-scale-400 bg-scale-200
        relative overflow-hidden
        grid grid-cols-12
        rounded-lg
        p-5 md:p-8
        "
    >
      <div className="col-span-full flex flex-col md:flex-row xl:flex-col justify-between gap-1 md:gap-6">
        <div className="md:max-w-xs xl:max-w-none">
          <div className="flex items-center gap-3 mb-3">
            <IconBackground>
              <IconCpu className="text-brand-1100 dark:text-brand-900 w-4" />
            </IconBackground>
            <h3 className="text-xl m-0">Dijetal Toolbox</h3>
          </div>
          <p className="text-scale-1100 text-sm">
            Developer toolchains to deploy DApps & smart contracts on Dijets.
          </p>
        </div>
        <div className="flex flex-wrap md:grid md:grid-cols-4 gap-3 sm:gap-3">
          <Link href={`/guides/developer-toolchains/foundry-dijets-uc`} passHref>
            <a className="no-underline">
              <IconPanel
                iconSize={iconSize}
                hideArrow
                tooltip="Foundry"
                icon="/docs/img/icons/foundry-icon"
              />
            </a>
          </Link>
          <Link href={`/guides/developer-toolchains/hardhat-dijets-uc`} passHref>
            <a className="no-underline">
              <IconPanel
                iconSize={iconSize}
                hideArrow
                tooltip="Hardhat"
                icon="/docs/img/icons/hardhat-icon"
              />
            </a>
          </Link>
          <Link href={`/guides/developer-toolchains/truffle-dijets-uc`} passHref>
            <a className="no-underline">
              <IconPanel
                iconSize={iconSize}
                hideArrow
                tooltip="Truffle"
                icon="/docs/img/icons/truffle-icon"
              />
            </a>
          </Link>
          <Link href={`/guides/developer-toolchains/verify-smart-contracts-with-explorer`} passHref>
            <a className="no-underline">
              <IconPanel
                iconSize={iconSize}
                hideArrow
                tooltip="Contract Verifier"
                icon="/docs/img/icons/explorer-icon"
              />
            </a>
          </Link>
          <Link href={`/guides/developer-toolchains/verify-smart-contracts-with-sourcify`} passHref>
            <a className="no-underline">
              <IconPanel
                iconSize={iconSize}
                hideArrow
                tooltip="Sourcify"
                icon="/docs/img/icons/sourcify-icon"
              />
            </a>
          </Link>
          <Link href={`https://dijets.io/manifesto`} passHref>
            <a className="no-underline">
              <IconPanel
                iconSize={iconSize}
                hideArrow
                tooltip="Decypher"
                icon="/docs/img/icons/decypher-icon"
              />
            </a>
          </Link>
          <Link href={`https://dmms.dijets.io`} passHref>
            <a className="no-underline">
              <IconPanel
                iconSize={iconSize}
                hideArrow
                tooltip="DMMs"
                icon="/docs/img/icons/dmms-icon"
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <div className="w-full bg-scale-100 border-b dark:border-[#2c2c2c7a] prose dark:prose-dar max-w-none mb-16 md:mb-12 xl:mb-0 relative">
    <div className="sc-c3c5ba47-7 kIlNMj top-[30%] lg:-top-[10%]"></div>
      <div className="max-w-7xl px-5 mx-auto py-8 sm:pb-16 sm:pt-12 xl:pt-16 flex flex-col xl:flex-row justify-between gap-12 xl:gap-12">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center w-full max-w-xl">
          <DocsCoverLogo />
          <div className="flex flex-col">
            <h1 className="m-0 mb-3 text-2xl sm:text-3xl">{props.meta?.title}</h1>
            <p className="m-0 text-sm text-scale-900">
           Dijets Documentation covers the fundamentals of Dijets architecture and platform, its tech stack, public & private APIs, toolchains & much more.
            </p>
          </div>
        </div>
        <div className="w-full xl:max-w-[324px] lg:max-w-[324px] max-w-[300px] -mb-40 mr-auto ml-auto lg:mr-0 z-[5]">
          <GettingStarted />
        </div>
      </div>
    </div>
  )
}

export default HomePageCover