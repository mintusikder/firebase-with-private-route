import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
  const { google } = useAuth();
  return (
    <>
      <div className="divider ml-8 mr-8">Continue With</div>
      <div className="">
        <button
          className="btn btn-primary btn-outline ml-8 mb-4"
          onClick={() => google()}
        >
          Google
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
