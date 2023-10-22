import { auth } from "../firebase-config";
import React from "react";
// import Markdown from "markdown-to-jsx";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import TransitionsModal from "../components/TransitionsModal";
const Home = ({ isAuth, deltePost, postList }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
      <div className=" flex flex-col gap-3 p-3 lg:p-8">
        {postList.length === 0 && (
          <div className="flex items-center justify-center min-h-screen">
            <div
              style={{ borderTopColor: "transparent" }}
              className="w-8 h-8 border-4 border-blue-600 rounded-full animate-spin"
            ></div>
            <p className="ml-2">Loading...</p>
          </div>
        )}

        {/* {postList.map((post) => (
          <div key={post.id} className="border border-black p-5 rounded">
            <Link to={`/detail/${post.id}`}>
              <div className="max-w-[400px]">
                {post.img && (
                  <img
                    className="object-fit w-full h-full"
                    src={post.img}
                    alt={post.title}
                  />
                )}
              </div>
              <h1 className="font-bold text-3xl my-5">Title: {post.title}</h1>
             
              <p className="text-red-500">Likes: {post.likes}</p>
              <p className="text-blue-500 underline">
                Author: {post.author.name}
              </p>
            </Link>
            {isAuth && post.author.id === auth.currentUser.uid && (
              <div className="flex gap-4 mb-5">
                <button
                  className="bg-red-600 px-3 py-2 rounded text-white font-semibold "
                  onClick={() => deltePost(post.id)}
                >
                  Delete
                </button>
                <Link to={`/updatepost/${post.id}`}>
                  <button className="px-3 py-2 bg-blue-500 rounded text-white font-semibold">
                    Update
                  </button>
                </Link>
              </div>
            )}
          </div>
        ))} */}

        <div className="w-full overflow-hidden rounded-lg shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                  <th className="px-4 py-3">No</th>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Author</th>
                  <th className="px-4 py-3">View</th>
                  <th className="px-4 py-3">Edit</th>
                  <th className="px-4 py-3">Delete</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                {postList.map((post, index) => (
                  <>
                    <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3">{index + 1}</td>
                      <td className="px-4 py-3">{post.title}</td>
                      <td className="px-4 py-3">{post.author.name}</td>
                      <td className="px-4 py-3 text-sm text-center cursor-pointer">
                        <Link to={`/detail/${post.id}`}>
                          <div className="px-2 py-1.5 rounded bg-yellow-500 text-white cursor-pointer">
                            View
                          </div>
                        </Link>
                      </td>
                      {isAuth && post.author.id === auth.currentUser.uid ? (
                        <>
                          <td className="px-4 py-3 text-sm text-center">
                            <Link to={`/updatepost/${post.id}`}>
                              <div className="px-2 py-1.5 rounded bg-green-600 text-white">
                                Edit
                              </div>
                            </Link>
                          </td>

                          <td className="px-4 py-3 text-sm text-center cursor-pointer">
                            <div
                              onClick={() => deltePost(post.id)}
                              className="px-2 py-1.5 rounded bg-red-600 text-white"
                            >
                              Delete
                            </div>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="px-4 py-3 text-sm text-center">
                            <div className="px-2 py-1.5 rounded bg-green-600 text-white cursor-not-allowed">
                              Edit
                            </div>
                          </td>

                          <td className="px-4 py-3 text-sm text-center ">
                            <div className="px-2 py-1.5 rounded bg-red-600 text-white cursor-not-allowed">
                              Delete
                            </div>
                          </td>
                        </>
                      )}
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"></div>
        </div>
      </div>
      {/* <Button onClick={handleOpen}>Open modal</Button>
      <TransitionsModal open={open} handleClose={handleClose} /> */}
    </>
  );
};

export default Home;
