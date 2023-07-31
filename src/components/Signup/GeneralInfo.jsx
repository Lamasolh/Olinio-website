import React from 'react';
import classes from './GeneralInfo.module.css';
import InputRegistration from '../UI/InputRegistration/InputRegistration';
import RadioButton from '../UI/Buttons/RadioButton';

const GeneralInfo = ({
  getSignUpinfo,
  user_type,
  company_type,
  number,
  amountOfDebt,
  file,
}) => {
  const handleChange = e => {
    getSignUpinfo(e.target.name, e.target.value);
  };

  return (
    <section className={classes.generalInfo}>
      <RadioButton
        title='Are you a creditor or debtor?'
        label='Creditor'
        name='user_type'
        defaultValue={user_type}
        onChange={handleChange}
        input={{
          type: 'radio',
          id: 'creditor',
          name: 'user_type',
          value: 'cred',
        }}
        label2='Deptor'
        input2={{
          type: 'radio',
          id: 'deptor',
          name: 'user_type',
          value: 'dept',
        }}
      />
      <RadioButton
        title='Are you an individual or a company?'
        label='Individual'
        name='company_type'
        defaultValue={company_type}
        onChange={handleChange}
        input={{
          type: 'radio',
          id: 'individual',
          name: 'company_type',
          value: 'ind',
        }}
        label2='Company'
        input2={{
          type: 'radio',
          id: 'company',
          name: 'company_type',
          value: 'comp',
        }}
      />
      <RadioButton
        title='How many people do you owe money to ?'
        label='1 person'
        name='number'
        defaultValue={number}
        onChange={handleChange}
        input={{
          type: 'radio',
          id: 'one',
          name: 'number',
          value: 'one',
        }}
        label2='2 or more people'
        input2={{
          type: 'radio',
          id: 'more',
          name: 'number',
          value: 'more',
        }}
      />

      <InputRegistration
        label='What is the total amount of your debt?'
        name='amountOfDebt'
        defaultValue={amountOfDebt}
        onChange={handleChange}
        input={{
          type: 'number',
          placeholder: '1312312321',
        }}
      />
    </section>
  );
};

export default GeneralInfo;
