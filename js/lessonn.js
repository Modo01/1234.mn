export function getPosts(url, callMeBack) {

    fetch(url)
      .then((response) => response.json())
      .then((data) =>
      {
        let posts = [];
        data.record.lessons.forEach((post) => {
          posts.push(new Post(post.lessonId, post.lessonName, post.video, post.time, post.view, post.student, post.price, post.actual, post.img ));
        });
        callMeBack(posts);
      })
      .catch("error");
  
  }
  
  export class Post {
    constructor(_lessonId, _lessonName, _video, _time, _view, _student, _price, _actual, _img) {
      this.lessonId = _lessonId;
      this.lessonName = _lessonName;
      this.video = _video;
      this.time = _time;
      this.view = _view;
      this.student = _student;
      this.price = _price;
      this.actual = _actual;
      this.img = _img;
    }
    Create() {
      return `
      <div class="product-container-all"> <div class="product-card-all">
            <div class="product-image-all">
                <img src="${this.img}" alt="">
                <span class="discount-tag-all">${this.price}</span>
                <span class="actual-price-all">${this.actual}</span>
                <button class="card-btn-all">Сагсанд хийх</button>
            </div>
            <div class="product-info-all">
                <p class="product-brand-all">${this.lessonName}</p>
                <p class="product-lesson-all"> <i class="fa-solid fa-video"></i> ${this.video}}</p> 
                <p class="product-time-all"><i class="fa-solid fa-clock"></i> ${this.time}</p>
                <div> <p class="product-view-all"><i class="fa-solid fa-eye"></i> ${this.view}</p> 
                    <p class="product-students-all"><i class="fa-solid fa-graduation-cap"></i> ${this.student}</p></div>
            </div>
            <script src="../js/lesson.js" type="module"></script>
            <div id="posts"></div>
        </div></div>
      `;
    }
  }
