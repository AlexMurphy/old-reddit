import { test } from "./fixtures";
import { getPostPage, voteOnPost } from "./helpers/post.helper";

test("upvote/downvote script", async ({ listingPage, newPostPage, oldPostPage, postMediaPage, searchComponent, searchPage, subReddit }) => {
  await listingPage.goto();

  await searchComponent.search('gaming');
  await searchPage.clickGamingSubRedditResult();

  const containsNintendo = await subReddit.post2ndPostContains('Nintendo');
  await subReddit.click2ndPost();

  const postPage = await getPostPage(postMediaPage, newPostPage, oldPostPage);
  await voteOnPost(postPage, containsNintendo);
});
