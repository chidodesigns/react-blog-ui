import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./blog.css";

export default function Blog() {
  return (
    <>
      <Header />
      <div className="blog">
          <Posts/>
          <Sidebar/>
      </div>
    </>
  );
}
