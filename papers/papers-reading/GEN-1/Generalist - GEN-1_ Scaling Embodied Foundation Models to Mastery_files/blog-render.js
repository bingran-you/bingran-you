var BlogRender = (function () {
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  function formatDate(iso) {
    var d = new Date(iso + 'T00:00:00');
    return MONTHS[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
  }

  function fetchPosts(callback) {
    fetch('/assets/json/blog.json')
      .then(function (r) { return r.json(); })
      .then(function (posts) {
        posts.sort(function (a, b) { return b.date.localeCompare(a.date); });
        callback(posts);
      });
  }

  function renderHomepage(containerId, limit) {
    fetchPosts(function (posts) {
      var el = document.getElementById(containerId);
      if (!el) return;
      var html = '';
      var items = posts.slice(0, limit || 3);

      items.forEach(function (post) {
        var titleHtml = post.titleHtml || escapeHtml(post.title);
        var descHtml = post.descriptionHtml || escapeHtml(post.description);
        var dateStr = formatDate(post.date);

        if (post.thumbnail) {
          html += '<a href="/blog/' + post.slug + '" class="article-link article-featured">'
            + '<article class="blog-article">'
            + '<img src="' + post.thumbnail + '" alt="' + escapeHtml(post.title) + '" class="article-featured-image">'
            + '<div class="article-featured-body">'
            + '<div class="article-title">' + titleHtml + '</div>'
            + '<time class="article-date">' + dateStr + '</time>'
            + '<p class="article-description">' + descHtml + '</p>'
            + '</div>'
            + '</article></a>';
        } else {
          html += '<a href="/blog/' + post.slug + '" class="article-link">'
            + '<article class="blog-article">'
            + '<div class="article-title">' + titleHtml + '</div>'
            + '<time class="article-date">' + dateStr + '</time>'
            + '<p class="article-description">' + descHtml + '</p>'
            + '</article></a>';
        }
      });

      html += '<a href="/blog" class="button-link more-blog-posts-button">More Blog Posts &rarr;</a>';
      el.innerHTML = html;
    });
  }

  function renderBlogIndex(containerId) {
    fetchPosts(function (posts) {
      var el = document.getElementById(containerId);
      if (!el) return;
      var html = '';

      posts.forEach(function (post) {
        var titleHtml = post.titleHtml || escapeHtml(post.title);
        var descHtml = post.descriptionHtml || escapeHtml(post.description);
        var dateStr = formatDate(post.date);
        var thumbHtml = post.thumbnail
          ? '<img src="' + post.thumbnail + '" alt="' + escapeHtml(post.title) + '" class="blog-menu-article-thumb">'
          : '';

        html += '<a href="/blog/' + post.slug + '" class="blog-menu-article-link">'
          + '<div class="blog-menu-article">'
          + (thumbHtml ? '<div class="blog-menu-article-body">' : '')
          + thumbHtml
          + '<div>'
          + '<h1>' + titleHtml + '</h1>'
          + '<h2>' + descHtml + '</h2>'
          + '<p>' + dateStr + '</p>'
          + '</div>'
          + (thumbHtml ? '</div>' : '')
          + '</div></a>';
      });

      el.innerHTML = html;
    });
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function renderPostNav(containerId) {
    fetchPosts(function (posts) {
      posts.sort(function (a, b) { return a.date.localeCompare(b.date); });

      var path = window.location.pathname.replace(/\/$/, '');
      var slug = path.split('/').pop();

      var idx = -1;
      for (var i = 0; i < posts.length; i++) {
        if (posts[i].slug === slug) { idx = i; break; }
      }
      if (idx === -1) return;

      var el = document.getElementById(containerId);
      if (!el) return;

      var prevHtml = idx > 0
        ? '<a href="/blog/' + posts[idx - 1].slug + '" class="blog-nav-link blog-nav-prev"><span class="blog-nav-arrow">&larr;</span> Previous</a>'
        : '<span></span>';

      var topHtml = '<a href="#body" class="blog-nav-link blog-nav-top">&uarr; Back to Top</a>';

      var nextHtml = idx < posts.length - 1
        ? '<a href="/blog/' + posts[idx + 1].slug + '" class="blog-nav-link blog-nav-next">Next <span class="blog-nav-arrow">&rarr;</span></a>'
        : '<span></span>';

      el.innerHTML = prevHtml + topHtml + nextHtml;
    });
  }

  return {
    renderHomepage: renderHomepage,
    renderBlogIndex: renderBlogIndex,
    renderPostNav: renderPostNav
  };
})();
