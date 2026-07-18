import { client } from '@/sanity/lib/client';

export async function getMenuItems() {
  return client.fetch(`*[_type == "menuItem"] | order(category asc, order asc){
    _id, vietnameseName, titleEn, titleZh, descEn, descZh, category, signature, image
  }`);
}

export async function getSocialPosts() {
  return client.fetch(`*[_type == "socialPost"] | order(order asc){
    _id, platform, image
  }`);
}

export async function getBusinessHours() {
  return client.fetch(`*[_type == "businessHours"][0]{
    monday, tuesday, wednesday, thursday, friday, saturday, sunday,
    announcementEn, announcementZh
  }`);
}
