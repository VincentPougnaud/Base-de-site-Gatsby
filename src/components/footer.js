import React from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <footer>
      <WrapperFooter>
        <div className="wrapperFooterCli"></div>
        <div className="wrapperDev">
          © {new Date().getFullYear()}, Création
          {` `}
          <a href="https://www.mvdev.fr">MVDev</a>
        </div>
      </WrapperFooter>
    </footer>
  )
}

const WrapperFooter = styled.div`
  .wrapperDev {
    text-align: center;
    padding: 2rem 0 0 0;
  }
`

export default Footer
