import React from 'react'
import { EnterNameStep } from '../components/steps/EnterNameStep';
import { WelcomeStep } from '../components/steps/WelcomeStep';
import { TwitterStep } from '../components/steps/TwitterStep';
import { ChooseAvatarStep } from '../components/steps/ChooseAvatarStep';
import { EnterPhoneStep } from '../components/steps/EnterPhoneStep';

const stepsComponents= {
  0: WelcomeStep,
  1: EnterNameStep,
  2: TwitterStep,
  3: ChooseAvatarStep,
  4:EnterPhoneStep
}


export default function Home() {
  const [step, setStep] = React.useState<number>(4);
const Step = stepsComponents[step];

  return (
    <div>
      <Step/>
    </div>
  );
}
