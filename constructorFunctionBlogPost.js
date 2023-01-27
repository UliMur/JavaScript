function DraftBlogPost(title, body, author) {
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}

let post = new DraftBlogPost('a', 'b', 'c');
console.log(post);