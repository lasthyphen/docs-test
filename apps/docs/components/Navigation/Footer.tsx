import Link from 'next/link'
import { Button } from 'ui'
import { primaryLinks, secondaryLinks } from '../../data/footer'
import { LayoutMainContent } from '../../layouts/DefaultLayout'

const Footer = () => (
  <LayoutMainContent className="pt-0">
    <div className="mt-16">
      <ul className="flex flex-col gap-2">
        {primaryLinks.map(({ url, featherIcon: Icon, icon, text, ctaLabel }) => (
          <li key={url} className="flex items-center gap-1 text-xs text-scale-900">
            {icon && (
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={icon}
                  stroke="var(--colors-scale9)"
                  strokeWidth={0.7}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            {Icon && <Icon width={16} height={16} />}
            <p>{text}</p>
            <Link href={url} passHref>
              <a
                className="text-brand-900 hover:underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                {ctaLabel}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <hr className="border-scale-400 my-6"></hr>
    <div className="flex gap-4 items-center justify-between">
      <div className="flex flex-col lg:flex-row gap-3 ">
        <Link href="https://dijets.io/">
          <a className="text-xs text-scale-900">&copy; Dijets Inc</a>
        </Link>
        <span className="text-xs text-scale-900">—</span>
        {secondaryLinks.map((item) => (
          <Link href={item.url} key={item.url}>
            <a className="text-xs text-scale-800 hover:underline">{item.title}</a>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Button
          type="text"
          as="a"
          // @ts-ignore
          href="https://github.com/Dijets-Inc"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.66832 1.55469C4.98649 1.55469 2.00195 4.54402 2.00195 8.23269C2.00195 11.1827 3.91187 13.686 6.56108 14.5687C6.8944 14.63 7.01573 14.424 7.01573 14.2467C7.01573 14.0887 7.0104 13.668 7.00706 13.1114C5.15248 13.5147 4.76116 12.216 4.76116 12.216C4.45851 11.444 4.0212 11.2387 4.0212 11.2387C3.41589 10.8254 4.06719 10.8334 4.06719 10.8334C4.73583 10.88 5.08782 11.5214 5.08782 11.5214C5.68246 12.5414 6.64841 12.2467 7.02773 12.076C7.08906 11.6447 7.26105 11.3507 7.45171 11.184C5.97178 11.0154 4.41518 10.442 4.41518 7.88335C4.41518 7.15469 4.67517 6.55802 5.10115 6.09135C5.03248 5.92269 4.80383 5.24335 5.16648 4.32469C5.16648 4.32469 5.72645 4.14469 6.99973 5.00869C7.54355 4.86036 8.10464 4.78482 8.66832 4.78402C9.23496 4.78669 9.80494 4.86069 10.3376 5.00869C11.6102 4.14469 12.1688 4.32402 12.1688 4.32402C12.5328 5.24335 12.3035 5.92269 12.2355 6.09135C12.6621 6.55802 12.9208 7.15469 12.9208 7.88335C12.9208 10.4487 11.3615 11.0134 9.87694 11.1787C10.1163 11.3847 10.3289 11.792 10.3289 12.4154C10.3289 13.3074 10.3209 14.028 10.3209 14.2467C10.3209 14.4254 10.4409 14.6334 10.7796 14.568C12.107 14.1228 13.261 13.2716 14.0784 12.1347C14.8958 10.9979 15.3353 9.6329 15.3347 8.23269C15.3347 4.54402 12.3495 1.55469 8.66832 1.55469Z"
              fill="var(--colors-scale9)"
            />
          </svg>
        </Button>
        <Button
          type="text"
          as="a"
          // @ts-ignore
          href="https://support.dijets.co.uk/docs/create-wallet/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.665 4.35595C15.481 3.66308 14.9388 3.11739 14.2505 2.93221C13.0028 2.5957 7.99964 2.5957 7.99964 2.5957C7.99964 2.5957 2.99655 2.5957 1.74883 2.93221C1.06047 3.11742 0.518326 3.66308 0.334321 4.35595C0 5.61181 0 8.23207 0 8.23207C0 8.23207 0 10.8523 0.334321 12.1082C0.518326 12.8011 1.06047 13.324 1.74883 13.5092C2.99655 13.8457 7.99964 13.8457 7.99964 13.8457C7.99964 13.8457 13.0027 13.8457 14.2505 13.5092C14.9388 13.324 15.481 12.8011 15.665 12.1082C15.9993 10.8523 15.9993 8.23207 15.9993 8.23207C15.9993 8.23207 15.9993 5.61181 15.665 4.35595ZM6.36334 10.6111V5.85307L10.545 8.23212L6.36334 10.6111Z"
              fill="var(--colors-scale9)"
            />
          </svg>
        </Button>
        <Button
          type="text"
          as="a"
          // @ts-ignore
          href="https://twitter.com/OfficialDijets"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.52713 13.7223C10.5582 13.7223 13.3101 9.55365 13.3101 5.93898C13.3101 5.82032 13.3101 5.70232 13.3021 5.58565C13.8375 5.198 14.2996 4.71806 14.6667 4.16832C14.1675 4.38965 13.6378 4.53483 13.0955 4.59898C13.6665 4.25702 14.0939 3.71922 14.2981 3.08565C13.7612 3.40424 13.1739 3.6288 12.5615 3.74965C12.1491 3.31083 11.6035 3.02021 11.0093 2.92279C10.4151 2.82537 9.80528 2.92658 9.27438 3.21076C8.74347 3.49494 8.32106 3.94623 8.07255 4.49476C7.82403 5.04328 7.76328 5.65844 7.89969 6.24498C6.81213 6.19048 5.74819 5.90787 4.77693 5.4155C3.80567 4.92313 2.9488 4.232 2.26194 3.38698C1.91217 3.98912 1.80502 4.70193 1.96231 5.38029C2.1196 6.05866 2.52951 6.65157 3.10857 7.03832C2.67343 7.02572 2.2477 6.90865 1.86729 6.69698V6.73165C1.86755 7.36318 2.08621 7.97519 2.4862 8.46389C2.88618 8.95259 3.44287 9.28791 4.06186 9.41298C3.65909 9.52279 3.2365 9.53876 2.82658 9.45965C3.00135 10.0033 3.34168 10.4787 3.79996 10.8194C4.25824 11.1601 4.81154 11.349 5.38247 11.3597C4.81524 11.8054 4.16572 12.1349 3.47104 12.3293C2.77636 12.5238 2.05017 12.5794 1.33398 12.493C2.585 13.2959 4.04066 13.7217 5.52713 13.7197"
              fill="var(--colors-scale9)"
            />
          </svg>
        </Button>
        <Button
          type="text"
          as="a"
          // @ts-ignore
          href="https://qowalts.dijets.io"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1182_99731)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.514,5.458c0-1.634,1.331-2.958,2.972-2.958h6.112c1.641,0,2.972,1.324,2.972,2.958v6.083c0,1.634-1.331,2.958-2.972,2.958H5.486c-1.641,0-2.972-1.324-2.972-2.958V5.458Zm3.866-.138h-1.31c-.045,0-.067,.023-.067,.068v2.602c0,.045,.022,.068,.067,.068h.994c.042,0,.059,.011,.056,.055-.005,.077-.005,.154-.008,.232-.017,.405-.223,.703-.544,.929-.155,.109-.339,.15-.522,.186-.031,.006-.043,.018-.043,.05,0,.321,0,.642,0,.963,0,.037,.013,.049,.048,.044,.089-.011,.179-.019,.267-.03,.423-.057,.832-.163,1.21-.368,.457-.248,.79-.61,.993-1.087,.175-.41,.239-.841,.24-1.282,.002-.789,0-1.58,.002-2.369,0-.049-.016-.06-.062-.06-.44,.002-.88,0-1.321,0h0Z"
                fill="var(--colors-scale9)"
              />
            </g>
            <defs>
              <clipPath id="clip0_1182_99731">
                <rect
                  width="15.9993"
                  height="16"
                  fill="white"
                  transform="translate(0.333984 0.222656)"
                />
              </clipPath>
            </defs>
          </svg>
        </Button>
      </div>
    </div>
  </LayoutMainContent>
)

export default Footer