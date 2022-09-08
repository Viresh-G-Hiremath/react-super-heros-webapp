export default function HeroImage({ slug }) {
  return (
    <img
      className="w-100 border rounded-5"
      src={`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/${slug}.jpg`}
      alt="Hero"
    />
  );
}
