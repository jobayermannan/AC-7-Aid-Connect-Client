import { TemplateForm } from "./TemplateForm";

const Login = () => {
  return (
    // Use flex and flex-col for a vertical layout. Adjust padding and margin for smaller screens.
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 min-h-screen ">
      
      {/* Adjust top padding and top margin dynamically based on screen size */}
      <div className="w-full max-w-md  mt-6 sm:mt-10 sm:pt-12">
        <TemplateForm></TemplateForm>
      </div>
      
    </div>
  );
};

export default Login;