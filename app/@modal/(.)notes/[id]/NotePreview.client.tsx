'use client';

import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import Modal from '@/components/Modal/Modal';
import { fetchNoteById } from '@/lib/api';

interface NotePreviewClientProps {
  id: string;
}

export default function NotePreviewClient({
  id,
}: NotePreviewClientProps) {
  const router = useRouter();

  const {
    data: note,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      {isLoading && <p>Loading note...</p>}

      {isError && <p>Something went wrong. Please try again.</p>}

      {note && (
        <article>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <p>{note.tag}</p>
          <p>{note.createdAt}</p>
        </article>
      )}
    </Modal>
  );
}