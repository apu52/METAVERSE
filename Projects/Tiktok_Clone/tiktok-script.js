const postVideo = document.querySelectorAll(".post-video");
const videoPlayer = document.querySelectorAll(".video-player");
const post = document.querySelectorAll(".post");
let isPlaying = true;

postVideo.forEach((item, index) => {
  item.loop = true;
  item.autoBuffer = true;
  videoPlayer[index].addEventListener("click", function () {
    isPlaying ? pauseVideo(index) : playVideo(index);
  });
});

function playVideo(index) {
  postVideo[index].play();
  isPlaying = true;
}

function pauseVideo(index) {
  postVideo[index].pause();
  isPlaying = false;
}

// disc icon
const discSrc =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAYFBMVEX///8AAAC8vLzg4OD4+Pjs7OzCwsKcnJzw8PDz8/Pb29vNzc2VlZVISEg7OzulpaWLi4sTExN+fn4hISG0tLRTU1Nzc3M2NjYxMTFeXl5NTU0aGhpkZGQLCwtubm4sLCwESLxRAAAHlUlEQVR4nO2d6baiMAyAQUAFdFzv6l3e/y3nqoS20KZNpRQ8+f7MOQ5XGkmzNS1JwjAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzDMTCirerm4sayrMvZohmRd7fYvaY+X/a5axx7bw+TL47Yvm2B7XOaxx+hPtvqHCQf822SxR+rD2k26RsZVEXu8RJaaSYfzsow9ZgK7d6p4V953scftRr5BhPj+/sZk3MzA4qwOupFvj6tFVRTF+o+/f+rd5udXd91hFXv8FpZ98bb7pdaC1PqHeJjyXCw+usN9XRh9+Y9JTz8ma1F3nZF+1cjFpVaV70zT2qzVkOWww+PNpVm+P7WeYAx3Vkb4ubBd/4oJmKbnMcZM4SiP7g3TzQZcvjQ9hh8zgfJNGtqv9eklRhsq/0oTSqmykzSwjdOfHI2CtZwmE4PLT2PrZuPzk1EuCQdNH4OFNCRXA2/X0Bsuyh4cyXy+OSuVg4bemIAxleT7cv8rR/kmIKGkn4T4w1FDr0TW0tpvJHt3AeNamkyMo6L8HSkhjugtSmHsSfJVFPnSUzyPL+IXWoaD5fwa3gIN34qw9aTnlyQXmoCx4lLhIIjyZYgseqI4i3V7e6olX5EFTGPkh21+S86/CRVhYBtCApy2PkGIX+4UdPkiVDHaUdJNnIeGplQ7/Tht/Yzuht8wOYx8BBACoQ1B6arjpaF/jFsvhZrfJ/1Pu8VFVw7DS2GmnUYeM+PTU8B0xKp+Dg/Qrf6isEaFQB/heCszEEv+kv5qXSx3q42xYm/H4+f0BO5ICGHq/Se6cOZEOIlUwEw4u8DKtQRjYSxvD+mqY65d99acfHkPKxcAyyZuLiIbTLx0LF/4Qrmbr9fT8xJatisQibg43hLtAvJgjIgUnLzDjM+cCvQUxnD2kM3ZS0Fq9fP9uGgC82xx9EgJb/wLLFwi6g32NFCR77VT1sg8PUf4GiJEMVYfIVdejprHnVOqvy3hoxlQLtt1Us3011CUKjxMUHAdzZsbvdouFIPfmy/ySO5DR9zg5W1hqPB/qLVd6KVACO3rwTZY6nhiAlp+CcI6053QReBG82xlvDY+s3pL6jMMXECEdBWZV1fa5+Lwe1PnYdgaMKwLWWYCPMCTy3cSbSlxnYAI2A48JqyMgymLoucSiWW2sEkhOGf8KrBEP+rHxebzkqaXz03n56F5fMvseJAmVbLMdBiLIkgudae9Kt4s78qAEjZlam6C2w4wMUoxWs0s1C4mWlwaQCxBcw88awGVk8PV3ppghv1nNAHL5h64925KuxdJD/utWydZS0nZU8glezCPqKleN/VBOaHSdIfK0SxJR0P6CZhdqJcAs7/rf6QgfQkpnAnZOAOhNirgsj8QbVuFlNqRJmHIcBt+aVRACAakSaZdcJHLjhQBQzZ3NQJ+o/EgBJfik1LbN3KRrMWsBAR9FJ8YgjFJD2YlYP8Jzk5APGUBmy8+mZ2KIkamEJGz9OlsjIzNTVRf0kCkYGw2bgJ19PlCbQOVfmntJJT0fDKOvjLfI191w0055ZhLqAbBdq/7r9JIINdo5xJsgzHoFNANW5LRjGia6RIIKKtXuTPtBFTS4pkkvM2jEovlBTY4tTAxi5JFp+hU49vlO/UhW9HJrdM5bNEJMoWbhp2ttqHnTtCyYZatHPYbhC0bgp9Y/D0Oh1/bqc4Ohd9bkbE8f1kahsIWfqF0/+FoFxzW1NvSPdidska/PHD7NnXN0ho4tkGMsuJYrUw3Ct29TV5atwRWYvms+2SK85fu+0Ivn6G7w7Wgz3CBX1Yfe1Yn9AIozWfdQOahWDozNm1UHcsavGnUZ9ODIbuSmhDQ3gLZsoZvlPHaFKBzzkobic00tme4hG91om88unHsdPAojUAHewsahEwjbCb07sIyt3LZ5YNoZ4RWLs+NKwhbhwQP1HmMZjz/tnk91paiK3DxKLvQyAduYRycKiwQ44/SEOvh6804nlIF251G2t7jdaiYHjejCPHOSE3pQ/ZhuyV3F9LVAzCcgE6b5tofNLRcLcRt4ggXhzn4yE4pT3LkRC0iDvk5xDwjbs4a0NnbPXfmfumADPYI7Qk6uIhRN0gO6Attd2rn+8hHAg62I8m1pDHyJmXvrcY9cNMoFm1GP/BwKG+PT0L/4xYeZ6h9V1iC0Cb9EY56GCxtQoyH0JIohzmekVETMC+miJpppLO5htmZezF9vZAv2kGOfqdSdDFULMTBT9GOPJI3YD2AvvQtnl/EQ6t8a4gq2qKMtOUn6iGV5K1HGnQaKHnZyEdU0reP9ekHKVLCGf2AygGcRTdKyaXWtuiHNw4hYWcS1pLpmoB8Q2ip8nVyPSS6ft552NJIdjKTfetEjsB9/ECAdhLmcnA0nUOMO8dQ04HlXaUpbErHUCcPxqX34uFC0YNpHSSePGhMq17b1CTMp8r6gQx436lDTvEw/2TANYtpvo4h0b1Qw4fpvlAj0b4ShcikX4lyRf9SG2fxpv5Sm8TyWiILc3gt0ZXnfrHUjSd/NdiVJ3+5243nfj3fned+wWLDU78iU+J5X3LKMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMM/Nf3s7TKdBFsxNAAAAAElFTkSuQmCC";
const discContainer = document.createElement("div");
const discImg = document.createElement("img");
discContainer.setAttribute("class", "disc-logo");
discImg.src = discSrc;
discImg.setAttribute("class", "disc-logo-img");
discContainer.appendChild(discImg);
post.forEach((item, index) => {
  post[index].appendChild(discContainer);
});

