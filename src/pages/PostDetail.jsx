import { useState, useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";

import BlogPost from "../components/BlogPost";
import { getPost } from "../util/api";

function PostDetailPage() {
  const data = useLoaderData();
  return <BlogPost title={data.title} text={data.body} />;
}

export default PostDetailPage;

export const loader = ({ params }) => {
  const id = params.id;
  const data = getPost(id);
  return data;
};
