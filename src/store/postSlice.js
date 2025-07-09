import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching posts
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  }
);

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    filteredPosts: [],
    currentPage: 1,
    postsPerPage: 6,
    loading: false,
    error: null,
    viewMode: 'card', // 'card' or 'list'
    showFeedbackForm: false,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      const newPage = action.payload;
      const totalPages = Math.ceil(state.filteredPosts.length / state.postsPerPage);
      
      // Ensure the page is within valid range
      if (newPage >= 1 && newPage <= totalPages) {
        state.currentPage = newPage;
      } else if (newPage > totalPages && totalPages > 0) {
        // If trying to go to a page that doesn't exist, go to the last page
        state.currentPage = totalPages;
      }
    },
    removePost: (state, action) => {
      const postId = action.payload;
      const postIndex = state.filteredPosts.findIndex(post => post.id === postId);
      
      if (postIndex !== -1) {
        // Remove the post
        state.filteredPosts = state.filteredPosts.filter(post => post.id !== postId);
        
        // Calculate new total pages
        const totalPages = Math.ceil(state.filteredPosts.length / state.postsPerPage);
        
        // If current page is now beyond the total pages, adjust to the last page
        if (state.currentPage > totalPages && totalPages > 0) {
          state.currentPage = totalPages;
        } else if (state.filteredPosts.length === 0) {
          state.currentPage = 1;
        }
      }
    },
    toggleViewMode: (state) => {
      state.viewMode = state.viewMode === 'card' ? 'list' : 'card';
    },
    toggleFeedbackForm: (state) => {
      state.showFeedbackForm = !state.showFeedbackForm;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
        state.filteredPosts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { 
  setCurrentPage, 
  removePost, 
  toggleViewMode, 
  toggleFeedbackForm,
  setLoading 
} = postSlice.actions;

export default postSlice.reducer;

