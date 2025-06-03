"use client";

import { useUser } from "@/hooks/useUser";

export function LogoutBtn(): React.JSX.Element {
  const { handleLogout } = useUser();
  return (
    <button
      className="text-sm font-medium border-b border-gray-200 dark:border-gray-800 cursor-pointer w-[10%] text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:dark:text-blue-400"
      type="button"
      onClick={() => handleLogout()}
    >
      Logout
    </button>
  );
}
