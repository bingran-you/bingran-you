document.addEventListener('DOMContentLoaded', function () {
  function generateSlug(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  var blogContent = document.querySelector('.blog-v2-content');
  var blogHeader = document.querySelector('.blog-v2-header');

  if (!blogContent) return;

  var headers = blogContent.querySelectorAll('h1, h2');

  if (blogHeader) {
    blogHeader.innerHTML = '';

    var introElement = document.createElement('h1');
    introElement.textContent = 'Introduction';
    introElement.style.cursor = 'pointer';
    introElement.addEventListener('click', function () {
      blogContent.scrollIntoView({ behavior: 'smooth' });
      window.location.hash = 'introduction';
    });
    blogHeader.appendChild(introElement);

    headers.forEach(function (header) {
      var headerElement = document.createElement(header.tagName === 'H1' ? 'h1' : 'p');
      headerElement.textContent = header.textContent;
      headerElement.style.cursor = 'pointer';
      headerElement.addEventListener('click', function () {
        var targetId = generateSlug(header.textContent);
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
          window.location.hash = targetId;
        }
      });
      blogHeader.appendChild(headerElement);
    });
  }

  headers.forEach(function (header) {
    if (!header.id) {
      header.id = generateSlug(header.textContent);
    }
    header.addEventListener('click', function () {
      window.location.hash = this.id;
    });
    header.title = 'Click to navigate to this section';
  });
});