// like button
const likeBtn = document.querySelectorAll(".like-btn");
const likeBtnIcon = document.querySelectorAll(".like-icon");
const likeBtnNum = document.querySelectorAll(".like-number");
let isLiked = false;

likeBtn.forEach((item, index) => {
  likeBtn[index].addEventListener("click", function () {
    //changing like Number
    let likeNum = Math.floor(likeBtnNum[index].innerText);
    // change like button
    isLiked ? unLikePost(index, likeNum) : likePost(index, likeNum);
  });
});

function likePost(index, likeNum) {
  isLiked = true;
  likeBtnIcon[index].classList.replace("fa-heart-o", "fa-heart");
  likeBtnNum[index].innerText = likeNum + 1;
}

function unLikePost(index, likeNum) {
  isLiked = false;
  likeBtnIcon[index].classList.replace("fa-heart", "fa-heart-o");
  likeBtnNum[index].innerText = likeNum - 1;
}

// post comment box
const postComments = document.querySelectorAll(".post-comments");
const commentBtn = document.querySelectorAll(".comment-btn");
const commentClose = document.querySelectorAll(".close-comment");

postComments.forEach((item, index) => {
  commentBtn[index].addEventListener("click", function () {
    postComments[index].classList.add("open");
  });

  commentClose[index].addEventListener("click", function () {
    postComments[index].classList.remove("open");
  });
});

//add coments to post

const postCommentSendBtn = document.querySelectorAll(".send-btn");
const postCommentText = document.querySelectorAll(".post-comment-text");
const postCommentArea = document.querySelectorAll(".post-comments-area");

