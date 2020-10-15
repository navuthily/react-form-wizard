import * as React from "react";

import { Field } from "@progress/kendo-react-form";

import { FormInput, FormUpload } from "./form-components.jsx";

import {
  userNameValidator,
  emailValidator,

} from "./validators.jsx";

export const AccountDetails = (
  <div>
    <Field
      key={"userName"}
      id={"userName"}
      name={"userName"}
      label={"Username"}
      component={FormInput}
      validator={userNameValidator}
    />
    <Field
      key={"email"}
      id={"email"}
      name={"email"}
      label={"Email"}
      hint={"Hint: Enter your personal email address."}
      type={"email"}
      component={FormInput}
      validator={emailValidator}
    />
    
  </div>
);
