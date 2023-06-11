import React from 'react'

interface AiIconProps {
  className?: string
}

export const AiIcon = ({ className = 'text-brand-900' }: AiIconProps) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={16}
  height={16}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth={2}
  strokeLinecap="round"
  strokeLinejoin="round"
  className="feather feather-activity"
>
  <path d="M22 12L18 12 15 21 9 3 6 12 2 12" />
</svg>
)

export const AiIconChat = () => (
  <div
    className="w-7 h-7
    bg-gradient-to-r from-brand-900 to-brand-800

    ring-brand-600
    ring-1

    rounded-md border border-brand-400 flex items-center justify-center
    shadow-sm
    "
  >
  <svg
  width={18}
  height={18}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M3.809 5.992c.034.035.093.067.097.106.043.37.274.62.558.82 2.59 1.833 5.181 3.664 7.782 5.482.628.44 1.125.414 1.745-.022 1.415-.996 2.83-1.993 4.243-2.992.8-.568 1.385-1.304 1.69-2.236.108-.327.149-.673.193-.886 0 .813.061 1.755-.014 2.688-.093 1.15-.673 2.096-1.597 2.777a209.717 209.717 0 01-4.681 3.325c-.51.354-1.052.261-1.553-.063a44.444 44.444 0 01-1.522-1.028c-2.068-1.466-4.132-2.94-6.2-4.407-.354-.251-.634-.55-.697-.997 0-.73.004-1.462.002-2.192 0-.055-.032-.111-.05-.166v-.209h.004z"
    fill="#fff"
  />
  <path
    d="M3.807 11.738c.032.023.09.041.093.065.045.414.324.665.632.888 1.188.864 2.368 1.736 3.57 2.58 1.33.937 2.676 1.85 4.016 2.768.768.527 1.194.529 1.962-.008 1.36-.951 2.715-1.916 4.075-2.869.81-.567 1.425-1.289 1.743-2.228.118-.348.167-.721.294-1.084-.034 1.011-.004 2.03-.123 3.033-.126 1.072-.718 1.95-1.588 2.586-1.528 1.123-3.085 2.206-4.638 3.292-.545.381-1.1.268-1.62-.079a80.24 80.24 0 01-2.014-1.374c-1.91-1.356-3.814-2.72-5.721-4.08-.34-.244-.584-.55-.637-.978.002-.74.006-1.48.004-2.22 0-.046-.032-.093-.05-.14v-.156l.002.004zM7.596 5.718c.044-.05.067-.089.101-.113.825-.576 1.634-1.172 2.48-1.715.875-.562 1.84-.892 2.896-.89.985 0 1.88.314 2.688.851.392.26.77.548 1.12.864.56.51.62 1.419.171 2.031-.099.136-.204.146-.334.059-.182-.122-.363-.245-.547-.36-1.87-1.173-3.74-1.16-5.61 0-.297.184-.591.374-.893.549-.061.034-.177.048-.23.014-.583-.385-1.16-.783-1.737-1.178-.034-.024-.059-.063-.107-.116l.002.004z"
    fill="#fff"
  />
</svg>
  </div>
)
