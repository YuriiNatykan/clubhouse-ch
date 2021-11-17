import React from 'react';
import clsx from 'clsx';
import { WhiteBlock } from '../../WhiteBlock';
import { StepInfo } from '../../StepInfo';
import { Button } from '../../Button';
import Axios from '../../../core/axios';

import styles from './EnterPhoneStep.module.scss';
import { useRouter } from 'next/dist/client/router';

export const EnterCodeStep = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(true)
  const [codes, setCodes] = React.useState(['','','','']);

  const nextDisabled = codes.some((v) => !v);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(event.target.getAttribute('id'));
    const value = event.target.value;
    setCodes((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
    //фокус на следующий элемент (если он существует)
    if (event.target.nextSibling) {
      (event.target.nextSibling as HTMLInputElement).focus();
    }
  };

  const onSubmit = async () => {
    try{
      setIsLoading(true);
    await Axios.get('/todos');
    router.push('/rooms')
    } catch (error) {
      alert('Ошибка при активации!')
    }
    setIsLoading(false);
  }
  

  return (
    <div className={styles.block}>
     
        {isLoading ? (
          <>
          <StepInfo icon='/static/numbers.png' title='Enter your activate code' />
        <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
          <div className={clsx('mb-30', styles.codeInput)}>
            {codes.map((code, index) => (
              <input
                key={index}
                type='tel'
                placeholder='X'
                maxLength={1}
                id={String(index)}
                onChange={handleChangeInput}
                value={code}
              />
            ))}
          </div>
          <Button onClick={onSubmit} disabled={nextDisabled}>
            Next
            <img src='/static/arrow.svg' alt='' className='d-ib ml-10' />
          </Button>
        </WhiteBlock>
      </>
      )

      : (<div className='text-center'>
        <div className='loader'></div>
        <h3 className='mt-5'>Activation in progress ...</h3>
      </div>) }
    </div>
  );
};