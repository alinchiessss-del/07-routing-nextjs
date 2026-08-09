import { fetchNoteById } from '@/lib/api';

interface NoteDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function NoteDetailsPage({
  params,
}: NoteDetailsPageProps) {
  const { id } = await params;

  const note = await fetchNoteById(id);

  return (
    <article>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <p>{note.tag}</p>
    </article>
  );
}