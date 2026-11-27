# José Rico’s homepage

The GitHub Pages homepage lives in **`docs/`**. It is plain HTML and CSS and needs no build tools.

- Edit `docs/index.html` to change the bio, course descriptions, or contact links. In GitHub, open the file and use the pencil icon to edit it.
- To add a course or past-course outline, copy one of the `<article class="course">` sections and replace its title, description, and link. You can also add a separate HTML page in `docs/` and link to it by filename.
- Edit `docs/style.css` for colors, type, and layout. The portrait is `docs/portrait.jpg`.
- Preview locally with `python3 -m http.server --directory docs` and open `http://localhost:8000`. GitHub Pages publishes from the `master` branch’s `/docs` folder.

The original Hugo site and posts are in `content/`, `static/`, and the original theme and configuration directories. Netlify continues to use the existing `netlify.toml`.

## Posts

The post index is in `docs/posts/index.html`, and each article has its own HTML file in `docs/posts/`. Put website photos in `docs/post-images/` and give them descriptive alternative text. The earlier Markdown source stays in `content/post/`.
