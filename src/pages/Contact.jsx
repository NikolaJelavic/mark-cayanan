import { SocialIcon } from 'react-social-icons'

export default function Contact() {
     

    return <div className=" w-11/12 lg:w-2/5 mx-auto mt-10">

<div className="flex justify-center items-center flex-col">
        <h1 className="sm:text-2xl mt-3 sm:w-2/3 text-center">
        To touch base, just shoot me an email (mcayanan@gmail.com) or fill out the form below!
        </h1>
   
      </div>

      <form
      
        className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg my-10"
      >
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 border rounded focus:outline-none focus:border-blue-500"
           
            autoFocus
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 border rounded focus:outline-none focus:border-violet-500"
        
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold">Message</label>
          <textarea
            name="message"
            className="w-full px-4 py-2 mt-2 text-gray-800 bg-gray-100 border rounded focus:outline-none focus:border-violet-500"
           
          />
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="Send"
            className="w-full px-4 py-2 text-lg font-semibold text-white bg-pink-300 rounded hover:bg-pink-500 focus:outline-none focus:bg-blue-600"
          />
        </div>
      </form>
<br /><br /><br /><br /><br />
    {/* <h2>Socials</h2> */}
      <hr />
    <div className='w-11/12 lg:w-2/5 mx-auto mt-10 flex justify-between'>
    <SocialIcon url="https://www.instagram.com/darling_daintyfoot/" ></SocialIcon>
    <SocialIcon url="https://www.facebook.com/mcayanan" ></SocialIcon>
    <SocialIcon url="https://linktr.ee/mcayanan"></SocialIcon>
</div>
  </div>
 
}



