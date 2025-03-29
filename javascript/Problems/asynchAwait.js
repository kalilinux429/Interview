async function fetchUser() {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ id: 1, name: "Suchit" }), 2000);
    });
  }
  
  async function fetchPosts(userId) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(["Post1", "Post2"]), 1500);
    });
  }
  
  async function getUserData() {
    try {
      console.log("Fetching user...");
      const user = await fetchUser();
      console.log("User:", user);
  
      console.log("Fetching posts...");
      const posts = await fetchPosts(user.id);
      console.log("Posts:", posts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  getUserData();
  