import { BASE_URL } from './const';
import { BLOG_PREFIX, BLOG_PAGE_SLUG, BLOG_TAG_SLUG } from '@www/_data/site-settings';

export function getBlogUrl(absolute: boolean = false) {
  const path = BLOG_PREFIX;
  return absolute ? buildFullUrl(path) : path;
}

export function buildBlogUrl(slug: string, absolute: boolean = false): string {
  const path = `${BLOG_PREFIX}/${slug}`;
  return absolute ? buildFullUrl(path) : path;
}

export function buildBlogPageUrl(page: number, absolute: boolean = false): string {
  const path = `${BLOG_PREFIX}/${BLOG_PAGE_SLUG}/${page}`;
  return absolute ? buildFullUrl(path) : path;
}

export function buildBlogTagUrl(tag: string, absolute: boolean = false): string {
  const path = `${BLOG_PREFIX}/${BLOG_TAG_SLUG}/${tag}`;
  return absolute ? buildFullUrl(path) : path;
}

export function buildFullUrl(path?: string): string {
  return path && path.indexOf('http') === 0 ? path : BASE_URL.concat(path || '/');
}

export function range(size: number, startIndex: number = 0): ReadonlyArray<number> {
  return Array.from(Array(size).keys()).map((x) => x + startIndex);
}
