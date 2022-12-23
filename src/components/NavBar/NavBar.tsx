import React from 'react'
import { useRouter } from 'next/router'

import { useSpring, animated } from 'react-spring'

import {
  ActionItem,
  Actions,
  Button,
  InnerActions,
  InnerWrapper,
  RightActions,
  StyledLink,
  Title,
  Wrapper,
} from './NavBar.style'

export const defaultProperties = {
  dark: {
    circle: {
      r: 9,
    },
    mask: {
      cx: '50%',
      cy: '23%',
    },
    svg: {
      transform: 'rotate(40deg)',
    },
    lines: {
      opacity: 0,
    },
  },
  light: {
    circle: {
      r: 5,
    },
    mask: {
      cx: '100%',
      cy: '0%',
    },
    svg: {
      transform: 'rotate(90deg)',
    },
    lines: {
      opacity: 1,
    },
  },
  springConfig: { mass: 4, tension: 250, friction: 35 },
}

const NavBar = (props: NavBarProps) => {
  const { changeTheme, themeMode } = props
  const router = useRouter()
  return (
    <Wrapper data-testid='NavBar'>
      <InnerWrapper>
        <Title>
          <StyledLink href={'/'}>CRISPY PROJECTS</StyledLink>
        </Title>
        <Actions>
          <InnerActions>
            <ActionItem>
              <StyledLink href={'/'} selected={router.pathname === '/'}>
                Projects
              </StyledLink>
            </ActionItem>
            <ActionItem>
              <StyledLink href={'/'} selected={router.pathname === 'about'}>
                About
              </StyledLink>
            </ActionItem>
          </InnerActions>
          <RightActions>
            <ActionItem onClick={changeTheme}>
              {renderAnimatedIcon(changeTheme, themeMode == 'dark')}
            </ActionItem>
          </RightActions>
        </Actions>
      </InnerWrapper>
    </Wrapper>
  )
}

export default NavBar

export interface NavBarProps {
  changeTheme: () => void
  themeMode: 'light' | 'dark'
}

const renderAnimatedIcon = (
  onChange: (checked: boolean) => void,
  checked = false,
  moonColor = 'white',
  sunColor = 'black',
  size = 24,
  style?: React.CSSProperties,
) => {
  const [id, setId] = React.useState(0)
  const animationProperties = defaultProperties

  const properties = React.useMemo(() => {
    if (animationProperties !== defaultProperties) {
      return Object.assign(defaultProperties, animationProperties)
    }

    return animationProperties
  }, [animationProperties])
  const toggle = () => onChange(!checked)
  const { circle, svg, lines, mask } = properties[checked ? 'dark' : 'light']
  const svgContainerProps = useSpring({
    ...svg,
    config: animationProperties.springConfig,
  })
  const centerCircleProps = useSpring({
    ...circle,
    config: animationProperties.springConfig,
  })
  const maskedCircleProps = useSpring({
    ...mask,
    config: animationProperties.springConfig,
  })
  const linesProps = useSpring({
    ...lines,
    config: animationProperties.springConfig,
  })
  const uniqueMaskId = `circle-mask-${id}`

  return (
    <animated.svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      color={checked ? moonColor : sunColor}
      fill='none'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      stroke='currentColor'
      onClick={toggle}
      style={{
        cursor: 'pointer',
        ...svgContainerProps,
        ...style,
      }}
    >
      <mask id={uniqueMaskId}>
        <rect x='0' y='0' width='100%' height='100%' fill='white' />
        <animated.circle
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          style={maskedCircleProps}
          r='9'
          fill='black'
        />
      </mask>

      <animated.circle
        cx='12'
        cy='12'
        fill={checked ? moonColor : sunColor}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        style={centerCircleProps}
        mask={`url(#${uniqueMaskId})`}
      />
      <animated.g stroke='currentColor' style={linesProps}>
        <line x1='12' y1='1' x2='12' y2='3' />
        <line x1='12' y1='21' x2='12' y2='23' />
        <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
        <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
        <line x1='1' y1='12' x2='3' y2='12' />
        <line x1='21' y1='12' x2='23' y2='12' />
        <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
        <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
      </animated.g>
    </animated.svg>
  )
}
