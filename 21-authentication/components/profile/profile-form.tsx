import { FormEvent, useRef } from "react";

import classes from "./profile-form.module.css";

type ProfileFormProps = {
  onChangePassword: (data: {
    oldPassword: string | undefined;
    newPassword: string | undefined;
  }) => void;
};

function ProfileForm(props: ProfileFormProps) {
  const oldPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: FormEvent) {
    event.preventDefault();

    const enteredOldPassword = oldPasswordRef.current?.value;
    const enteredNewPassword = newPasswordRef.current?.value;

    // optional: Add validation

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
