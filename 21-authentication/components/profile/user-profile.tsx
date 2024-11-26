import ProfileForm from "@/components/profile/profile-form";
import classes from "./user-profile.module.css";

function UserProfile() {
  // const [isLoading, setIsLoading] = useState(true);
  //
  // useEffect(() => {
  //   getSession().then((session: Session | null) => {
  //     if (!session) {
  //       window.location.href = "/auth";
  //     } else {
  //       setIsLoading(false);
  //     }
  //   });
  // }, []);
  //
  // if (isLoading) {
  //   return <p className={classes.profile}>Loading...</p>;
  // }

  async function changePasswordHandler(passwordData: {
    oldPassword: string | undefined;
    newPassword: string | undefined;
  }) {
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler} />
    </section>
  );
}

export default UserProfile;
