import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
  const { google, github } = useAuth();
  return (
    <>
      <div className="divider ml-8 mr-8">Continue With</div>
      <div className="flex justify-around">
        <button
          className="btn btn-primary btn-sm btn-outline  mb-4"
          onClick={() => google()}
        >
          Google
        </button>
        <button
          className="btn btn-primary btn-sm btn-outline  mb-4"
          onClick={() => github()}
        >
          github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
