const BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ||
  "http://localhost:1337";

type Format =
  | "thumbnail"
  | "small"
  | "medium"
  | "large";

export function getStrapiImage(
  image: any,
  format: Format = "medium"
) {
  if (!image) return "/placeholder-product.png";

  const imageFormat =
    image.formats?.[format] || image;

  const url = imageFormat.url;

  if (!url) return "/placeholder-product.png";

  return url.startsWith("http")
    ? url
    : `${BASE_URL}${url}`;
}