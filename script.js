document.addEventListener("DOMContentLoaded", function() {
  const commentContainer = document.querySelector('.comments-container');
  let currentUser = {
    pngUrl: "",
    webpUrl: "",
    userName: ""
  };
  let commentDataArray = [];

  // Embedded data (from your provided data.json)
  const data = {
    "currentUser": {
      "image": {
        "png": "./images/avatars/image-juliusomo.png",
        "webp": "./images/avatars/image-juliusomo.webp"
      },
      "username": "juliusomo"
    },
    "comments": [{
        "id": 1,
        "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
        "createdAt": "1 month ago",
        "score": 12,
        "user": {
          "image": {
            "png": "./images/avatars/image-amyrobson.png",
            "webp": "./images/avatars/image-amyrobson.webp"
          },
          "username": "amyrobson"
        },
        "replies": []
      },
      {
        "id": 2,
        "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        "createdAt": "2 weeks ago",
        "score": 5,
        "user": {
          "image": {
            "png": "./images/avatars/image-maxblagun.png",
            "webp": "./images/avatars/image-maxblagun.webp"
          },
          "username": "maxblagun"
        },
        "replies": [{
            "id": 3,
            "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
            "createdAt": "1 week ago",
            "score": 4,
            "replyingTo": "maxblagun",
            "user": {
              "image": {
                "png": "./images/avatars/image-ramsesmiron.png",
                "webp": "./images/avatars/image-ramsesmiron.webp"
              },
              "username": "ramsesmiron"
            }
          },
          {
            "id": 4,
            "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
            "createdAt": "2 days ago",
            "score": 2,
            "replyingTo": "ramsesmiron",
            "user": {
              "image": {
                "png": "./images/avatars/image-juliusomo.png",
                "webp": "./images/avatars/image-juliusomo.webp"
              },
              "username": "juliusomo"
            }
          }
        ]
      }
    ]
  };

  currentUser = {
    pngUrl: data.currentUser.image.png,
    webpUrl: data.currentUser.image.webp,
    userName: data.currentUser.username
  };
  commentDataArray = data.comments.map(comment => ({
    score: comment.score,
    username: comment.user.username,
    createdAt: comment.createdAt,
    content: comment.content,
    id: comment.id,
    userImage: {
      pngUrl: comment.user.image.png,
      webpUrl: comment.user.image.webp
    },
    replies: comment.replies.map(reply => ({
      score: reply.score,
      username: reply.user.username,
      createdAt: reply.createdAt,
      content: reply.content,
      id: reply.id,
      userImage: {
        pngUrl: reply.user.image.png,
        webpUrl: reply.user.image.webp
      },
      repliedTo: reply.replyingTo || comment.user.username
    }))
  }));
  updateCommentData();

  function updateCommentData() {
    commentContainer.innerHTML = '';

    commentDataArray.forEach((comment) => {
      // --- Row 3: Upvote and Action Buttons ---
      const plusImg = document.createElement('img');
      plusImg.src = './images/icon-plus.svg';
      plusImg.alt = 'plus icon';

      const minusImg = document.createElement('img');
      minusImg.src = './images/icon-minus.svg';
      minusImg.alt = 'minus icon';

      const scoreDiv = document.createElement('div');
      scoreDiv.className = 'score';
      scoreDiv.textContent = comment.score;

      const upvoteDiv = document.createElement('div');
      upvoteDiv.className = 'upvote'; // Will be horizontal on mobile
      upvoteDiv.appendChild(plusImg);
      upvoteDiv.appendChild(scoreDiv);
      upvoteDiv.appendChild(minusImg);

      const actionButtonWrapper = document.createElement('div');
      actionButtonWrapper.className = 'action-button-wrapper';

      // Determine action buttons (Reply/Delete/Edit)
      if (comment.username === currentUser.userName) {
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn text-danger';
        const deleteIcon = document.createElement('img');
        deleteIcon.src = './images/icon-delete.svg';
        deleteIcon.alt = 'delete icon';
        const deleteText = document.createTextNode('Delete');
        deleteButton.appendChild(deleteIcon);
        deleteButton.appendChild(deleteText);

        const editButton = document.createElement('button');
        editButton.className = 'btn edit-button';
        const editIcon = document.createElement('img');
        editIcon.src = './images/icon-edit.svg';
        editIcon.alt = 'edit icon';
        const editText = document.createTextNode('Edit');
        editButton.appendChild(editIcon);
        editButton.appendChild(editText);

        actionButtonWrapper.appendChild(deleteButton);
        actionButtonWrapper.appendChild(editButton);

      } else {
        const replyButton = document.createElement('button');
        replyButton.className = 'btn reply-button';
        const replyImg = document.createElement('img');
        replyImg.className = 'image-fluid reply-image';
        replyImg.src = './images/icon-reply.svg';
        replyImg.alt = 'Reply';
        const replyText = document.createTextNode('Reply');
        replyButton.appendChild(replyImg);
        replyButton.appendChild(replyText);
        replyButton.addEventListener('click', function() {
          console.log(`Reply to comment ID: ${comment.id}`);
        });
        actionButtonWrapper.appendChild(replyButton);
      }

      // Footer actions container (upvote + action buttons)
      const commentFooterActions = document.createElement('div');
      commentFooterActions.className = 'comment-footer-actions';
      commentFooterActions.appendChild(upvoteDiv);
      commentFooterActions.appendChild(actionButtonWrapper);

      // --- Row 1: User Info ---
      const userImage = document.createElement('img');
      userImage.className = 'profile-image';
      userImage.src = comment.userImage.pngUrl;
      userImage.alt = 'user image';

      const userName = document.createElement('span');
      userName.className = 'username';
      userName.textContent = comment.username;

      const createdAt = document.createElement('span');
      createdAt.className = 'createdAt';
      createdAt.textContent = comment.createdAt;

      const userDiv = document.createElement('div');
      userDiv.className = 'user-info-row';
      userDiv.appendChild(userImage);
      userDiv.appendChild(userName);
      if (comment.username === currentUser.userName) {
        const youBadge = document.createElement('span');
        youBadge.className = 'you-badge';
        youBadge.textContent = 'you';
        userDiv.appendChild(youBadge);
      }
      userDiv.appendChild(createdAt);

      // --- Row 2: Comment Content ---
      const contentArticle = document.createElement('article');
      contentArticle.className = 'comment-content';
      contentArticle.textContent = comment.content;


      // Main content wrapper (user info + comment content)
      const commentMainContent = document.createElement('div');
      commentMainContent.className = 'comment-main-content';
      commentMainContent.appendChild(userDiv);
      commentMainContent.appendChild(contentArticle);


      // Main wrapper for individual comment block (stacks rows)
      const individualCommentBlock = document.createElement('div');
      individualCommentBlock.className = 'individual-comment-block';
      individualCommentBlock.appendChild(commentMainContent);
      individualCommentBlock.appendChild(commentFooterActions);

      // Delete button listener for main comments
      if (comment.username === currentUser.userName) {
        const deleteBtn = actionButtonWrapper.querySelector('.text-danger');
        if (deleteBtn) {
          deleteBtn.addEventListener('click', function() {
            showDeleteConfirmation(individualCommentBlock);
          });
        }
      }

      // Replies
      const repliesContainer = document.createElement('div');
      repliesContainer.className = 'replies-container';

      comment.replies.forEach(reply => {
        // --- Reply Row 3: Upvote and Action Buttons ---
        const replyPlusImg = document.createElement('img');
        replyPlusImg.src = './images/icon-plus.svg';
        replyPlusImg.alt = 'plus icon';

        const replyMinusImg = document.createElement('img');
        replyMinusImg.src = './images/icon-minus.svg';
        replyMinusImg.alt = 'minus icon';

        const replyScoreDiv = document.createElement('div');
        replyScoreDiv.className = 'score';
        replyScoreDiv.textContent = reply.score;

        const replyUpvoteDiv = document.createElement('div');
        replyUpvoteDiv.className = 'upvote'; // Will be horizontal on mobile
        replyUpvoteDiv.appendChild(replyPlusImg);
        replyUpvoteDiv.appendChild(replyScoreDiv);
        replyUpvoteDiv.appendChild(replyMinusImg);

        const replyActionButtonWrapper = document.createElement('div');
        replyActionButtonWrapper.className = 'action-button-wrapper';

        if (reply.username === currentUser.userName) {
          const deleteButton = document.createElement('button');
          deleteButton.className = 'btn text-danger';
          const deleteIcon = document.createElement('img');
          deleteIcon.src = './images/icon-delete.svg';
          deleteIcon.alt = 'delete icon';
          const deleteText = document.createTextNode('Delete');
          deleteButton.appendChild(deleteIcon);
          deleteButton.appendChild(deleteText);

          const editButton = document.createElement('button');
          editButton.className = 'btn edit-button';
          const editImg = document.createElement('img');
          editImg.className = 'img-fluid';
          editImg.src = './images/icon-edit.svg';
          editImg.alt = 'Edit';
          const editText = document.createTextNode('Edit');
          editButton.appendChild(editImg);
          editButton.appendChild(editText);

          replyActionButtonWrapper.appendChild(deleteButton);
          replyActionButtonWrapper.appendChild(editButton);

        } else {
          const replyButtonReply = document.createElement('button');
          replyButtonReply.className = 'btn reply-button';
          const replyImg = document.createElement('img');
          replyImg.className = 'img-fluid reply-image';
          replyImg.src = './images/icon-reply.svg';
          replyImg.alt = 'Reply';
          const replyText = document.createTextNode('Reply');
          replyButtonReply.appendChild(replyImg);
          replyButtonReply.appendChild(replyText);
          replyButtonReply.addEventListener('click', function() {
            console.log(`Reply to reply ID: ${reply.id}`);
          });
          replyActionButtonWrapper.appendChild(replyButtonReply);
        }

        const replyFooterActions = document.createElement('div');
        replyFooterActions.className = 'comment-footer-actions';
        replyFooterActions.appendChild(replyUpvoteDiv);
        replyFooterActions.appendChild(replyActionButtonWrapper);


        // --- Reply Row 1: User Info ---
        const replyUserImage = document.createElement('img');
        replyUserImage.className = 'profile-image';
        replyUserImage.src = reply.userImage.pngUrl;
        replyUserImage.alt = 'user image';

        const replyUserName = document.createElement('span');
        replyUserName.className = 'username';
        replyUserName.textContent = reply.username;

        const replyCreatedAt = document.createElement('span');
        replyCreatedAt.className = 'createdAt';
        replyCreatedAt.textContent = reply.createdAt;

        const replyUserDiv = document.createElement('div');
        replyUserDiv.className = 'user-info-row';
        replyUserDiv.appendChild(replyUserImage);
        replyUserDiv.appendChild(replyUserName);
        if (reply.username === currentUser.userName) {
          const youBadge = document.createElement('span');
          youBadge.className = 'you-badge';
          youBadge.textContent = 'you';
          replyUserDiv.appendChild(youBadge);
        }
        replyUserDiv.appendChild(replyCreatedAt);

        // --- Reply Row 2: Comment Content (with replied-to username) ---
        const replyContentArticle = document.createElement('article');
        replyContentArticle.className = 'comment-content';
        const repliedToUsernameSpan = document.createElement('span');
        repliedToUsernameSpan.className = 'replied-to-username';
        repliedToUsernameSpan.textContent = `@${reply.repliedTo} `;
        replyContentArticle.appendChild(repliedToUsernameSpan);
        replyContentArticle.appendChild(document.createTextNode(reply.content));

        const replyMainContent = document.createElement('div');
        replyMainContent.className = 'comment-main-content';
        replyMainContent.appendChild(replyUserDiv);
        replyMainContent.appendChild(replyContentArticle);


        // Main wrapper for individual reply block (stacks rows)
        const replyAndUpvoteDivWrapper = document.createElement('div');
        replyAndUpvoteDivWrapper.className = 'replyAndUpvoteDivWrapper';
        replyAndUpvoteDivWrapper.appendChild(replyMainContent);
        replyAndUpvoteDivWrapper.appendChild(replyFooterActions);

        // Delete button listener for replies
        if (reply.username === currentUser.userName) {
          const deleteBtn = replyActionButtonWrapper.querySelector('.text-danger');
          if (deleteBtn) {
            deleteBtn.addEventListener('click', function() {
              showDeleteConfirmation(replyAndUpvoteDivWrapper);
            });
          }
        }
        repliesContainer.appendChild(replyAndUpvoteDivWrapper);
      });

      const individualCommentBlock_PlusReplies = document.createElement('div');
      individualCommentBlock_PlusReplies.className = 'individual-comment-block-plus-replies';

      individualCommentBlock_PlusReplies.appendChild(individualCommentBlock);
      if (comment.replies.length > 0) {
        individualCommentBlock_PlusReplies.appendChild(repliesContainer);
      }
      commentContainer.appendChild(individualCommentBlock_PlusReplies);
    });

    // New comment box
    const newCommentBox = document.createElement('div');
    newCommentBox.className = 'new-comment-box';

    const newCommentInput = document.createElement('textarea'); // Row 1
    newCommentInput.className = 'form-control new-comment-input';
    newCommentInput.placeholder = 'Add new comment...';
    newCommentInput.rows = 3;

    const newCommentUserImage = document.createElement('img');
    newCommentUserImage.className = 'profile-image new-comment-user-image';
    newCommentUserImage.src = currentUser.pngUrl;

    const sendButton = document.createElement('button');
    sendButton.className = 'btn send-button';
    sendButton.textContent = 'SEND';
    sendButton.addEventListener('click', function() {
      const commentText = newCommentInput.value.trim();
      if (commentText) {
        console.log("New comment submitted:", commentText);
        newCommentInput.value = '';
      }
    });

    // Row 2: User image and Send button
    const newCommentBottomRow = document.createElement('div');
    newCommentBottomRow.className = 'new-comment-bottom-row'; // New wrapper class for mobile layout
    newCommentBottomRow.appendChild(newCommentUserImage);
    newCommentBottomRow.appendChild(sendButton);

    newCommentBox.appendChild(newCommentInput); // Append textarea first
    newCommentBox.appendChild(newCommentBottomRow); // Then the bottom row
    commentContainer.appendChild(newCommentBox);
  }

  function showDeleteConfirmation(elementToDelete) {
    const overlay = document.createElement('div');
    overlay.className = 'deleteNotifier-overlay';
    const deleteNotifyerContainer = document.createElement('div');
    deleteNotifyerContainer.className = 'deleteNotifier-container';
    const deleteNotifyerHeader = document.createElement('h1');
    deleteNotifyerHeader.className = 'delete-notifier-header';
    deleteNotifyerHeader.textContent = 'Delete Comment';
    const deleteNotifyerContent = document.createElement('p');
    deleteNotifyerContent.id = 'delete-messege';
    deleteNotifyerContent.textContent = 'Are you sure you want to delete this comment? This will remove the comment and can\'t be undone.';
    const deleteNotifierButtonsGroup = document.createElement('div');
    deleteNotifierButtonsGroup.className = 'd-flex align-items-center justify-content-between gap-3 deleteNotifier-buttonsGroup';
    const cancelDeleteButton = document.createElement('button');
    cancelDeleteButton.className = 'btn btn-secondary cancel-delete-button';
    cancelDeleteButton.textContent = 'NO, CANCEL';
    const confirmDeleteButton = document.createElement('button');
    confirmDeleteButton.className = 'btn btn-danger confirm-delete-button';
    confirmDeleteButton.textContent = 'YES, DELETE';

    deleteNotifierButtonsGroup.appendChild(cancelDeleteButton);
    deleteNotifierButtonsGroup.appendChild(confirmDeleteButton);

    deleteNotifyerContainer.appendChild(deleteNotifyerHeader);
    deleteNotifyerContainer.appendChild(deleteNotifyerContent);
    deleteNotifyerContainer.appendChild(deleteNotifierButtonsGroup);
    overlay.appendChild(deleteNotifyerContainer);
    document.body.appendChild(overlay);

    cancelDeleteButton.addEventListener('click', () => {
      overlay.remove();
    });

    confirmDeleteButton.addEventListener('click', () => {
      if (elementToDelete) {
        elementToDelete.remove();
      }
      overlay.remove();
    });
  }
});
