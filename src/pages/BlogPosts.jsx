import { useEffect, useState } from "react";

import Posts from "../components/Posts";
import { getPosts } from "../util/api";
import { useLoaderData } from "react-router-dom";

let doneTransfer = true;

function BlogPostsPage() {
  const loaderData = useLoaderData();

  return (
    <>
      <h1>Our Blog Posts</h1>

      {<Posts blogPosts={loaderData} />}
    </>
  );
}

export default BlogPostsPage;

export const loader = async () => {
  const data = getPosts();
  return data;
};
