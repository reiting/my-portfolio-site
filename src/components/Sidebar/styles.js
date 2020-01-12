import styled from 'styled-components'
import { SideNav } from 'carbon-components-react/lib/components/UIShell'

//hides the sidebar when in mobile view
export const StyledSideNav = styled(SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
`