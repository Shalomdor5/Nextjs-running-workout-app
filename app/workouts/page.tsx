import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p>ברוכים הבאים לאפליקציית בניית אימוני ריצה</p>
      <Link href="/workouts">לך לאימונים</Link>
    </div>
  );
}
