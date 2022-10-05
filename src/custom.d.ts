declare module '*.png'

declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
  const src: React.SFC<React.SVGProps<SVGSVGElement>>
  export default src
}