postCommentSendBtn.forEach((item, index) => {
  if (postCommentText[index].value == "") {
    window.addEventListener("keydown", (evnt) => {
      if (evnt.keyCode == 13) submitComment();
    });
  }
  postCommentSendBtn[index].addEventListener("click", function () {
    if (postCommentText[index].value != "") {
      const postComment = document.createElement("div");
      const postCommentUser = document.createElement("div");
      const postCommentContent = document.createElement("div");
      const postCommentLikeBtn = document.createElement("div");

      // postCommentUser
      //adding class to postCommentUser
      postCommentUser.setAttribute("class", "post-comment-user");
      postCommentUser.classList.add("verified");
      //creating child elements to postCommentUser
      const postCommentUserImg = document.createElement("img");
      postCommentUserImg.setAttribute("class", "post-comment-user-img");
      postCommentUserImg.setAttribute(
        "src",
        "http://dankmemeryt.000webhostapp.com/wp-content/uploads/2020/12/logo.webp"
      );
      //appending to postCommentUser
      postCommentUser.appendChild(postCommentUserImg);

      //postCommentContent
      // adding class to postCommentContent
      postCommentContent.setAttribute("class", "post-comment-content");
      //creating child elements to postCommentContent
      const postCommentUserName = document.createElement("div");
      const postCommentUserMsg = document.createElement("div");
      postCommentUserName.setAttribute("class", "post-comment-user-name");
      postCommentUserName.classList.add("verified");
      postCommentUserName.innerHTML = "<a href='#'>theviralboy.ig</a>";
      if (postCommentUserName == "verified") {
        const postCommentUserVerifiedIcon = document.createElement(i);
        postCommentUserVerifiedIcon.setAttribute(
          "class",
          "fa fa-check post-comment-user-verified"
        );

        postCommentUserName.appendChild(postCommentUserVerifiedIcon);
      }
      postCommentUserMsg.setAttribute("class", "post-comment-user-msg");
      postCommentUserMsg.innerText = postCommentText[index].value;

      //appending to postCommentContent
      postCommentContent.appendChild(postCommentUserName);
      postCommentContent.appendChild(postCommentUserMsg);

      //postCommentLikeBtn
      postCommentLikeBtn.setAttribute("class", "post-comment-like-btn");

      const postCommentLikeBtnIcon = document.createElement("i");
      postCommentLikeBtnIcon.setAttribute(
        "class",
        "fa fa-heart-o post-comment-like-icon"
      );
      const postCommentLikeNum = document.createElement("p");
      postCommentLikeNum.setAttribute("class", "post-comment-like-number");
      postCommentLikeNum.innerText = 9;

      //appending elements to postCommentLikeBtn
      postCommentLikeBtn.appendChild(postCommentLikeBtnIcon);
      postCommentLikeBtn.appendChild(postCommentLikeNum);

      postComment.setAttribute("class", "post-comment");

      postComment.appendChild(postCommentUser);
      postComment.appendChild(postCommentContent);
      postComment.appendChild(postCommentLikeBtn);
      //appending comment into post comment
      postCommentArea[index].appendChild(postComment);

      //blanking out postCommentText
      postCommentText[index].value = "";
    }
  });
});

// post comments like
const postCommentLikeBtn = document.querySelectorAll(".post-comment-like-btn");
const postCommentLikeIcon = document.querySelectorAll(
  ".post-comment-like-icon"
);
const postCommentLikeNum = document.querySelectorAll(
  ".post-comment-like-number"
);
let isPostCommentLiked = false;

postCommentLikeBtn.forEach((item, index) => {
  postCommentLikeBtn[index].addEventListener("click", function () {
    let num = Math.floor(postCommentLikeNum[index].innerText);
    isPostCommentLiked
      ? unLikePostComment(index, num)
      : likePostComment(index, num);
  });
});

function likePostComment(index, num) {
  isPostCommentLiked = true;
  num += 1;
  postCommentLikeIcon[index].classList.replace("fa-heart-o", "fa-heart");
  postCommentLikeIcon[index].classList.add("liked");
  postCommentLikeNum[index].innerText = num;
}

function unLikePostComment(index, num) {
  isPostCommentLiked = false;
  num -= 1;
  postCommentLikeIcon[index].classList.replace("fa-heart", "fa-heart-o");
  postCommentLikeIcon[index].classList.remove("liked");
  postCommentLikeNum[index].innerText = num;
}
