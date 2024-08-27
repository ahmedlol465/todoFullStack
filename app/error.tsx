'use client';

import { Button } from "@/components/ui/button";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="fixed inset-0 flex items-center p-5 w-full justify-center">
      <div className="text-center">
        <div className="inline-flex rounded-full bg-red-100 p-4">
          <div className="rounded-full bg-red-600 p-4">
            <svg className="w-16 h-16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.5 8.25C12.5 7.83579 12.1642 7.5 11.75 7.5H4.75C4.33579 7.5 4 7.83579 4 8.25C4 8.66421 4.33579 9 4.75 9H11.75C12.1642 9 12.5 8.66421 12.5 8.25Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="m17 16L22 21M22 16L17 21"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <h2 className="mt-5 text-[36px] font-bold lg:text-[50px]">Something went wrong</h2>
        <p className="mt-5 lg:text-lg">
          Oops something went wrong. Try to refresh the page or <br /> feel free to contact us if the problem persists.
        </p>
        <Button onClick={() => reset()} className="my-10">Try Again</Button>
      </div>
    </div>
  );
}
