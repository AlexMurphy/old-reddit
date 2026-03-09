import { test as base } from "@playwright/test";
import { dropSession } from "./helpers/session.helper";
import { ListingPage } from "./pages/listing.page";
import { LoginPage } from "./pages/login.page";
import { NewPostPage } from "./pages/new-post.page";
import { OldPostPage } from "./pages/old-post.page";
import { PostMediaPage } from "./pages/post-media.page";
import { SearchComponent } from "./components/search.component"
import { SearchPage } from "./pages/search.page";
import { SubRedditPage } from "./pages/subreddit.page";

type Fixtures = {
  listingPage: ListingPage;
  loginPage: LoginPage;
  newPostPage: NewPostPage;
  oldPostPage: OldPostPage;
  postMediaPage: PostMediaPage;
  searchComponent: SearchComponent;
  searchPage: SearchPage;
  subReddit: SubRedditPage;
};

export const test = base.extend<Fixtures>({
  page: async ({ page }, use) => {
    await use(page);
    await dropSession(page);
  },
  listingPage: async ({ page }, use) => use(new ListingPage(page)),
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  newPostPage: async ({ page }, use) => use(new NewPostPage(page)),
  oldPostPage: async ({ page }, use) => use(new OldPostPage(page)),
  postMediaPage: async ({ page }, use) => use(new PostMediaPage(page)),
  searchComponent: async ({ page }, use) => use(new SearchComponent(page)),
  searchPage: async ({ page }, use) => use(new SearchPage(page)),
  subReddit: async ({ page }, use) => use(new SubRedditPage(page)),
});

export { expect } from "@playwright/test";
