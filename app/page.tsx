import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="flex justify-center border border-gray-300 p-4 rounded-lg bg-slate-900">
        Nice todo you've got there.
      </p>
    </main>
  );
}
