export default function Category({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
