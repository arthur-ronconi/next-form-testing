import Link from "next/link";
import Button from "./ui/Button";

export default function Header() {
  return (
    <header className="h-16 w-full bg-red-500">
      <div className="h-full flex items-center justify-between container mx-auto text-red-50">
        <Link href="/" className="font-bold text-xl">
          Home
        </Link>
        <div className="flex items-center gap-4 min-w-max">
          <Button>
            <Link href="/signin">Sign in</Link>
          </Button>
          <Button className="text-red-500 bg-red-50">
            <Link href="/signup">Sign up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
