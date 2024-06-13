import {
    Button,
    IconCoffee,
    IconMail,
    IconMessageCircle,
    Popover,
    IconBookOpen,
    IconActivity,
    queryAi,
  } from 'ui'
  import { useRouter } from 'next/router'
  import { FC } from 'react'
  import Link from 'next/link'
  import Image from 'next/image'
  
  import SVG from 'react-inlinesvg'
import HomeLayout from '~/layouts/HomeLayout'
  
  interface Props {}
  
  const HelpPopover: FC<Props> = () => {
    const router = useRouter()
    const projectRef = router.query.ref
    const supportUrl = 'mailto:support@dijets.io'
  
    return (
      <Popover
        size="content"
        align="end"
        side="bottom"
        sideOffset={8}
        overlay={
          <div className="my-4 w-96 space-y-4">
            <div className="my-5 space-y-4 px-5">
              <h5 className="text-scale-1200">Couldnt find what you were looking for?</h5>
              <p className="text-sm text-scale-900">
                Try asking HAL over to the left or contact us directly
                with your query.
              </p>
              <div className="space-x-1">
                <Link passHref href={supportUrl}>
                  <a>
                    <Button type="default" icon={<IconMail />}>
                      Dijets Support
                    </Button>
                  </a>
                </Link>
                <Link passHref href="https://support.dijets.co.uk">
                  <a target="_blank" rel="noreferrer">
                    <Button type="text" size="tiny" icon={<IconBookOpen />}>
                      User Guides
                    </Button>
                  </a>
                </Link>
                <Link passHref href="https://dijets.statuspage.io/">
                  <a target="_blank" rel="noreferrer">
                    <Button type="text" size="tiny" icon={<IconActivity />}>
                      Status
                    </Button>
                  </a>
                </Link>
              </div>
              <p className="text-sm text-scale-900">
                Expected response time is based on your billing plan. Pro and Pay as You Go plans are
                prioritized.
              </p>
            </div>
            <Popover.Separator />
            <div className="mb-4 space-y-2">
              <div className="mb-4 px-5">
                <h5 className={'mb-2'}>Reach out to the community</h5>
  
                <p className="text-sm text-scale-900">
                  For other support, including questions on our client libraries, advice, or best
                  practices.
                </p>
              </div>
              <div className="px-5">
                <div
                  className="relative space-y-2 overflow-hidden rounded px-5 py-4 pb-12 shadow-md"
                  style={{ background: '#404EED' }}
                >
                  <a
                    href="https://redirect.dijets.io/#/#dijets-support:dijets.org"
                    target="_blank"
                    rel="noreferrer"
                    className="dark block cursor-pointer"
                  >
                    <Image
                      className="absolute left-0 top-0 opacity-50"
                      src={`${router.basePath}/img/qowalts-bg-small.png`}
                      layout="fill"
                      objectFit="cover"
                      alt="qowalts"
                    />
                    <Button
                      type="secondary"
                      icon={
                        <Image src={`${router.basePath}/img/qowalts-icon.svg`} alt="" className="h-4 w-4" />
                      }
                    >
                      <span style={{ color: '#404EED' }}>Join us on Qowalts</span>
                    </Button>
                  </a>
                </div>
              </div>
              <div className="px-5">
                <div className="relative space-y-2 overflow-hidden rounded px-5 py-4 pb-12 shadow-md">
                  <a
                    href="https://forum.dijets.io"
                    target="_blank"
                    rel="noreferrer"
                    className="block cursor-pointer"
                  >
                    <Image
                      className="absolute left-0 top-0 opacity-50"
                      src={`${router.basePath}/img/forum-bg-small.jpg`}
                      layout="fill"
                      objectFit="cover"
                      alt="forum"
                    />
                    <Button type="secondary" icon={<IconMessageCircle />}>
                      Forum Discussions
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        }
      >
        <Button
          as="span"
          type="default"
          icon={<IconCoffee size={16} strokeWidth={1.5} className="text-scale-900" />}
        >
          Lets Talk
        </Button>
      </Popover>
    )
  }
  
  export default HelpPopover
  