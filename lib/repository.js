// Server-client universal post repository
const parsePost = require("./parser");

/**
 * 첫 번째 파라미터로 아래의 타입 옵션들을 받아서...
 * { limit?: number, offset?: number, category?: string }
 * 
 * { headers } 형식의 JSON 객체를 반환
 */
let loadPosts;
/**
 * 첫 번째 인자로 id를 받아 해당하는 포스트를 반환
 */
let getPost;

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
  const util = require('util');
  const POST_DIR = path.join('.', 'contents', 'posts');

  const readdir = util.promisify(fs.readdir);
  const readFile = util.promisify(fs.readFile);
  
  // 서버인 경우에는 진짜 내용을 읽어야 하니까 ..
  // 여기의 options은 클라이언트가 쿼리 스트링으로 보냈을 것으로 가정..
  loadPosts = async function(options) {
    const category = options.category;
    const offset = options.offset ? Number(options.offset) : 0;
    const limit = options.limit ? Number(option.limit) : 12;

    const mdFileNames = await readdir(POST_DIR);
  
    let headers = await Promise.all(mdFileNames.map(async filename => {
      const fileContent = await readFile(path.join(POST_DIR, filename));
      const parsedPost = parsePost(fileContent.toString());
      return {
        id: filename,
        ...parsedPost.header
      };
    }));

    if (category) {
      headers = headers
        .filter(fm => fm.categories.indexOf(category) !== -1);
    }
    headers.reverse();
    headers = headers.slice(offset, limit);

    return { headers };
  }

  getPost = async function(id) {
    // 포스트 디렉토리에 실제로 있는 파일명인지를 검사한다
    const mdFileNames = await readdir(POST_DIR);
    const isValidId = mdFileNames.indexOf(id) !== -1;
    if (isValidId) {
      const fileContent = await readFile(path.join(POST_DIR, id));
      const parsedPost = parsePost(fileContent.toString());
      return parsedPost;
    } else {
      return null;
    }
  }
}

module.exports = { loadPosts, getPost };
