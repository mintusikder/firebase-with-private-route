import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SocialLogin = () => {
  const { google, github, twitter, facebook } = useAuth();
  //navigate 
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state || "/";
  const handelSocialLogin = (socialProvider) => {
    socialProvider().then((result) => {
      if (result.user) {
        navigate(form);
      }
    });
  };
  return (
    <>
      <div className="divider ml-8 mr-8">Continue With</div>
      <div className="flex justify-around">
        <button
          className="btn btn-primary btn-sm btn-outline  mb-4"
          onClick={() => handelSocialLogin(google)}
        >
          Google
        </button>
        <button
          className="btn btn-primary btn-sm btn-outline  mb-4"
          onClick={() => handelSocialLogin(github)}
        >
          github
        </button>
        <button
          className="btn btn-primary btn-sm btn-outline  mb-4"
          onClick={() => handelSocialLogin(twitter)}
        >
          Twitter
        </button>
        <button
          className="btn btn-primary btn-sm btn-outline  mb-4"
          onClick={() => handelSocialLogin(facebook)}
        >
          Facebook
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
