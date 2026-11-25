import { Suspense } from "react";

export default function SearchPage({ searchParams }: PageProps<"/search">) {
  return (
    <main className="flex-1 bg-white px-4 py-10 text-[#1c1c1c] sm:px-6">
      <div className="mx-auto max-w-[1184px]">
        <Suspense fallback={<SearchFallback />}>
          <SearchResults searchParams={searchParams} />
        </Suspense>
      </div>
    </main>
  );
}

function SearchFallback() {
  return (
    <>
      <h1 className="text-3xl font-medium">Search</h1>
      <p className="mt-3 text-[#6b6b6b]">Loading results...</p>
    </>
  );
}

async function SearchResults({
  searchParams,
}: Pick<PageProps<"/search">, "searchParams">) {
  const params = await searchParams;
  const rawQuery = params.q;
  const query = Array.isArray(rawQuery) ? rawQuery[0] : rawQuery;

  return (
    <>
      <h1 className="text-3xl font-medium">
        {query ? `Results for “${query}”` : "Search"}
      </h1>
      <p className="mt-3 text-[#6b6b6b]">
        {query
          ? "Experiences for this search will show up here."
          : "Search destinations and experiences from the homepage."}
      </p>
    </>
  );
}
