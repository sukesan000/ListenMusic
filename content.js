document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    try {
      console.log("id: " + e.currentTarget.id);
      loadNewTab(e.currentTarget.id);
    } catch (e) {
      alert(e);
    }
  });
});

function loadNewTab(btnName) {
  let newTabUrl = "";
  switch (btnName) {
    case "forestBtn": {
      newTabUrl = "https://www.youtube.com/watch?v=VhXP8RC_v9I";
      break;
    }

    case "riverBtn": {
      newTabUrl = "https://www.youtube.com/watch?v=FD9X71Y3XxA";
      break;
    }

    case "cafeBtn": {
      newTabUrl = "https://www.youtube.com/watch?v=z8Kt1gXL_2M&t=4673s";
      break;
    }

    case "sawanoBtn": {
      newTabUrl = "https://www.youtube.com/watch?v=MHDQ4zXkdik";
      break;
    }

    default:
      console.log("エラーが発生しました");
  }

  chrome.tabs.create({
    url: newTabUrl,
  });
}
