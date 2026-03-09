import { NewPostPage } from "../pages/new-post.page";
import { OldPostPage } from "../pages/old-post.page";
import { PostMediaPage } from "../pages/post-media.page";

export async function getPostPage(
  postMediaPage: PostMediaPage,
  newPostPage: NewPostPage,
  oldPostPage: OldPostPage,
) {
  const hasViewPost = await postMediaPage.doesViewPostButtonExist();
  if (hasViewPost) {
    await postMediaPage.clickViewPostButton();
    return newPostPage;
  }
  return oldPostPage;
}

export async function voteOnPost(
  postPage: NewPostPage | OldPostPage,
  shouldUpvote: boolean,
) {
  if (shouldUpvote) {
    await postPage.clickUpVote();
  } else {
    await postPage.clickDownVote();
  }
}
