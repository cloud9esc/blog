const yaml = require('js-yaml');
const marked = require('marked');

/**
 * 
 * @param {string} mdtext 
 */
function parsePost(mdtext) {
  // https://javascript.info/regexp-multiline-mode
  // 문서 맨 처음에 나오는 ---도 잡고, 중간에 \n---\n 형태로 나오는 것도 잡아서 다 나눈다
  // 맨 처음 ---가 나오기 전에 내용은 무시하고 두번째는 front matter로 가정, 그 후부터는 body
  const [_, frontMatterStr, ...bodyMd] = mdtext.split(/^---\n/gm);

  const frontMatter = yaml.safeLoad(frontMatterStr);
  const body = marked.parse(bodyMd.join('\n---\n'));

  return { header: frontMatter, body };
}

module.exports = parsePost;
