import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./store/postSlice";
import Header from "./components/Header";
import ViewToggle from "./components/ViewToggle";
import FeedbackSection from "./components/FeedbackSection";
import PostCard from "./components/PostCard";
import Pagination from "./components/Pagination";
import FeedbackForm from "./components/FeedbackForm";
import LoadingScreen from "./components/LoadingScreen";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const {
    filteredPosts,
    currentPage,
    postsPerPage,
    loading,
    error,
    viewMode,
    showFeedbackForm,
  } = useSelector((state) => state.posts);

  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 5 seconds on startup
    const loadingTimer = setTimeout(() => {
      setInitialLoading(false);
      dispatch(fetchPosts());
    }, 5000);

    return () => clearTimeout(loadingTimer);
  }, [dispatch]);

  // Calculate current posts to display
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  if (initialLoading || loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg">Error: {error}</p>
          <button
            onClick={() => dispatch(fetchPosts())}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Header />
            <ViewToggle />
            <FeedbackSection />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {currentPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No posts available</p>
              </div>
            ) : (
              <>
                <div
                  className={`grid gap-4 ${
                    viewMode === "card"
                      ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                      : "grid-cols-1"
                  }`}
                >
                  {currentPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
                <Pagination />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Feedback Form Modal */}
      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
}

export default App;
