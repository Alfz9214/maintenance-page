export default function Nav() {
  return (
    <nav className="bg-gray-800 flex flex-col w-full mx-auto py-3 justify-center">
      <ul className="flex gap-16 justify-center text-gray-300 text-sm">
        <li>
          <a href="/">Whyouget Productions</a>
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="https://docs.whyougetproductions.com">Docs</a>
        </li>
        <li>
          <a href="https://docs.whyougetproductions.com">Status</a>
        </li>
      </ul>
    </nav>
  );
}