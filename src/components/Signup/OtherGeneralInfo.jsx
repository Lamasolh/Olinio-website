import React from "react";
import InputRegistration from "../UI/InputRegistration/InputRegistration";

const OtherGeneralInfo = ({ getSignUpinfo, fullName, countryOfRes, region, street, phone_Number }) => {
  const handleChange = (e) => {
    getSignUpinfo(e.target.name, e.target.value)
  }

  return (
    <React.Fragment>
      <InputRegistration
        label='Full Name'
        name='fullName'
        defaultValue={fullName}
        onChange={handleChange}
        input={{
          type: "text",
          placeholder: "John Smith",
        }}
      />
      <InputRegistration
        label='Country of residence'
        name='countryOfRes'
        defaultValue={countryOfRes}
        onChange={handleChange}
        input={{
          type: "select",
          placeholder: "Australia",
        }}
      />
      <InputRegistration
        label='Region'
        name='region'
        defaultValue={region}
        onChange={handleChange}
        input={{
          type: "text",
          placeholder: "Lasnor",
        }}
      />
      <InputRegistration
        label='Street'
        name='street'
        defaultValue={street}
        onChange={handleChange}
        input={{
          type: "text",
          placeholder: "Lasnor Street",
        }}
      />
      <InputRegistration
        label='Phone Number'
        name='phone_Number'
        defaultValue={phone_Number}
        onChange={handleChange}
        input={{
          type: "number",
          placeholder: "(02) 9876 5432",
        }}
      />
    </React.Fragment>
  );
};

export default OtherGeneralInfo;
