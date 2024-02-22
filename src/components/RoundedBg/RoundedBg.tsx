function RoundedBg({ color }: { color: string; class: string }) {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 1280 308'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <mask
        id='mask0_3651_16487'
        // style='mask-type:alpha'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='1280'
        height='308'
      >
        <rect width='1280' height='308' fill='#D9D9D9' />
      </mask>
      <g mask='url(#mask0_3651_16487)'>
        <circle cx='640.648' cy='-1489.53' r='1794.85' fill={color} />
      </g>
    </svg>
  )
}

export default RoundedBg
