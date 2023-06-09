import React from 'react'
import { LazyMotion, domAnimation, m } from 'framer-motion'

const DocsCoverLogo = () => {
  const pathMotionConfig = {
    initial: { pathLength: 0 },
    animate: { pathLength: 1 },
    transition: {
      duration: 1,
      delay: 0.2,
      ease: [0.5, 0.11, 0.13, 1],
    },
  }
  const logoMotionConfig = {
    initial: { fillOpacity: 0 },
    animate: { fillOpacity: 1 },
    transition: {
      duration: 1,
      delay: 0.5,
      ease: [0.25, 0.25, 0, 1],
    },
  }

  return (
    <div className="w-[80px] md:w-[120px] [&_svg]">
      <LazyMotion features={domAnimation}>
        <m.svg
          width="100%"
          height="100%"
          viewBox="0 0 250 228"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            d="M124.951 5.03906V224.602"
            stroke="url(#paint0_radial_0_1)"
            stroke-opacity="0.5"
            stroke-width="0.7"
          />
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            d="M125.25 191.383C167.828 191.383 202.344 156.867 202.344 114.289C202.344 71.7115 167.828 37.1953 125.25 37.1953C82.6724 37.1953 48.1562 71.7115 48.1562 114.289C48.1562 156.867 82.6724 191.383 125.25 191.383Z"
            stroke="var(--colors-scale11)"
            stroke-opacity="0.1"
            stroke-width="0.7"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            d="M33.7782 58.8377C48.6666 58.8377 60.7361 46.7682 60.7361 31.8798C60.7361 16.9913 48.6666 4.92188 33.7782 4.92188C18.8898 4.92188 6.82031 16.9913 6.82031 31.8798C6.82031 46.7682 18.8898 58.8377 33.7782 58.8377Z"
            stroke="url(#paint1_linear_0_1)"
            stroke-opacity="0.5"
            stroke-width="0.7"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            d="M33.7782 223.664C48.6666 223.664 60.7361 211.594 60.7361 196.706C60.7361 181.817 48.6666 169.748 33.7782 169.748C18.8898 169.748 6.82031 181.817 6.82031 196.706C6.82031 211.594 18.8898 223.664 33.7782 223.664Z"
            stroke="url(#paint2_linear_0_1)"
            stroke-opacity="0.5"
            stroke-width="0.7"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            d="M216.724 58.8377C231.612 58.8377 243.681 46.7682 243.681 31.8798C243.681 16.9913 231.612 4.92188 216.724 4.92188C201.835 4.92188 189.766 16.9913 189.766 31.8798C189.766 46.7682 201.835 58.8377 216.724 58.8377Z"
            stroke="url(#paint3_linear_0_1)"
            stroke-opacity="0.5"
            stroke-width="0.7"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            d="M216.724 223.664C231.612 223.664 243.681 211.594 243.681 196.706C243.681 181.817 231.612 169.748 216.724 169.748C201.835 169.748 189.766 181.817 189.766 196.706C189.766 211.594 201.835 223.664 216.724 223.664Z"
            stroke="url(#paint4_linear_0_1)"
            stroke-opacity="0.5"
            stroke-width="0.7"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M209.29 226.982H40.6907C18.7665 226.982 1 209.51 1 187.949V40.0333C1 18.4722 18.7665 1 40.6907 1H209.29C231.214 1 248.981 18.4722 248.981 40.0333V187.969C248.981 209.51 231.214 226.982 209.29 226.982Z"
            stroke="url(#paint5_linear_0_1)"
            stroke-opacity="0.5"
            stroke-width="0.7"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M216.724 223.903H33.7779C18.719 223.903 6.5 211.684 6.5 196.625V31.9576C6.5 16.8987 18.719 4.67969 33.7779 4.67969H216.724C231.782 4.67969 244.001 16.8987 244.001 31.9576V196.625C244.001 211.704 231.802 223.903 216.724 223.903Z"
            stroke="url(#paint6_linear_0_1)"
            stroke-opacity="0.5"
            stroke-width="0.7"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            d="M60.7578 30.9199V197.027"
            stroke="url(#paint7_linear_0_1)"
            stroke-opacity="0.5"
            stroke-width="0.7"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            d="M125.252 5.01953V223.562"
            stroke="url(#paint8_radial_0_1)"
            stroke-opacity="0.5"
            stroke-width="0.7"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            d="M149.809 4.83984L13.5996 178.866"
            stroke="url(#paint9_linear_0_1)"
            stroke-opacity="0.5"
            stroke-width="0.7"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            d="M239.679 46.457L99.5703 223.643"
            stroke="url(#paint10_linear_0_1)"
            stroke-opacity="0.5"
            stroke-width="0.7"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            d="M189.766 30.9199V197.027"
            stroke="url(#paint11_linear_0_1)"
            stroke-opacity="0.5"
            stroke-width="0.7"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            d="M218.024 58.7344H32.498"
            stroke="url(#paint12_radial_0_1)"
            stroke-width="0.7"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            d="M6.76172 95.4141H243.743"
            stroke="url(#paint13_linear_0_1)"
            stroke-opacity="0.5"
            stroke-width="0.7"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            d="M6.76172 131.869H243.743"
            stroke="url(#paint14_linear_0_1)"
            stroke-opacity="0.5"
            stroke-width="0.7"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            d="M218.024 169.846H32.498"
            stroke="var(--colors-scale11)"
            stroke-opacity="0.1"
            stroke-width="0.7"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <m.path
            initial={pathMotionConfig.initial}
            animate={pathMotionConfig.animate}
            transition={pathMotionConfig.transition as any}
            d="M126.559 4.6867L126.559 224.254"
            stroke="url(#paint15_linear_0_1)"
            stroke-opacity="0.5"
            stroke-width="0.7"
            stroke-miterlimit="10"
            stroke-linejoin="bevel"
          />
          <g filter="url(#filter0_d_0_1)">
            <m.path
              initial={logoMotionConfig.initial}
              animate={logoMotionConfig.animate}
              transition={logoMotionConfig.transition as any}
              d="M67,74.039c.235,.239,.646,.459,.676,.721,.292,2.558,1.891,4.276,3.834,5.65,17.841,12.62,35.685,25.234,53.591,37.762,4.324,3.027,7.754,2.851,12.022-.149,9.751-6.857,19.495-13.724,29.225-20.611,5.518-3.905,9.541-8.981,11.646-15.409,.734-2.243,1.017-4.632,1.325-6.098,0,5.6,.416,12.092-.106,18.509-.642,7.911-4.628,14.435-10.994,19.132-10.605,7.825-21.419,15.373-32.238,22.904-3.518,2.45-7.245,1.808-10.691-.43-3.534-2.296-7.041-4.639-10.478-7.076-14.244-10.095-28.452-20.24-42.684-30.351-2.438-1.733-4.364-3.78-4.798-6.877,.01-5.031,.028-10.063,.015-15.094-.001-.382-.225-.764-.345-1.145v-1.44Zm0,40.141c.224,.15,.628,.281,.646,.453,.311,2.853,2.229,4.575,4.354,6.121,8.177,5.949,16.312,11.958,24.578,17.781,9.153,6.447,18.424,12.727,27.66,19.057,5.292,3.627,8.228,3.642,13.512-.053,9.373-6.554,18.688-13.19,28.055-19.754,5.583-3.911,9.814-8.876,12.008-15.349,.815-2.403,1.146-4.968,2.025-7.464-.242,6.967-.033,13.985-.847,20.885-.872,7.392-4.947,13.429-10.929,17.823-10.524,7.73-21.242,15.199-31.947,22.683-3.751,2.623-7.576,1.844-11.154-.538-4.66-3.102-9.309-6.225-13.873-9.464-13.155-9.336-26.264-18.736-39.392-28.11-2.346-1.676-4.024-3.779-4.388-6.73,.016-5.098,.039-10.195,.033-15.292,0-.323-.223-.646-.342-.968,0-.361,0-.721,0-1.081Zm26.097-41.465c.305-.346,.462-.614,.694-.776,5.676-3.96,11.253-8.075,17.075-11.812,6.025-3.867,12.678-6.138,19.956-6.126,6.784,.011,12.937,2.159,18.517,5.87,2.697,1.794,5.307,3.774,7.7,5.949,3.869,3.516,4.269,9.778,1.191,13.987-.688,.941-1.403,1.002-2.306,.401-1.254-.834-2.497-1.683-3.772-2.482-12.877-8.071-25.756-7.984-38.631,.01-2.046,1.27-4.072,2.575-6.156,3.78-.419,.242-1.218,.337-1.576,.101-4.018-2.655-7.985-5.386-11.958-8.108-.238-.163-.404-.43-.734-.794Z"
              fill="url(#paint16_linear_0_1)"
              fill-opacity="0.7"
              shape-rendering="sharpEdges"
            />
            <m.path
              initial={pathMotionConfig.initial}
              animate={pathMotionConfig.animate}
              transition={pathMotionConfig.transition as any}
              d="M67,74.039c.235,.239,.646,.459,.676,.721,.292,2.558,1.891,4.276,3.834,5.65,17.841,12.62,35.685,25.234,53.591,37.762,4.324,3.027,7.754,2.851,12.022-.149,9.751-6.857,19.495-13.724,29.225-20.611,5.518-3.905,9.541-8.981,11.646-15.409,.734-2.243,1.017-4.632,1.325-6.098,0,5.6,.416,12.092-.106,18.509-.642,7.911-4.628,14.435-10.994,19.132-10.605,7.825-21.419,15.373-32.238,22.904-3.518,2.45-7.245,1.808-10.691-.43-3.534-2.296-7.041-4.639-10.478-7.076-14.244-10.095-28.452-20.24-42.684-30.351-2.438-1.733-4.364-3.78-4.798-6.877,.01-5.031,.028-10.063,.015-15.094-.001-.382-.225-.764-.345-1.145v-1.44Zm0,40.141c.224,.15,.628,.281,.646,.453,.311,2.853,2.229,4.575,4.354,6.121,8.177,5.949,16.312,11.958,24.578,17.781,9.153,6.447,18.424,12.727,27.66,19.057,5.292,3.627,8.228,3.642,13.512-.053,9.373-6.554,18.688-13.19,28.055-19.754,5.583-3.911,9.814-8.876,12.008-15.349,.815-2.403,1.146-4.968,2.025-7.464-.242,6.967-.033,13.985-.847,20.885-.872,7.392-4.947,13.429-10.929,17.823-10.524,7.73-21.242,15.199-31.947,22.683-3.751,2.623-7.576,1.844-11.154-.538-4.66-3.102-9.309-6.225-13.873-9.464-13.155-9.336-26.264-18.736-39.392-28.11-2.346-1.676-4.024-3.779-4.388-6.73,.016-5.098,.039-10.195,.033-15.292,0-.323-.223-.646-.342-.968,0-.361,0-.721,0-1.081Zm26.097-41.465c.305-.346,.462-.614,.694-.776,5.676-3.96,11.253-8.075,17.075-11.812,6.025-3.867,12.678-6.138,19.956-6.126,6.784,.011,12.937,2.159,18.517,5.87,2.697,1.794,5.307,3.774,7.7,5.949,3.869,3.516,4.269,9.778,1.191,13.987-.688,.941-1.403,1.002-2.306,.401-1.254-.834-2.497-1.683-3.772-2.482-12.877-8.071-25.756-7.984-38.631,.01-2.046,1.27-4.072,2.575-6.156,3.78-.419,.242-1.218,.337-1.576,.101-4.018-2.655-7.985-5.386-11.958-8.108-.238-.163-.404-.43-.734-.794Z"
              stroke="url(#paint17_linear_0_1)"
              stroke-width="1"
              stroke-miterlimit="10"
              stroke-linejoin="bevel"
              shape-rendering="sharpEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_0_1"
              x="58.6515"
              y="46.8027"
              width="137.062"
              height="141.703"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4.38364" />
              <feGaussianBlur stdDeviation="2.19182" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(125.451 114.82) rotate(90) scale(109.781 0.5)"
            >
              <stop stop-color="var(--colors-scale11)" stop-opacity="0.5" />
              <stop offset="1" stop-color="var(--colors-scale10)" stop-opacity="0" />
            </radialGradient>
            <linearGradient
              id="paint1_linear_0_1"
              x1="38.9975"
              y1="58.9958"
              x2="18.999"
              y2="11.9994"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--colors-scale11)" stop-opacity="0.5" />
              <stop offset="1" stop-color="var(--colors-scale10)" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_0_1"
              x1="43.9971"
              y1="168.986"
              x2="32.998"
              y2="204.984"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--colors-scale11)" stop-opacity="0.5" />
              <stop offset="1" stop-color="var(--colors-scale10)" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_0_1"
              x1="221.943"
              y1="58.9958"
              x2="231.981"
              y2="13.9993"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--colors-scale11)" stop-opacity="0.5" />
              <stop offset="1" stop-color="var(--colors-scale10)" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_0_1"
              x1="203.983"
              y1="168.986"
              x2="215.943"
              y2="204.984"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--colors-scale11)" stop-opacity="0.5" />
              <stop offset="1" stop-color="var(--colors-scale10)" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_0_1"
              x1="121.402"
              y1="227.645"
              x2="121.402"
              y2="-7.94661"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--colors-scale10)" stop-opacity="0" />
              <stop offset="0.489583" stop-color="var(--colors-scale11)" stop-opacity="0.5" />
              <stop offset="1" stop-color="var(--colors-scale10)" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_0_1"
              x1="121.814"
              y1="224.545"
              x2="121.814"
              y2="-3.99932"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--colors-scale10)" stop-opacity="0" />
              <stop offset="0.489583" stop-color="var(--colors-scale11)" stop-opacity="0.5" />
              <stop offset="1" stop-color="var(--colors-scale10)" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear_0_1"
              x1="60.7578"
              y1="30.3703"
              x2="60.7578"
              y2="199.061"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--colors-scale10)" stop-opacity="0.1" />
              <stop offset="0.505208" stop-color="var(--colors-scale11)" stop-opacity="0.5" />
              <stop offset="1" stop-color="var(--colors-scale10)" stop-opacity="0.1" />
            </linearGradient>
            <radialGradient
              id="paint8_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(125.752 114.291) rotate(90) scale(109.271 0.5)"
            >
              <stop stop-color="var(--colors-scale11)" stop-opacity="0.5" />
              <stop offset="1" stop-color="var(--colors-scale10)" stop-opacity="0" />
            </radialGradient>
            <linearGradient
              id="paint9_linear_0_1"
              x1="6.99856"
              y1="0"
              x2="200"
              y2="6.31757"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--colors-scale11)" stop-opacity="0.3" />
              <stop offset="1" stop-color="var(--colors-scale10)" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint10_linear_0_1"
              x1="200"
              y1="100"
              x2="0"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--colors-scale11)" stop-opacity="0.3" />
              <stop offset="1" stop-color="var(--colors-scale10)" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint11_linear_0_1"
              x1="189.766"
              y1="30.3703"
              x2="189.766"
              y2="199.061"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--colors-scale10)" stop-opacity="0.1" />
              <stop offset="0.505208" stop-color="var(--colors-scale11)" stop-opacity="0.5" />
              <stop offset="1" stop-color="var(--colors-scale10)" stop-opacity="0.1" />
            </linearGradient>
            <radialGradient
              id="paint12_radial_0_1"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(125.261 59.2344) rotate(90) scale(0.5 263.749)"
            >
              <stop stop-color="var(--colors-scale11)" stop-opacity="0.5" />
              <stop offset="1" stop-color="var(--colors-scale10)" stop-opacity="0" />
            </radialGradient>
            <linearGradient
              id="paint13_linear_0_1"
              x1="6.99998"
              y1="94.9749"
              x2="242.982"
              y2="94.9749"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--colors-scale10)" stop-opacity="0.5" />
              <stop offset="0.505208" stop-color="var(--colors-scale11)" stop-opacity="0.5" />
              <stop offset="1" stop-color="var(--colors-scale10)" stop-opacity="0.5" />
            </linearGradient>
            <linearGradient
              id="paint14_linear_0_1"
              x1="6.99998"
              y1="131.43"
              x2="242.982"
              y2="131.43"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--colors-scale10)" stop-opacity="0.5" />
              <stop offset="0.505208" stop-color="var(--colors-scale11)" stop-opacity="0.5" />
              <stop offset="1" stop-color="var(--colors-scale10)" stop-opacity="0.5" />
            </linearGradient>
            <linearGradient
              id="paint15_linear_0_1"
              x1="126.559"
              y1="224.98"
              x2="126.559"
              y2="1.99785"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="var(--colors-scale10)" stop-opacity="0.1" />
              <stop offset="0.505208" stop-color="var(--colors-scale11)" stop-opacity="0.5" />
              <stop offset="1" stop-color="var(--colors-scale10)" stop-opacity="0.1" />
            </linearGradient>
            <linearGradient
              id="paint16_linear_0_1"
              x1="155.11"
              y1="46.8027"
              x2="126.979"
              y2="206.049"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#212121" />
              <stop offset="1" stop-color="white" stop-opacity="0.12" />
            </linearGradient>
            <linearGradient
              id="paint17_linear_0_1"
              x1="191.328"
              y1="82.7684"
              x2="103.041"
              y2="175.889"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#868585" />
              <stop offset="0.208333" stop-color="#838383" />
              <stop offset="1" stop-color="#5A5A5A" />
            </linearGradient>
          </defs>
        </m.svg>
      </LazyMotion>
    </div>
  )
}

export default DocsCoverLogo