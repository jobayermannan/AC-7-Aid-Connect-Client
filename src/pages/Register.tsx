import { TemplateForm } from "./TemplateForm";

const Register = () => {
	// Step 2: Prepare the props
	const formFields = [
		{ id: "name", label: "User Name", placeholder: "user name", type: "name" },
		{ id: "email", label: "Email Address", placeholder: "yourname@example.com", type: "email" },
		{ id: "password", label: "Password", placeholder: "••••••••", type: "password" }
	 ];
  
	 const buttonText = "Sign Up";
	 const loginLink = "/login"; // Assuming you want to link to a login page instead
  
  return (
	 <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 min-h-screen ">

<div className="w-full max-w-md  mt-6 sm:mt-10 sm:pt-12">
	<TemplateForm
  fields={formFields} buttonText={buttonText} loginLink={loginLink} />

	

		
	 </div>	  
	 </div>
  );
};

export default Register;