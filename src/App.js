import {
  RouterProvider,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import BlogLayout from "./pages/BlogLayout";
import BlogPostsPage, { loader as blogLoader } from "./pages/BlogPosts";
import NewPostPage, { action } from "./pages/NewPost";
import PostDetailPage, { loader as postBlogLoader } from "./pages/PostDetail";
import RootLayout from "./components/RootLayout";
import WelcomePage from "./pages/Welcome";
import ErrorPage from "./pages/ErrorPage";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<WelcomePage />} />
      <Route path="/blog" element={<BlogLayout />}>
        <Route index element={<BlogPostsPage />} loader={blogLoader} />
        <Route
          path=":id"
          element={<PostDetailPage />}
          loader={postBlogLoader}
        />
      </Route>
      <Route path="/blog/new" element={<NewPostPage />} action={action} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
