import sanitize from 'sanitize-html';
import sanitizeHtml from 'sanitize-html';

export const sanitizeHtmlText = (dirty: string) => {
  const options: sanitize.IOptions = {
    allowedTags: [
      'img',
      'b',
      'i',
      'p',
      's',
      'em',
      'big',
      'small',
      'u',
      'tt',
      'sub',
      'sup',
      'h4',
      'h5',
      'h6',
      'div',
      'ul',
      'li',
      'div',
      'span',
    ],
    allowedAttributes: {
      '*': ['style'],
      img: ['src', 'alt'],
    },
  };

  return sanitizeHtml(dirty, options);
};
