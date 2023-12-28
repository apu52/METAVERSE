import { tweets } from "./data.js";
const tweetList = document.getElementById("tweetList");

function getTweets() {
  tweets.map((tweet) => {
    tweetList.innerHTML += `<li class="timeline-border py-3 px-4">
    <!-- profile-pic -->
    <figure class="profile-pic">
      <img
        class="rounded-full"
        src="${tweet.profilePicture}"
        alt="user-profil-pic"
      />
    </figure>
    <!-- tweet-area -->
    <div class="ml-3 mt-2 w-full">
      <!-- user-name -->
      <div class="tweet-username">
        <div class="font-bold text-textColor">
          <a href="${tweet.link}" target='_blank'>${tweet.name}</a>
        </div>
        <div class="flex text-lightGray">
          <div class="px-1 text-lightGray">
            <a href="#">${tweet.username}</a>
          </div>
          <div>
            <span>·</span>
          </div>
          <div class="px-1">
            <a href="#">${tweet.date}</a>
          </div>
        </div>
      </div>
      <!-- tweet-text -->
      <div class="tweet-text">
        <p>
          ${tweet.text}
        </p>
      </div>
      <!-- tweet-pic -->
      <figure class="pt-3">
        <a href="#">
          <img
            class="max-h-72 w-full object-cover rounded-2xl"
            src="${tweet.image}"
            alt=""
          />
        </a>
      </figure>
      <!-- reaction-icons -->
      <div class="reaction-icons">
        <!-- reply-icon -->
        <a href="#">
          <img
            src="./assets/icons/tweet/reply.svg"
            alt="reply-icon"
          />
        </a>
        <!-- retweet-icon -->
        <a href="#">
          <img
            src="./assets/icons/tweet/retweet.svg"
            alt="retweet-icon"
          />
        </a>
        <!-- like-icon -->
        <a href="#">
          <img src="./assets/icons/tweet/like.svg" alt="like-icon" />
        </a>
        <!-- share-icon -->
        <a href="#">
          <img
            src="./assets/icons/tweet/share.svg"
            alt="share-icon"
          />
        </a>
      </div>
    </div>
  </li>`;
  });
}
getTweets();
