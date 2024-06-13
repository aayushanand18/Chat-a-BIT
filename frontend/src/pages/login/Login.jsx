

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="p-6 w-full bg-purple-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100">
            <h1 className="text-3xl font-semibold text-center text-orange-500">
                Login 
                <span className="text-red-500"> Chat-a-BIT</span>
            </h1>
            <form action="">
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text text-black">Username</span>
                    </label>
                    <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text text-black">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
                </div>
                <a href="#" className="text-sm hover:underline text-gray-800 hover:text-red-600 mt-2 inline-block">{"Don't have an account?"}</a>
                <div>
                    <button className="btn btn-block btn-sm mt-2">Login</button>
                </div>


            </form>
        </div>



    </div>
  )
}

export default Login;



// STARTER CODE FOR THIS FILE:
// const Login = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//           <div className="p-6 w-full bg-purple-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 border border-gray-100">
//               <h1 className="text-3xl font-semibold text-center text-orange-500">
//                   Login 
//                   <span className="text-red-500"> Chat-a-BIT</span>
//               </h1>
//               <form action="">
//                   <div>
//                       <label className="label p-2">
//                           <span className="text-base label-text text-black">Username</span>
//                       </label>
//                       <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
//                   </div>
//                   <div>
//                       <label className="label">
//                           <span className="text-base label-text text-black">Password</span>
//                       </label>
//                       <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
//                   </div>
//                   <a href="#" className="text-sm hover:underline text-gray-800 hover:text-red-600 mt-2 inline-block">{"Don't have an account?"}</a>
//                   <div>
//                       <button className="btn btn-block btn-sm mt-2">Login</button>
//                   </div>
  
  
//               </form>
//           </div>
  
  
  
//       </div>
//     )
//   }
  
//   export default Login;

