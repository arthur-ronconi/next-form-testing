import Link from "next/link";

export default function Footer() {
  return (
    <header className="h-16 w-full bg-red-500">
      <div className="h-full flex items-center gap-4 container mx-auto text-red-50">
        <Link href="/in">Inside</Link>
      </div>
    </header>
  );
}
