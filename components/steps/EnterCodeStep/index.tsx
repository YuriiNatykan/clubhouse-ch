import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { WhiteBlock } from '../../WhiteBlock';
import { StepInfo } from '../../StepInfo';

import styles from './EnterPhoneStep.module.scss';

export const EnterCodeStep = () => {
  const [inputValue, setInputValue] = React.useState({});

  const nextDisabled = !inputValue.formattedValue || inputValue.formatedValue.includes

    return (
    <div className={styles.block}>
                <StepInfo icon="/static/numbers.png" title="Enter your activate code" />
          <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
            <div className={styles.codeInput}>
              {codes.map((code, index) => (
                <input
                  key={index}
                  type="tel"
                  placeholder="X"
                  maxLength={1}
                  id={String(index)}
                  onChange={handleChangeInput}
                  value={code}
                />
              ))}
            </div>
          </WhiteBlock>

    </div>
  );
};
