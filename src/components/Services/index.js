import React from 'react'
import Icon1 from '../../images/friendship.svg'
import Icon2 from '../../images/people.svg'
import Icon3 from '../../images/remote.svg'

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1> Our Services </ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2> Reduce Expenses </ServicesH2>
          <ServicesP> We Help You</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2}/>
          <ServicesH2> Reduce Expenses </ServicesH2>
          <ServicesP> We Help You</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2> Reduce Expenses </ServicesH2>
          <ServicesP> We Help You</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services