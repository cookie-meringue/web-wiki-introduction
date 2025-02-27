document.addEventListener("DOMContentLoaded", () => {

    // // textarea id, button id, ul id

    const commentSubmitButton = document.getElementById("comment-submit-button");
    const commentInput = document.getElementById("comment-input");
    const commentList = document.getElementById("comment-list");
    const commentResetButton = document.getElementById("comment-reset-button");

    commentSubmitButton.addEventListener("click", (event) => {
        event.preventDefault();
        const comment = commentInput.value.trim();
        if (!comment) return;

        const commentItem = document.createElement("li");
        commentItem.innerHTML = `
        <div class="comment-item">
          <div class="comment-author">
            <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
            <span>방문자</span>
          </div>
          <div class="comment-content">
            ${comment}
          </div>
        </div>
      `;
        commentList.appendChild(commentItem);
        commentInput.value = "";
        alert("댓글이 등록되었습니다.");
    });
});