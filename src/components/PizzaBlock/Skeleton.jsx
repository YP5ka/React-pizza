import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="5" y="75" rx="0" ry="0" width="17" height="1" /> 
    <rect x="0" y="262" rx="10" ry="10" width="253" height="22" /> 
    <rect x="0" y="301" rx="8" ry="8" width="253" height="95" /> 
    <rect x="0" y="416" rx="10" ry="10" width="99" height="32" /> 
    <rect x="119" y="408" rx="25" ry="25" width="138" height="46" /> 
    <circle cx="125" cy="125" r="125" />
  </ContentLoader>
)

export default Skeleton