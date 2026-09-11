import type { ReactNode } from "react";

type HighlightMatchProps = {
  text: string;
  query: string;
};

function normalize(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export default function HighlightMatch({ text, query }: HighlightMatchProps) {
  const activeQuery = query.trim();
  if (!activeQuery) return text;

  const characters = Array.from(text);
  const normalizedCharacters = characters.map(normalize);
  const normalizedText = normalizedCharacters.join("");
  const normalizedQuery = normalize(activeQuery);

  if (!normalizedQuery) return text;

  const normalizedToOriginal = normalizedCharacters.flatMap((character, index) =>
    Array.from(character, () => index),
  );
  const matches: Array<[number, number]> = [];
  let searchStart = 0;

  while (searchStart < normalizedText.length) {
    const matchStart = normalizedText.indexOf(normalizedQuery, searchStart);
    if (matchStart === -1) break;

    const matchEnd = matchStart + normalizedQuery.length;
    const originalStart = normalizedToOriginal[matchStart];
    const originalEnd = normalizedToOriginal[matchEnd - 1] + 1;
    matches.push([originalStart, originalEnd]);
    searchStart = matchEnd;
  }

  if (matches.length === 0) return text;

  const parts: ReactNode[] = [];
  let cursor = 0;
  matches.forEach(([start, end], index) => {
    if (start > cursor) parts.push(characters.slice(cursor, start).join(""));
    parts.push(
      <mark key={`${start}-${end}-${index}`} className="rounded-sm bg-blue-100 px-0.5 text-slate-900">
        {characters.slice(start, end).join("")}
      </mark>,
    );
    cursor = end;
  });
  if (cursor < characters.length) parts.push(characters.slice(cursor).join(""));

  return parts;
}
