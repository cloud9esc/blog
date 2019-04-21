// Server-client universal post repository
const parsePost = require("./parser");

/**
 * { limit?: number, offset?: number, category?: string }
 */
let loadPosts;
let loadPost;

if (process.browser) {
  const fetch = require('isomorphic-fetch');
  
  // const options = { limit: 3, offset: 5 };
  // const keys = Object.keys(options); // ['limit', 'offset']
  // const tokens = options.map(key => `${key}=${options[key]}`) // ['limit=3', 'offset=5']
  // const query = 'limit=3&offset=5'


  // 브라우저인 경우 그냥 fetch로 서버에 요청을 보냅니다.
  loadPosts = async function loadPosts(options) {
    const query = Object.keys(options)
      .map(key => `${key}=${options[key]}`).join('&');

    const res = await fetch(`/contents/posts?${query}`);
    const posts = await res.json();
    return posts;
  }

  getPost = async function getPost(id) {
    const res = await fetch(`/contents/posts/${id}`);
    const post = await res.json();
    return post;
  }
  
} else {
  const fs = require('fs');
  const path = require('path');
  const POST_DIR = path.join('.', 'contents', 'posts');
  
  // 서버인 경우에는 진짜 내용을 읽어야 하니까 ..
  // 여기의 options은 클라이언트가 쿼리 스트링으로 보냈을 것으로 가정..
  loadPosts = async function(options) {
    const category = options.category;
    const offset = options.offset ? Number(options.offset) : 0;
    const limit = options.limit ? Number(option.limit) : 12;

    const mdFileNames = fs.readdirSync(POST_DIR);
  
    let frontMatters = mdFileNames.map(filename => {
      const fileContent = fs.readFileSync(path.join(POST_DIR, filename)).toString();
      const parsedPost = parsePost(fileContent);
      return {
        id: filename,
        ...parsedPost.frontMatter
      };
    });

    if (category) {
      frontMatters = frontMatters
        .filter(fm => fm.categories.indexOf(category) !== -1);
    }
    frontMatters = frontMatters.slice(offset, limit);

    return { items: frontMatters };
  }
}

module.exports = { loadPosts, loadPost };
