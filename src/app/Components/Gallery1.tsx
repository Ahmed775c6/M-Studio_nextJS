// app/gallery/page.tsx (Server Component)
import GalleryClient from "../Apis/Gallery/GalleryClient";

async function getGalleryData() {
  const baseUrl = process.env.NEXTURL;
  const res = await fetch(`${baseUrl}/Apis/Gallery`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch gallery data');
  }

  const data = await res.json();
  return data.message;
}

export default async function Gallery1() {
  const galleryData = await getGalleryData();
  return <GalleryClient initialGalleryData={galleryData} />;
}